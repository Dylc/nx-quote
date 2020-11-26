import React, { useEffect, useState } from 'react';
import { IQuote } from '@cargatser/data'

import './app.css';

export const App = () => {

  const [quotes, setQuotes] = useState<IQuote[]>([]);

  useEffect(() => {
    fetch('/api/v1/quotes')
      .then((_) => _.json())
      .then(setQuotes);
  }, []);


  function addQuote() {
    fetch('/api/v1/quotes/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(q),
    }).then((_) => _.json())
      .then((newQuote) => {
        setQuotes([...quotes, newQuote]);
      });
  }

  return (
    <>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((q) => (
          <pre key={q._id}>
            {JSON.stringify(q, null, 3)}
            <br/>
            ------------------------------------------------------------------------------
          </pre>
        ))}
      </ul>
      <button id={'add-quote'} onClick={addQuote}>
        Add Quote
      </button>
    </>
  );
}

export default App;
