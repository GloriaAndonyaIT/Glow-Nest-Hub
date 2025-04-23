import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage({ styles, onSearch }) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY * 0.3;
      controls.start({ y: yPos });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      <Navbar onSearch={onSearch} />

     
      <section className="relative h-screen overflow-hidden">
    
    <motion.div 
      className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-purple-900/10 to-pink-900/30 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
    
   
    <motion.div 
      className="absolute inset-0"
      animate={controls}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <img 
        src="https://images.unsplash.com/photo-1738229114998-e7599e9e6610?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Soft girl aesthetic background"
        className="w-full h-full object-cover"
      />
    </motion.div>
    
    
    <div className="relative z-20 h-full flex items-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
              GLOWNEST
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">
              HUB
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-pink-100 mb-8 max-w-2xl mx-auto"
        >
          Where your soft girl era blossoms in style and confidence ✨
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/submit" 
            className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all shadow-lg transform hover:scale-105 group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Share Your Style <span className="text-lg"></span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          
          <Link 
            to="/gallery" 
            className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all shadow-lg transform hover:scale-105 group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Gallery <span className="text-lg">🌸</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </motion.div>
    </div>

    
    <motion.div 
      className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-pink-300/20 backdrop-blur-sm z-10"
      animate={{
        y: [0, -20, 0],
        x: [0, 15, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-purple-300/20 backdrop-blur-sm z-10"
      animate={{
        y: [0, 20, 0],
        x: [0, -15, 0]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    
    
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-transparent flex justify-center items-center z-10"
      animate={{
        y: [0, 20, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white animate-pulse"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 9l7 7 7-7"
        />
      </svg>
    </motion.div>
</section>


      <div className="px-4 md:px-20 py-10 space-y-16 bg-white">
     
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
        
        <section className="text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">About GlowNest</h2>
          <p className="text-gray-600  text-lg leading-relaxed max-w-4xl mx-auto mb-6">
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
              <p className="text-sm text-gray-600">Upload your unique looks. Let the world see your glow.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-pink-500 text-2xl mb-2">👀</div>
              <h3 className="font-semibold text-gray-800">Discover</h3>
              <p className="text-sm text-gray-600">Find fresh style inspo — from hair to heels, we got you.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-pink-500 text-2xl mb-2">💗</div>
              <h3 className="font-semibold text-gray-800">Slay</h3>
              <p className="text-sm text-gray-600">Turn heads. Break necks. Walk like you own the runway.</p>
            </div>
          </div>
        </section>

     
        <section className="bg-purple-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">Community Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"GlowNest helped me unlock my signature style and feel confident in my look — every single day!"</p>
              <p className="font-semibold text-pink-600">— Marycharity Mbone.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"The vibe is so cute and uplifting! I can't wait to see it grow into a big girl gang of fashion lovers."</p>
              <p className="font-semibold text-pink-600">— Marcus J.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"Ever since I found GlowNest, I've been loving my glow-up journey. It's giving feminine energy and I'm here for it!"</p>
              <p className="font-semibold text-pink-600">— Emily Karuana.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">"It's the soft life vibes for me! I finally feel free to explore my style and be unapologetically girly."</p>
              <p className="font-semibold text-pink-600">— Zara M.</p>
            </div>
          </div>
        </section>

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

      
        <section className="text-center">
          <h3 className="text-xl italic text-gray-600 max-w-2xl mx-auto">
           "At GlowNest, your style speaks before you do ✿." – Rachel Zoe
          </h3>
        </section>
      </div>


      <Footer />
    </>
  );
}

export default HomePage;