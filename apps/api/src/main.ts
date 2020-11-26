/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as mongoose from 'mongoose';

import { environment } from './environments/environment'
import quotes from'./app/quotes/routes'

const app = express();
app.use(express.json())


mongoose.connect(environment.mongoConnection, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/v1/quotes', quotes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
