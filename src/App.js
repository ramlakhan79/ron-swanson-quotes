import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Fetch a new quote
  const fetchQuote = () => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => response.json())
      .then((data) => setQuote(data[0]));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Save quote to the list
  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>

      <div className="quote-card">
        <p>"{quote}"</p>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>

      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.length > 0 ? (
          savedQuotes.map((saved, index) => (
            <div key={index} className="saved-quote">
              <p>"{saved}"</p>
            </div>
          ))
        ) : (
          <p>No quotes saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
