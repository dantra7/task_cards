// app/pages/index.tsx

"use client";
import { useEffect, useState } from 'react';
import { fetchAirtableData } from 'app/utils/airtable';
import Card from 'app/components/card';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from Airtable when the component mounts
        const fetchData = async () => {
            try {
                const airtableData = await fetchAirtableData();
                setData(airtableData);
            } catch (error) {
                console.error('Error fetching Airtable data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Records from Airtable</h1>
            <div className="card-container">
                {data.map((record) => (
                    <Card key={record.id} record={record.fields} />
                ))}
            </div>
        </div>
    );
};

export default Home;
