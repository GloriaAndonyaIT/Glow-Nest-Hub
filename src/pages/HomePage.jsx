// import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import HeroSection from "../components/HeroSection";
function HomePage({ styles }) {
  

  return (
    <>
      <Navbar />

      <div className="px-4 md:px-20 py-10 space-y-16">
        {/* Hero Section with animated gradient */}
        <section className="bg-gradient-to-r from-pink-200 via-purple-100 to-pink-100 p-10  rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">Welcome to GlowNest Hub 🌸</h1>
    <p className="text-lg md:text-xl text-gray-700 mb-8 italic max-w-2xl mx-auto">
      Where your soft girl era begins in style ✨
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link 
        to="/submit" 
        className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all shadow-md transform hover:scale-105"
      >
        Share Your Style
      </Link>
      <Link 
        to="/gallery" 
        className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-all shadow-md transform hover:scale-105"
      >
        Explore Gallery
      </Link>
    </div>
  </div>
</section>
     

      

        {/* About Section with more engaging content */}
        <section className="text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">About GlowNest</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
          Welcome to GlowNest Hub 💄 — where beauty meets boldness and every glow-up has a story. This isn't just a hub; it's a whole vibe 💅 designed for ladies who dream big, dress loud, and walk with purpose.
          Here, we serve you the hottest hairstyles 💇‍♀️, trendiest outfits 👗, sleek heels 👠, and sporty kicks 👟 — all in one stylish space. Whether you're curating your next killer look or searching for daily inspiration, GlowNest Hub is your ultimate glam sanctuary 💋.
          We believe that when you glow with confidence and nest in your boldness, nothing can stop you. Because this hub isn't just about what you wear — it's about how you show up. 👸
         ✨ Glow Confidently. Nest Boldly. ✨
         Only at GlowNest Hub 💎 — your glow, your power, your place. 💫
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-pink-500 text-2xl mb-2">🌟</div>
              <h3 className="font-semibold text-gray-800">Share</h3>
              <p className="text-sm text-gray-600">Upload your unique looks.Let the world see your glow.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-pink-500 text-2xl mb-2">👀</div>
              <h3 className="font-semibold text-gray-800">Discover</h3>
              <p className="text-sm text-gray-600">Find fresh style inspo — from hair to heels, we got you.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-pink-500 text-2xl mb-2">💗</div>
              <h3 className="font-semibold text-gray-800"> Slay</h3>
              <p className="text-sm text-gray-600">Turn heads. Break necks. Walk like you own the runway.</p>
            </div>
            
           
          </div>
        </section>

        {/* Trending Styles - Improved layout */}
        {styles?.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-pink-500">✨ Trending Styles</h2>
              <Link to="/gallery" className="text-purple-500 hover:text-purple-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {styles.slice(0, 3).map((style) => (
                <div key={style.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition transform hover:translate-y-1">
                  <div className="relative">
                    <img 
                      src={style.image} 
                      alt={style.title} 
                      className="rounded-lg h-48 w-full object-cover mb-3"
                    />
                    <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      {style.category}
                    </span>
                  </div>
                  <h4 className="text-pink-700 font-semibold">{style.title}</h4>
                 
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials Section - New addition */}
        <section className="bg-purple-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">Community Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"GlowNest helped me unlock my signature style and feel confident in my look — every single day!"</p>
              <p className="font-semibold text-pink-600">— Marycharity Mbone.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"The vibe is so cute and uplifting! I can’t wait to see it grow into a big girl gang of fashion lovers."</p>
              <p className="font-semibold text-pink-600">— Marcus J.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"Ever since I found GlowNest, I’ve been loving my glow-up journey. It’s giving feminine energy and I’m here for it!"</p>
              <p className="font-semibold text-pink-600">— Emily Karuana.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"It’s the soft life vibes for me! I finally feel free to explore my style and be unapologetically girly."</p>
              <p className="font-semibold text-pink-600">— Zara M.</p>
              
            </div>
            
            
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="text-center bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-pink-600 mb-3">Ready to Glow?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
           GlowNest Hub is still blooming — and you're one of the first petals.
          Come glow with us, queen. Your glow, your story, your sisterhood. 🌸
          </p>
          <Link 
            to="/submit"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full shadow hover:scale-105 transition font-semibold"
          >
            Submit Your Style 
          </Link>
        </section>

        {/* Inspiration Quote */}
        <section className="text-center">
          <h3 className="text-xl italic text-gray-600 max-w-2xl mx-auto">
           “At GlowNest, your style speaks before you do ✿.” – Rachel Zoe
          </h3>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;