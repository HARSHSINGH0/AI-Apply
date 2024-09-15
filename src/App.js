
import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CoverLetterGenerator from './components/CoverLetterGenerator';
import CompanyInfoSearch from './components/CompanyInfoSearch';
import ResumeGenerator from './components/ResumeGenerator';
import ResumeUpdater from './components/ResumeUpdater';
import ResumeTemplates from './components/ResumeTemplates';
import ATSScoreFinder from './components/ATSScoreFinder';
import Autofiller from './components/Autofiller';
import ColdEmailSender from './components/ColdEmailSender';

function App() {
  const [activeTab, setActiveTab] = useState('coverLetter');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'coverLetter':
        return <CoverLetterGenerator />;
      case 'companyInfo':
        return <CompanyInfoSearch />;
      case 'resumeGen':
        return <ResumeGenerator />;
      case 'resumeUpdate':
        return <ResumeUpdater />;
      case 'resumeTemplates':
        return <ResumeTemplates />;
      case 'atsScore':
        return <ATSScoreFinder />;
      case 'autofiller':
        return <Autofiller />;
      case 'coldEmail':
        return <ColdEmailSender />;
      default:
        return <CoverLetterGenerator />;
    }
  };

  return (
    <div className="App">
      <Header setActiveTab={setActiveTab} />
      {renderActiveComponent()}
      <Footer />
    </div>
  );
}

export default App;
