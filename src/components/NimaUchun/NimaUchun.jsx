import React, { useState } from 'react'

function NimaUchun() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const steps = [
    {
      id: 1,
      title: "Hujjat topshiring",
      description: "Universidad qabul komissiyasiga kerakli hujjatlarni taqdim eting",
      icon: "📄",
      details: "Diploma, pasport, tibbiy ma'lumotnoma va boshqa zarur hujjatlarni tayyorlang.",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Imtihondan o'ting",
      description: "Universidad kirish imtihonlarini muvaffaqiyatli topshiring",
      icon: "📝",
      details: "Matematika, fizika, ona tili va chet tili fanlaridan test topshiring.",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Fakultetni tanlang",
      description: "O'zingizga mos kasbiy yo'nalishni belgilang",
      icon: "🎓",
      details: "Texnika, iqtisod, tibbiyot, huquq, pedagogika va boshqa fakultetlar mavjud.",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Darslarni o'rganing",
      description: "Universidad fanlarini o'zlashtiring va bilim oling",
      icon: "📚",
      details: "Professor-o'qituvchilardan sifatli ta'lim olib, nazariy va amaliy bilimlar to'plang.",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Ballarni to'plang",
      description: "Har bir imtihon va nazorat ishi uchun yuqori baholar oling",
      icon: "🏅",
      details: "Yaxshi baholar sizning mehnatsevarligingizning isboti. Stipendiya olish imkoniyati!",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 6,
      title: "Amaliyot o'ting",
      description: "Real ishlab chiqarish korxonalarida tajriba to'plang",
      icon: "🔧",
      details: "O'z sohangizdagi eng yaxshi korxonalarda amaliy ko'nikmalar egallab oling.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 7,
      title: "Diploma oling",
      description: "Universidad ta'limini muvaffaqiyatli yakunlang",
      icon: "🏆",
      details: "Barcha fanlarni o'zlashtirgan holda rasmiy diploma va malaka guvohnomasini oling.",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 8,
      title: "Karyera boshlang",
      description: "Malakali mutaxassis sifatida ish hayotini boshlang",
      icon: "🚀",
      details: "Olgan bilim va tajribangiz bilan o'z sohangizdagi eng yaxshi ishlarga ega bo'ling!",
      color: "from-rose-500 to-pink-600"
    }
  ]

  const benefits = [
    {
      icon: "💰",
      title: "Yuqori maosh",
      description: "Universitetni bitirganlar bozorda juda qadrlanadi va yuqori maosh oladilar"
    },
    {
      icon: "🌍",
      title: "Xalqaro tan olinish",
      description: "Bizning universitetimiz diplomasi dunyo bo'ylab tan olinadi"
    },
    {
      icon: "📈",
      title: "Karyera o'sishi",
      description: "Universitet bitiruvchilari karyera zinapoyasida tez ko'tariladi"
    },
    {
      icon: "🎯",
      title: "Professional rivojlanish",
      description: "Doimiy o'sish va o'z-o'zini rivojlantirish imkoniyatlari"
    }
  ]

  const academicFeatures = [
    {
      icon: "📖",
      title: "Semestr Imtihonlari",
      description: "Har semestr oxirida bilimni baholash",
      reward: "85-100 Ball"
    },
    {
      icon: "📚",
      title: "Dars Qatnashish",
      description: "Har bir darsga faol qatnashish uchun",
      reward: "1-5 Ball"
    },
    {
      icon: "💡",
      title: "Loyiha Himoyasi",
      description: "Kurs va diplom loyihalarini himoya qilish",
      reward: "10-50 Ball"
    },
    {
      icon: "🏆",
      title: "Olimpiada va Tanlovlar",
      description: "Fanlar bo'yicha olimpiada va tanlovlarda ishtirok",
      reward: "20-100 Ball"
    }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4 sm:py-12 md:py-16 transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Universitetimizda
            </span>
            <br />
            Ta'lim Olish Yo'li
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Bizning universitetda sifatli ta'lim olib, malakali mutaxassis bo'ling va 
            kelajakda muvaffaqiyatli karyera quring!
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 lg:mb-12 px-2">
            8 Bosqichda Universitetni Tamomang
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line - Hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1 sm:hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`absolute -top-3 sm:-top-4 left-4 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg`}>
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 text-center pt-2">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center px-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 text-center px-1 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed px-1">
                    {step.details}
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="mt-3 sm:mt-4 bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                    <div className={`bg-gradient-to-r ${step.color} h-1.5 sm:h-2 rounded-full transition-all duration-500 group-hover:w-full`} 
                         style={{width: `${(step.id / 8) * 100}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 lg:mb-12 px-2">
            Universitetda O'qish Afzalliklari
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 text-center border border-gray-100 dark:border-gray-700 group hover:scale-105">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 px-1">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm px-1 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NimaUchun 