import express, { Express, Request, Response } from "express";

const dotenv = require('dotenv');

dotenv.config();

const app: Express = express()
const port = process.env.PORT;

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! Ria')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})