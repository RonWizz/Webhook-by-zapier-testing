// pages/api/dataReceiver.js
export default async (req, res) => {
    if (req.method === 'POST') {
      // Handle data sent from Zapier here
      const data = req.body;
      // Process and store the data as needed
      res.status(200).json({ message: 'Data received successfully' });
    } else {
      res.status(405).end();
    }
  };