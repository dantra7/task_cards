/*import Airtable from 'airtable';

const fetchAirtableData = async () => {
    try {
        const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

        const records = [];
        
        await base('WorkMenu').select({
            maxRecords: 3,
            view: 'requests-for-all'
        }).eachPage(
            function page(pageRecords, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                records.push(...pageRecords.map(record => ({
                    id: record.id,
                    name: record.get('Name'), // Adjust based on your actual field names
                    // Add other fields as needed
                })));

                // To fetch the next page of records, call `fetchNextPage`.
                // If there are more records, `page` will get called again.
                // If there are no more records, `done` will get called.
                fetchNextPage();
            },
            async function done(err) {
                if (err) {
                    console.error('Error retrieving Airtable records:', err);
                    throw new Error('Failed to retrieve Airtable records');
                }

                console.log('Retrieved Airtable records:', records);
            }
        );

        return records;
    } catch (error) {
        console.error('Error fetching Airtable data:', error);
        throw new Error('Failed to fetch Airtable data');
    }
};

export { fetchAirtableData };
*/