import { Express } from 'express';
import { Quote } from '@cargatser/data'

const quotes: Quote[] = [{ title: 'quote 1' }, { title: 'quote 2' }];

export function addQuotesRoutes(app: Express) {
  app.get('/api/quotes', (req, resp) => resp.send(quotes));
  app.post('/api/addQuote', (req, resp) => {
    const newQuote = {
      title: `New quote ${Math.floor(Math.random() * 1000)}`,
    };
    quotes.push(newQuote);
    resp.send(newQuote);
  });
}