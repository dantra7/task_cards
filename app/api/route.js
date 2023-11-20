// app/api/route.js

import { NextResponse } from 'next/server';
//import { fetchAirtableData } from '../utils/airtable'; // Adjust the path accordingly
import Airtable from 'airtable';

const fetchAirtableData = async () => {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
    const records = await base('WorkMenu').select({}).all();
    const processedData = records.map((record) => {
        return {
            id: record.id,
            name: record.Name,
            pitch: record.Pitch
        };
    });
    console.log('Processed Data:', processedData);
    return processedData;
};

export async function GET(request) {
    try {
        const airtableData = await fetchAirtableData();
        return NextResponse.json({ result: airtableData });
    } catch (error) {
        console.error('Error fetching Airtable data:', error);
        return NextResponse.error(new Error('Failed to fetch Airtable data'));
    }
}

export async function POST(request) {
    try {
        const { responses } = await request.json(); // Extract user responses

        const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);
        for (const response of responses) {
            // Modify this logic based on how you want to save data in Airtable
            await base('WorkMenu').update([
                {
                    id: response.questionId,
                    fields: {
                        UserResponse: response.option,
                    },
                },
            ]);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending data to Airtable:', error);
        return NextResponse.error(new Error('Failed to send data to Airtable'));
    }
}
