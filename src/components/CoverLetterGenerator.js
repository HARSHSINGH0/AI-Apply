import React, { useState } from 'react';
import AIInputForm from './common/AIInputForm';

function CoverLetterGenerator() {
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = async (input) => {
    // TODO: Implement AI cover letter generation
    setCoverLetter('Your AI-generated cover letter will appear here.');
  };

  return (
    <div>
      <h2>AI Cover Letter Generator</h2>
      <AIInputForm onSubmit={handleSubmit} />
      {coverLetter && <div>{coverLetter}</div>}
    </div>
  );
}

export default CoverLetterGenerator;
