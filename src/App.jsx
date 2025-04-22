
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GalleryPage from "./pages/GalleryPage"; 
import SubmitForm from "./components/SubmitForm";

import "./App.css";


function App() {
  const [styles, setStyles] = useState([]);
  
  // Fetch initial styles from API
  useEffect(() => {
    fetch("http://localhost:3000/styles")
      .then((response) => response.json())
      .then((data) => {
        setStyles(data);
        console.log("Initial styles loaded:", data);
      })
      .catch(error => console.error("Error loading styles:", error));
  }, []);

  const handleAddStyle = (newStyle) => {
   
    setStyles([...styles, newStyle]);
    console.log("New style added:", newStyle);
    
    // Send new style to API
    fetch("http://localhost:3000/styles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStyle),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/gallery" element={<GalleryPage styles={styles} />} />
          <Route path="/submit" element={<SubmitForm onAddStyle={handleAddStyle} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;