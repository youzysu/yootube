import express from 'express';
import morgan from 'morgan';

const PORT = 4000;
const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use(logger);
app.get('/', (req, res) => res.send('<h1>Home</h1>'));
app.get('/protected', (req, res) => res.send('<h1>Protected</h1>'));
app.get('/login', (req, res) => res.send('<h1>Login</h1>'));

app.listen(PORT, () =>
  console.log(`Server is listening on port http://localhost:${PORT}`)
);
