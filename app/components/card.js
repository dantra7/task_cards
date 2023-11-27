import { useState } from 'react';
import fetchAirtableData from '../api/route';

const Card = ({ record }) => {
  return (
    <div className="card">
      <h3>{record.fields.name}</h3>
      <p>{record.fields.pitch}</p>
      <p>{record.status}</p>
    </div>
  );
};

export default Card;