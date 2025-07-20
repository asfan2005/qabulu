import React, { useState, useEffect } from 'react'
import builogo from "../../images/builogo.jpg"
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-gradient-to-r from-white to-gray-50 shadow-lg'
    }`}>
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo va universitet nomi */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0 mr-2">
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-70"></div>
              <img 
                src={builogo} 
                alt="BUI Logo" 
                className="relative w-14 h-14 md:w-16 md:h-16 object-cover rounded-full shadow-lg border-2 border-white transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <h1 className="text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 block">
                  <span className="hidden xs:inline">Buxoro Innovatsiyalar Universiteti</span>
                  <span className="xs:hidden">Buxoro Innovatsiyalar<br />Universiteti</span>
                </span>
              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5 hidden sm:block">
                Kelajakni birga quramiz
              </p>
            </div>
          </div>
          
          {/* Desktop ijtimoiy tarmoqlar */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://t.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Telegram
              </span>
            </a>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full bg-gradient-to-r from-pink-50 to-purple-100 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Instagram
              </span>
            </a>
            <a 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                YouTube
              </span>
            </a>
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-100 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Facebook
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex justify-center space-x-4">
              <a 
                href="https://t.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                aria-label="Telegram"
              >
                <FaTelegram className="w-5 h-5 text-blue-600 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-pink-50 to-purple-100 hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-pink-600 hover:text-white" />
              </a>
              <a 
                href="https://www.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-red-50 to-red-100 hover:from-red-500 hover:to-red-600 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 text-red-600 hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-100 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-blue-700 hover:text-white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 