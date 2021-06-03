import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({extended:true})

app.get('/', (req, res) => {
  let { name, age } = req.query;

  res.json({ data: `Hello ${name} sayang ${age}` });
});

app.post('/register', (req, res) => {
  console.log('>>', req.body);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
