
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GalleryPage({ styles }) {
 
    console.log("Gallery displaying styles:", styles);
  return (
     <div>
          <Navbar />
        
          <h2 className="text-pink-600 text-3xl font-extrabold italic  decoration-pink-300 text-center mb-6 shadow-sm">
          Slay Gallery 🌸
          </h2>
    
          <div className="grid grid-cols-4 gap-6 p-4">
      {styles.map((style) => (
        <div
          key={style.id}
          className="bg-pink-100 border border-pink-300 rounded-2xl shadow-md p-6 mb-4 hover:shadow-lg transition duration-300 ease-in-out"
        >
          <img 
            src={style.image}
            alt={style.title}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h4 className="text-pink-700 font-bold text-lg mb-2">{style.title}</h4>
          <p className="text-gray-700 italic mb-1">{style.description}</p>
          <p className="text-sm text-rose-400 mb-2">Category: {style.category}</p>
          <p
            className={`${
              style.is_favorite ? "text-pink-900 font-semibold" : "text-gray-400"
            }`}
          >
            {style.is_favorite ? "Favorite 💗" : "Not Favorite"}
          </p>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  )
}
export default GalleryPage;