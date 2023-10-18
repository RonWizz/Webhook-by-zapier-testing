import axios from 'axios';


export async function fetchData() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = 'Hotel website'; // Replace with your table name

  const url = `https://api.airtable.com/v0/${baseId}/${table}`;
  console.log('API Key:', apiKey);
  console.log('Base ID:', baseId);
  console.log('Constructed URL:', url);
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    console.error('Response:', error.response); // Log the response for additional information
    return [];
  }
}