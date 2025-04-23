import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import SubmitPage from "./pages/SubmitPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

function App() {
  const [styles, setStyles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch initial styles from API
  useEffect(() => {
    fetch("https://glow-nest-hub-1.onrender.com/styles")
      .then((response) => response.json())
      .then((data) => {
        setStyles(data);
      })
      .catch(error => {
        console.error("Error loading styles:", error);
      });
  }, []);

  const handleAddStyle = (newStyle) => {
    // Add to local state first
    setStyles([...styles, newStyle]);

    // Send to API
    fetch("https://glow-nest-hub-1.onrender.com/styles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStyle),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error adding style:", error);
      });
  };

  const handleDeleteStyle = (id) => {
    // Optimistically update UI
    const updatedStyles = styles.filter(style => style.id !== id);
    setStyles(updatedStyles);

    // Delete from API
    fetch(`https://glow-nest-hub-1.onrender.com/styles/${id}`, {
      method: "DELETE",
    })
      .catch(error => {
        console.error("Error deleting style:", error);
        // Revert back if failed
        fetch("https://glow-nest-hub-1.onrender.com/styles")
          .then(response => response.json())
          .then(data => setStyles(data));
      });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage styles={styles} onSearch={handleSearch} />
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryPage
                styles={styles}
                onDeleteStyle={handleDeleteStyle}
                onSearch={handleSearch}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/submit"
            element={
              <SubmitPage
                onAddStyle={handleAddStyle}
                onSearch={handleSearch}
              />
            }
          />
        </Routes>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;