const axios = require('axios'); // legacy way

const service_url = "http://api.weatherapi.com/v1/current.json?key=ca738184b80946068f8182409262802&q=London&aqi=no"

async function getData() {
try {
  const response = await axios.get(service_url);
  console.log(response);
const { status, statusText, data } = response;

if (status === 200) {
  console.log('Request successful!');
  console.log('Data:', data);
} else {
  console.error("Request failed with status:", status);
}
} catch (error) {
  console.error("Error: Request failed:", error.message);
}
}
getData();