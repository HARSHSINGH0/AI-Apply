import React from 'react';

function Header({ setActiveTab }) {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => setActiveTab('coverLetter')}>Cover Letter</li>
          <li onClick={() => setActiveTab('companyInfo')}>Company Info</li>
          <li onClick={() => setActiveTab('resumeGen')}>Resume Generator</li>
          <li onClick={() => setActiveTab('resumeUpdate')}>Resume Updater</li>
          <li onClick={() => setActiveTab('resumeTemplates')}>Resume Templates</li>
          <li onClick={() => setActiveTab('atsScore')}>ATS Score</li>
          <li onClick={() => setActiveTab('autofiller')}>Autofiller</li>
          <li onClick={() => setActiveTab('coldEmail')}>Cold Email</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
