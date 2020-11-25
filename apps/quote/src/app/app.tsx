import React, { useEffect, useState } from 'react';
import { Quote } from '@cargatser/data'

import './app.css';

export const App = () => {

  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch('/api/quotes')
      .then((_) => _.json())
      .then((qs) => {
        console.log(qs)
        setQuotes(qs)
      });
  }, []);


  function addQuote() {
    fetch('/api/addQuote', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newQuote) => {
        setQuotes([...quotes, newQuote]);
      });
  }

  return (
    <>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((q) => (
          <li className={'quote'}>{q.title}</li>
        ))}
      </ul>
      <button id={'add-quote'} onClick={addQuote}>
        Add Quote
      </button>
    </>
  );
}

export default App;
