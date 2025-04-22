import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

function SubmitForm({ onAddStyle }) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStyle = {
      id: Date.now().toString(),
      category: category,
      title: title,
      description: description,
      image: image,
      is_favorite: isFavorite
    };

    onAddStyle(newStyle);

   
    setTitle("");
    setDescription("");
    setCategory("");
    setImage("");
    setIsFavorite(false);

   toast("Style Added to Your GlowNest!");
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-10 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl p-8 shadow-lg bg-white border border-pink-100">
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-1">Add Your Style</h2>
              <p className="text-pink-500">Share your fabulous look with the GlowNest</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <select
                id="category"
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200 bg-white text-gray-700"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>Choose your style category...</option>
                <option value="Clothes">Clothes</option>
                <option value="Hair">Hair</option>
                <option value="Nails">Nails</option>
                <option value="Heels">Heels</option>
                <option value="Sport Shoes">Sport Shoes</option>
              </select>
            </div>
            
            <div className="mb-5">
              <input
                type="text"
                id="title"
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200 bg-white text-gray-700"
                placeholder="Give your glow a title…"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="mb-5">
              <textarea
                id="description"
                rows="3"
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200 bg-white text-gray-700"
                placeholder="Describe your style – What makes it special? When would you wear it?"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="mb-5">
              <input
                type="text"
                id="image"
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200 bg-white text-gray-700"
                placeholder="Link to your style image or inspiration..."
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            
           
            <div className="mb-6">
              <label className="flex items-center cursor-pointer group">
                <div className="relative inline-block">
                  <input
                    type="checkbox"
                    id="is_favorite"
                    className="sr-only"
                    checked={isFavorite}
                    onChange={(e) => setIsFavorite(e.target.checked)}
                  />
                  <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ease-in-out ${isFavorite ? 'scale-110' : 'scale-100'}`}>
                    {isFavorite ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff4081" className="w-6 h-6">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff4081" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className={`ml-2 transition-all duration-300 ${isFavorite ? 'text-pink-500 font-medium' : 'text-gray-700'}`}>
                  {isFavorite ? "Added to Favorites! 💗" : "Add to My Favorites"}
                </span>
              </label>
            </div>

            <button 
  type="submit"
  className="w-full py-3.5 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300 ease-in-out"
>
  Save to My GlowNest
</button>

            <ToastContainer />
          </form>
          
          <div className="text-center mt-4 text-sm text-gray-500">
          Glow Boldly, Nest Confidently!
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;