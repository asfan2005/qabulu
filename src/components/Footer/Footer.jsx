import React from 'react'
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaTelegram, href: '#', color: 'hover:text-blue-400', name: 'Telegram' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-400', name: 'Instagram' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-500', name: 'YouTube' },
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600', name: 'Facebook' },
  ]

  const quickLinks = [
    { title: 'Bosh sahifa', href: '#' },
    { title: 'Biz haqimizda', href: '#' },
    { title: 'Yo\'nalishlar', href: '#' },
    { title: 'Masofaviy ta\'lim', href: '#' },
    { title: 'Litsenziyalar', href: '#' },
    { title: 'Aloqa', href: '#' },
  ]

  const faculties = [
    { title: 'Axborot texnologiyalari', href: '#' },
    { title: 'Iqtisodiyot va menejment', href: '#' },
    { title: 'Xorijiy tillar', href: '#' },
    { title: 'Tabiiy fanlar', href: '#' },
    { title: 'Injenerlik', href: '#' },
    { title: 'Gumanitar fanlar', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* University Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    BIU
                  </span>
                </h3>
                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                  Buxoro Innovatsiyalar Universiteti
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Zamonaviy ta'lim, yuqori sifat va innovatsiyalar markazi. 
                  Kelajakda muvaffaqiyatli kasbiy faoliyat olib borish uchun eng yaxshi tanlov.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h5 className="font-semibold mb-4 text-gray-300">Ijtimoiy tarmoqlar</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-xl font-bold mb-6 text-gray-300">Tezkor havolalar</h5>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Faculties */}
            <div>
              <h5 className="text-xl font-bold mb-6 text-gray-300">Fakultetlar</h5>
              <ul className="space-y-3">
                {faculties.map((faculty, index) => (
                  <li key={index}>
                    <a 
                      href={faculty.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></span>
                      {faculty.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-xl font-bold mb-6 text-gray-300">Aloqa ma'lumotlari</h5>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="mt-1 p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Buxoro viloyati, Buxoro shahar,<br />
                      K. Murtazov ko'chasi, 10-uy
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                    <FaPhone className="w-4 h-4 text-green-400" />
                  </div>
                  <a href="tel:+998712345678" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +998 (71) 234-56-78
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <FaEnvelope className="w-4 h-4 text-purple-400" />
                  </div>
                  <a href="mailto:info@biu.uz" className="text-gray-400 hover:text-white transition-colors duration-300">
                    info@biu.uz
                  </a>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="mt-1 p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                    <FaClock className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Dushanba - Juma:<br />
                      9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Buxoro Innovatsiyalar Universiteti. Barcha huquqlar himoyalangan.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Maxfiylik siyosati
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Foydalanish shartlari
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sayt xaritasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 