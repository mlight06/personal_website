const Express = require('express');
const path = require('path');

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.static(path.join(__dirname, '../../frontend/deploy')));
app.use(Express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/deploy/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('your app is connected');
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
