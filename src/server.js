const cors_proxy = require('cors-anywhere');

const PORT = process.env.PORT || 8000;

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});

