import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GalleryPage({ styles, onDeleteStyle }) {
  console.log("Gallery displaying styles:", styles);
  
  return (
    <div>
      <Navbar />
      
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-pink-600 text-3xl font-extrabold italic decoration-pink-300 text-center mb-6 md:mb-10 shadow-sm">
          Slay Gallery 🌸
        </h2>
        
        {/* Responsive grid that adapts to different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {styles.length > 0 ? (
            styles.map((style) => (
              <div
                key={style.id}
                className="bg-pink-100 border border-pink-300 rounded-2xl shadow-md p-4 md:p-6 mb-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <img 
                  src={style.image}
                  alt={style.title}
                  className="w-full h-40 md:h-48 object-cover rounded-xl mb-3"
                />
                <h4 className="text-pink-700 font-bold text-lg mb-1">{style.title}</h4>
                <p className="text-gray-700 italic mb-1 text-sm md:text-base line-clamp-2">{style.description}</p>
                <p className="text-sm text-rose-400 mb-2">Category: {style.category}</p>
                
                <div className="flex justify-between items-center">
                  <p
                    className={`${
                      style.is_favorite ? "text-pink-900 font-semibold" : "text-gray-400"
                    } text-sm`}
                  >
                    {style.is_favorite ? "Favorite 💗" : "Not Favorite"}
                  </p>
                  <button
                    onClick={() => onDeleteStyle(style.id)}
                    className="bg-gradient-to-r from-pink-400 to-purple-500 text-white text-xs px-3 py-1 rounded-full hover:from-pink-500 hover:to-purple-600 transition shadow-sm hover:shadow-md font-medium"
                    aria-label="Delete style"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">No styles to display yet. Be the first to share your style!</p>
              <a 
                href="/submit" 
                className="inline-block mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Share Your Style
              </a>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default GalleryPage;