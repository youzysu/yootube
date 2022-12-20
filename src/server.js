import express from 'express';
const app = express();

// Listen
const PORT = 4000;
const handleListening = () => {
  console.log(`server is listening on port ${PORT}`);
};

app.listen(PORT, handleListening);

// Requests
const handleHome = (req, res) => {
  res.send('This is home page');
  res.end();
};
app.get('/', handleHome);
