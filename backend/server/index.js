const Express = require('express');

const app = Express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('your app is connected');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
