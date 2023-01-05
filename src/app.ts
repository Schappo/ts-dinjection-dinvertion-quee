import express from 'express';

export function sum(a: number, b: number) {
  return a + b;
}

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});
