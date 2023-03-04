import React, { useState } from 'react';
import './styles/QuotesPage.css';
import quotes from './arrayOfQuotes';

function Quote() {
  const [quote, setQuote] = useState('');

  const updateQuote = () => {
    const quoteIndex = Math.round(Math.random() * (quotes.length - 1));
    setQuote(quotes[quoteIndex]);
  };

  return (
    <div className="quoteContainer">
      <p className="quotes">
        &quot;
        {quote === '' ? 'Math is the source code of reality' : quote}
        &quot;
      </p>
      <button type="button" onClick={updateQuote} className="generateQuotes">
        Generate quote
      </button>
    </div>
  );
}

export default Quote;
