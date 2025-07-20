import React from 'react'
import { Link } from 'react-router-dom'
import builogo from "../../images/builogo.jpg"
const Main = () => {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section - Mobile First Responsive */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden min-h-screen flex items-center">
        {/* Background decorative elements - Mobile optimized */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Mobile: smaller, fewer elements */}
          <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white opacity-10 rounded-full blur-sm sm:blur-lg md:blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-8 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-yellow-300 opacity-15 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-bounce"></div>
          <div className="absolute bottom-32 left-8 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-pink-300 opacity-15 rounded-full blur-sm sm:blur-lg md:blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-300 opacity-10 rounded-full blur-sm sm:blur-md md:blur-lg animate-ping"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-purple-300 opacity-10 rounded-full blur-sm sm:blur-lg md:blur-xl animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Text Content - Mobile First */}
            <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 sm:space-y-8">
              
              {/* Badge - Mobile responsive */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white bg-opacity-20 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white border-opacity-30 shadow-lg hover:bg-opacity-30 transition-all duration-300">
                  🎓 Innovatsion Ta'lim Markazi
                </span>
              </div>
              
              {/* Main Title - Progressive sizing */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg block">
                  Buxoro Innovatsiyalar
                </span>
                <span className="text-white drop-shadow-lg block mt-1 sm:mt-2">
                  Universiteti
                </span>
              </h1>
              
              {/* Description - Mobile optimized */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-full lg:max-w-2xl text-blue-50 leading-relaxed font-light px-2 sm:px-0">
                Orzularingizni haqiqatga aylantiring! 💫 Zamonaviy kasblarni o'rganing, 
                tajribali ustozlar bilan ishlang va kelajakda yuqori maoshli ishga ega bo'ling. 
                <span className="hidden sm:inline">
                  Buxoroda eng ko'p talaba ishga joylashadigan universitet - bu sizning imkoniyatingiz! 🚀
                </span>
                <span className="sm:hidden block mt-2">
                  Sizning kelajagingiz shu yerda! 🚀
                </span>
              </p>
              
              {/* CTA Button - Mobile responsive */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10 md:mb-12">
                <Link 
                  to="/hujjat-topshirish" 
                  className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-white/20 border-2 border-transparent hover:border-blue-200 w-full sm:w-auto text-center"
                >
                  🚀 Hujjat Topshirish
                </Link>
              </div>
            
              {/* Enhanced Stats - Mobile grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">8000+</div>
                  <div className="text-blue-200 text-xs sm:text-sm font-medium">Talabalar</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">21+</div>
                  <div className="text-blue-200 text-xs sm:text-sm font-medium">Yo'nalishlar</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-blue-200 text-xs sm:text-sm font-medium">Ishga Joylashish</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Image Content - Mobile optimized */}
            <div className="order-1 lg:order-2 relative px-4 sm:px-8 lg:px-0 mt-8 sm:mt-16 md:mt-20 lg:mt-0">
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                {/* Main image container */}
                <div className="relative group">
                  <img 
                    src={builogo} 
                    alt="BUI Logo" 
                    className="w-full h-auto rounded-full shadow-2xl hover:scale-105 transition-all duration-500 border-2 sm:border-4 border-white group-hover:border-yellow-300 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] object-cover"
                  />
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                {/* Educational Moving Icons - Mobile responsive */}
                {/* Top Right */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-sm sm:text-lg md:text-2xl shadow-2xl animate-bounce hover:animate-spin transition-all duration-300 cursor-pointer">
                  📚
                </div>
                
                {/* Bottom Left */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-sm sm:text-lg md:text-2xl shadow-2xl animate-pulse hover:animate-bounce transition-all duration-300 cursor-pointer">
                  🎓
                </div>
                
                {/* Left Side */}
                <div className="absolute top-1/4 -left-4 sm:-left-8 md:-left-12 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-xl shadow-2xl animate-ping cursor-pointer">
                  🔬
                </div>
                
                {/* Top Left */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-lg shadow-lg animate-pulse cursor-pointer">
                  💻
                </div>
                
                {/* Bottom Right */}
                <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-xl shadow-lg animate-bounce cursor-pointer">
                  🏆
                </div>
                
                {/* Right Side */}
                <div className="absolute top-1/2 -right-1 sm:right-1 md:right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-lg shadow-lg animate-spin cursor-pointer">
                  ⚡
                </div>
                
                {/* Bottom Center */}
                <div className="absolute bottom-2 left-12 sm:bottom-4 sm:left-16 md:bottom-4 md:left-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center text-sm sm:text-lg md:text-xl shadow-lg animate-pulse cursor-pointer">
                  🌟
                </div>
                
                {/* Top Right Corner */}
                <div className="absolute top-8 right-4 sm:top-12 sm:right-6 md:top-16 md:right-8 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex items-center justify-center text-xs sm:text-xs md:text-sm shadow-lg animate-bounce cursor-pointer">
                  🎯
                </div>
                
                {/* Right Lower */}
                <div className="absolute bottom-1/3 -right-1 sm:-right-2 md:-right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-lg shadow-lg animate-ping cursor-pointer">
                  🧠
                </div>
                
                {/* Left Upper */}
                <div className="absolute top-1/3 left-2 sm:left-3 md:left-4 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-lg shadow-lg animate-bounce cursor-pointer">
                  📖
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main 