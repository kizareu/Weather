const axios = require('axios'); // legacy way

const service_url = "https://ip-intelligence.abstractapi.com/v1/?api_key=6737c6fc96bd46bf9e2cc2345a223b2c&ip_address=2607:fea8:2c63:9000:9962:7c57:1f6f:4f92"

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