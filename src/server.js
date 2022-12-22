import express from 'express';
const app = express();

const PORT = 4000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

const URLLogger = (req, res, next) => {
  console.log('Path:', req.path);
  next();
};
const timeLogger = (req, res, next) => {
  const currentTime = new Date(Date.now());
  console.log('Time:', new Intl.DateTimeFormat('ko-KR').format(currentTime));
  next();
};
const securityLogger = (req, res, next) => {
  if (req.protocol === 'https') console.log('Secure');
  else console.log('Insecure');
  next();
};
const protectorLogger = (req, res, next) => {
  if (req.path === '/protected') {
    return res.send('<h1>This approach is forbidden</h1>');
  }
  next();
};

app.use(URLLogger, timeLogger, securityLogger, protectorLogger);

app.get('/', (req, res) => res.send('<h1>Home</h1>'));
app.get('/protected', (req, res) => res.send('<h1>Protected</h1>'));
