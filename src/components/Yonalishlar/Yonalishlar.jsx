import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Yonalishlar() {
  const [selectedType, setSelectedType] = useState('Bakalavriat')
  const [showContactModal, setShowContactModal] = useState(false)

  // Contact information
  const contactInfo = [
    {
      id: 1,
      title: "Qabul komissiyasi",
      phone: "+998 55 307 50 00",
      description: "Asosiy qabul bo'limi"
    },
    {
      id: 4,
      title: "Talabalar xizmati",
      phone: "+998 55 307 50 03",
      description: "Talabalar bilan bog'liq masalalar"
    },
  ]

  const directions = [
    // BAKALAVRIAT YO'NALISHLARI
    {
      id: 1,
      name: "Amaliy matematika",
      code: "60540200",
      description: "Matematik modellashtirish va tahlil usullari",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 2,
      name: "Axborot tizimlari va texnologiyalari",
      code: "60610100",
      description: "Axborot tizimlari yaratish va boshqarish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 3,
      name: "Boshlang'ich ta'lim",
      code: "60110400",
      description: "Boshlang'ich sinf o'quvchilarini ta'lim berish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 4,
      name: "Buxgalteriya hisobi",
      code: "60410200",
      description: "Moliyaviy hisob va audit tizimlarini boshqarish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 5,
      name: "Dasturiy injiniring",
      code: "60610400",
      description: "Zamonaviy dasturiy ta'minot yaratish va loyihalash",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 6,
      name: "Energetika muhandisligi",
      code: "60710400",
      description: "Energiya tizimlari va elektr ta'minoti",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 7,
      name: "Iqtisodiyot",
      code: "60410100",
      description: "Makro va mikroiqtisodiyot, moliya tahlili",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 8,
      name: "Jismoniy madaniyat",
      code: "60111200",
      description: "Sport va jismoniy tarbiya sohasida faoliyat",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 9,
      name: "Kompyuter injiniringi",
      code: "60610300",
      description: "Kompyuter tizimlari va tarmoqlar",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 10,
      name: "Maktabgacha ta'lim",
      code: "60110200",
      description: "Maktabgacha yoshdagi bolalar bilan ishlash",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 11,
      name: "Maxsus pedagogika",
      code: "60110300",
      description: "Maxsus ehtiyojli bolalar bilan ishlash",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 12,
      name: "Moliya va moliyaviy texnologiyalar",
      code: "60410500",
      description: "Bank va moliya institurlarida ishlash",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 13,
      name: "Musiqa ta'limi",
      code: "60111300",
      description: "Musiqa san'ati va pedagogikasi",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 14,
      name: "Psixologiya",
      code: "60310300",
      description: "Inson psixikasi va xulq-atvorini o'rganish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 15,
      name: "Qurilish muhandisligi",
      code: "60730300",
      description: "Qurilish loyihalash va boshqarish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 16,
      name: "Tarix",
      code: "60220300",
      description: "Tarix fanlari va tadqiqot ishlar",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 17,
      name: "Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish",
      code: "60710900",
      description: "Sanoat avtomatizatsiyasi va robotexnika",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "15 000 000"
      }
    },
    {
      id: 18,
      name: "Transport vositalari muhandisligi",
      code: "60711400",
      description: "Avtomobil va transport texnikasi",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 19,
      name: "Logistika",
      code: "61010400",
      description: "Yuk tashish va ta'minot zanjiri boshqaruvi",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 20,
      name: "Xorijiy til va adabiyoti (Ingliz tili)",
      code: "60110900",
      description: "Ingliz tili va adabiyot o'qitish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },
    {
      id: 21,
      name: "Ona til va adabiyoti (RUS tili)",
      code: "60110800",
      description: "Rus tili va adabiyot o'qitish",
      duration: "4 yil",
      type: "Bakalavriat",
      prices: {
        kunduzgi: "16 000 000"
      }
    },

    // MAGISTRATURA MUTAXASSISLIKLARI
    {
      id: 22,
      name: "Iqtisodiyot",
      code: "70410102",
      description: "Ilg'or iqtisodiy nazariya va amaliyot",
      duration: "2 yil",
      type: "Magistratura",
      prices: {
        kunduzgi: "18 000 000",
      }
    },
    {
      id: 23,
      name: "Testologiya va bilimlarni baholash",
      code: "70110103",
      description: "Ta'lim sifatini baholash va test yaratish",
      duration: "2 yil",
      type: "Magistratura",
      prices: {
        kunduzgi: "18 000 000",
      }
    },
    {
      id: 24,
      name: "Ta'limda axborot texnologiyalari",
      code: "70610105",
      description: "Ta'lim jarayonida IT texnologiyalar qo'llash",
      duration: "2 yil",
      type: "Magistratura",
      prices: {
        kunduzgi: "18 000 000",
      }
    },
    {
      id: 25,
      name: "Pedagogika nazariyasi va tarixi",
      code: "70110101",
      description: "Ta'lim nazariyasi va metodikasi",
      duration: "2 yil",
      type: "Magistratura",
      prices: {
        kunduzgi: "18 000 000",
      }
    }
  ]

  // Filter directions based on selected type
  const filteredDirections = directions.filter(direction => direction.type === selectedType)

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section with Navigation */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-white py-6 sm:py-8 mt-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-[#012c6e] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3">
              Ta'lim Yo'nalishlari
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#012c6e] mb-2 sm:mb-3 px-2">
              Yo'nalishlar va Fakultetlar
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto px-4">
              Universitetimizdagi barcha fakultetlar va yo'nalishlar ro'yxati
            </p>
            <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto mt-2 sm:mt-3"></div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-4 sm:mb-6 px-3">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-3 flex gap-2 sm:gap-3 max-w-sm sm:max-w-lg w-full">
              <button
                onClick={() => setSelectedType('Bakalavriat')}
                className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  selectedType === 'Bakalavriat'
                    ? 'bg-[#012c6e] text-white shadow-lg transform scale-105'
                    : 'text-[#012c6e] hover:bg-blue-50'
                }`}
              >
                Bakalavriat
              </button>
              <button
                onClick={() => setSelectedType('Magistratura')}
                className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  selectedType === 'Magistratura'
                    ? 'bg-[#012c6e] text-white shadow-lg transform scale-105'
                    : 'text-[#012c6e] hover:bg-blue-50'
                }`}
              >
                Magistratura
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-gray-50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Current Selection Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#012c6e] mb-2 sm:mb-3 px-2">
              {selectedType} Yo'nalishlari
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              {selectedType === 'Bakalavriat' ? '4 yillik' : '2 yillik'} ta'lim dasturlari
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-2 sm:mt-3 rounded-full"></div>
          </div>

          {/* Directions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredDirections.map((direction, index) => (
              <div 
                key={direction.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-4 sm:p-6 h-full flex flex-col">
                  {/* Type Badge */}
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      direction.type === 'Bakalavriat' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-purple-500 text-white'
                    }`}>
                      {direction.type}
                    </span>
                  </div>

                  {/* Title and Code */}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#012c6e] mb-2 leading-tight">
                      {direction.name}
                    </h3>
                    <div className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-lg">
                      <span className="text-xs text-gray-600 font-mono">
                        {direction.code}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                    {direction.description}
                  </p>

                  {/* Duration and Price */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs sm:text-sm text-gray-600">{direction.duration}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm sm:text-lg font-bold text-[#012c6e]">{direction.prices.kunduzgi}</p>
                        <p className="text-xs text-gray-500">so'm/yil</p>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Link 
                      to="/hujjat-topshirish"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-[#012c6e] font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 hover:shadow-lg text-center text-sm sm:text-base block"
                    >
                      Hujjat Topshirish
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 sm:mt-16">
            <div className="overflow-hidden">
              <div className="p-6 sm:p-8 md:p-12 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#012c6e] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
                  Qo'shimcha ma'lumot kerakmi?
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                  Yo'nalishlar haqida batafsil ma'lumot olish, talabalar bilan suhbatlashish va ariza topshirish uchun biz bilan bog'laning.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto px-4">
                  <Link 
                    to="/hujjat-topshirish"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-[#012c6e] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg text-center text-sm sm:text-base"
                  >
                    Hujjat Topshirish
                  </Link>
                 
                 <button 
                   onClick={() => setShowContactModal(true)}
                   className="flex-1 border-2 border-gray-300 text-gray-800 hover:bg-[#012c6e] hover:text-white hover:border-[#012c6e] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 text-center text-sm sm:text-base"
                 >
                   Biz bilan bog'lanish
                 </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={() => setShowContactModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full animate-pulse-scale">
            {/* Close Button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-[#012c6e] via-blue-700 to-[#012c6e] text-white p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Biz bilan bog'lanish</h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">Qabul bo'yicha ma'lumot</p>
            </div>

            {/* Contact Cards */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.id}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-[#012c6e] rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#012c6e] text-sm">
                          {contact.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 ml-11">
                        {contact.description}
                      </p>
                      <div className="flex items-center ml-11">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-semibold text-gray-800 text-sm">
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <a
                        href={`tel:${contact.phone}`}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center text-sm"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Qo'ng'iroq
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-800 text-sm mb-1">Ish vaqti</h5>
                    <p className="text-xs text-yellow-700">Dush-Juma: 09:00-18:00</p>
                    <p className="text-xs text-yellow-700">Shanba: 09:00-13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Yonalishlar
                      