import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubmitForm from "../components/SubmitForm";


function SubmitPage({ onAddStyle, onSearch }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearch={onSearch} />
      <div className="flex-grow">
        <SubmitForm onAddStyle={onAddStyle} />
      </div>
      <Footer />
    </div>
  );
}

export default SubmitPage;