
import React from 'react';
import Navbar from '@/components/Navbar';
import TrialContent from '@/components/TrialContent';
import Footer from '@/components/Footer';

const Trial: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <TrialContent />
      </div>
      <Footer />
    </>
  );
};

export default Trial;
