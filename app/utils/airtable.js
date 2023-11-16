// utils/airtable.js

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'AIRTABLE_API_TOKEN'}).base('app2oxhnP3MBdi83M');

base('WorkMenu').select({
    // Selecting the first 3 records in requests-for-all:
    maxRecords: 3,
    view: "requests-for-all"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

/*import axios from 'axios';

const airtable = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/WorkMenu`,
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
  },
});

// Example: Fetch records from an Airtable table
async function fetchAirtableData() {
  try {
    const response = await airtable.get('/WorkMenu');
    return response.data.records;
  }
  catch (error) {
    // Log the error or handle it as needed
    console.error('Error fetching Airtable data:', error.message);
    return [];
  }
}

export { fetchAirtableData }; */