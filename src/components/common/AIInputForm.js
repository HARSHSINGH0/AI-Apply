
import React, { useState } from 'react';

function AIInputForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter job description or other relevant information"
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default AIInputForm;