import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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

  const handleDeleteStyle = (id) => {
    // Update local state first for immediate UI update
    setStyles(styles.filter(style => style.id !== id));
    
    // Delete from API
    fetch(`http://localhost:3000/styles/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(`Style with id ${id} deleted successfully`);
      })
      .catch(error => {
        console.error("Error deleting style:", error);
        // Revert the state change if the API call fails
        fetch("http://localhost:3000/styles")
          .then(response => response.json())
          .then(data => setStyles(data));
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage styles={styles} />} />
          <Route path="/gallery" element={<GalleryPage styles={styles} onDeleteStyle={handleDeleteStyle} />} />
          <Route path="/submit" element={<SubmitForm onAddStyle={handleAddStyle} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;