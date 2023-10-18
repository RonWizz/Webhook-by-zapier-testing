import axios from 'axios';

const webflowApiKey = process.env.b58189ec84ac53094f208fc1dcb34f0983bf8644d0c4318b5ccf3c35b29311a5;
const webflowApiUrl = '/webflow-api/collections/hotel-website-002e29.webflow.io/destination-page/destination-page/items';

async function fetchWebflowData() {
  try {
    const response = await axios.get(webflowApiUrl, {
      headers: {
        Authorization: `Bearer ${webflowApiKey}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching Webflow data:', error);
    return [];
  }
}

export default fetchWebflowData;

