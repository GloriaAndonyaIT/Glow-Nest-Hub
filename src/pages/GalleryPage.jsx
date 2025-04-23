import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GalleryPage({ styles, onDeleteStyle, onSearch, searchQuery }) {
  const [filteredStyles, setFilteredStyles] = useState(styles);
  
  useEffect(() => {
    if (!searchQuery || !searchQuery.trim()) {
      setFilteredStyles(styles);
      return;
    }
    
    const filtered = styles.filter(style => 
      style.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredStyles(filtered);
  }, [styles, searchQuery]);

  const handleDelete = (id) => {
  
    toast.error("Style Deleted from Your Gallery!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    
    onDeleteStyle(id);
  };

  return (
    <div>
      <Navbar onSearch={onSearch} />
      
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-pink-600 text-3xl font-extrabold italic decoration-pink-300 text-center mb-6 md:mb-10 shadow-sm">
          Slay Gallery 🌸
        </h2>
        
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing results for: <span className="font-medium text-pink-600">"{searchQuery}"</span>
              <button 
                onClick={() => onSearch("")}
                className="ml-2 text-purple-500 hover:text-purple-700 text-sm underline"
              >
                Clear search
              </button>
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredStyles.length > 0 ? (
            filteredStyles.map((style) => (
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
                    onClick={() => handleDelete(style.id)}
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
              {searchQuery ? (
                <div>
                  <p className="text-gray-500 text-lg">No styles found matching "{searchQuery}".</p>
                  <button 
                    onClick={() => onSearch("")}
                    className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
                  >
                    Show All Styles
                  </button>
                </div>
              ) : (
                <div>
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
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default GalleryPage;