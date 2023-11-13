"use client";
// pages/index.js

import { useEffect, useState } from 'react';
import { fetchAirtableData } from '/app/utils/airtable';
import Card from '/app/components/card';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Airtable when the component mounts
    const fetchData = async () => {
      const airtableData = await fetchAirtableData();
      setData(airtableData);
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
