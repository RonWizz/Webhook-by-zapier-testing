import { NextPage } from "next";
import { Destination } from "../../devlink";
import { Footer } from "../../devlink";
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../fetchData';
import { config } from "process";
function Destiny() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData().then((records) => {
        console.log(records);
        setData(records);
      });
    }, []);
    return (
        <>
        <Destination />
        <div>
            <h1>Your Airtable Data</h1>
            <ul>
                {data.map((record) => (
                <li key={record.id}>
                    <h2>{record.fields['Dubai - A city profile']}</h2>
                    <p>{record.fields['Description']}</p>
                    <p>{record.fields['Short Description']}</p>
                    <img src={record.fields['Image'][0].url} alt={record.fields['Image'][0].filename} />
                    <a href={record.fields['Button Field']} target="_blank" rel="noopener noreferrer">Learn More</a>
                    <img src={record.fields['Chota img'][0].url} alt={record.fields['Chota img'][0].filename} />
              </li>
                ))}
            </ul>
        </div>
        <Footer />
        </>
    );
};

export default Destiny;


