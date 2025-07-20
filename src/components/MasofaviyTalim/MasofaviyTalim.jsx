import React from 'react'

function MasofaviyTalim() {
  const advantages = [
    {
      title: "Vaqt va makondan mustaqillik",
      description: "Talabalar istalgan vaqt va joyda ta'lim olish imkoniyatiga ega. Bu ish bilan birga o'qish, oila bilan vaqt o'tkazish va ta'limni muvofiqlashtirish imkonini beradi. 24/7 dars materiallariga kirish huquqi mavjud."
    },
    {
      title: "Moliyaviy samaradorlik va tejamkorlik", 
      description: "Transport xarajatlari, yashash joyi ijara haqi, oziq-ovqat va boshqa kundalik xarajatlarning sezilarli darajada kamayishi. O'rtacha 40-60% gacha xarajatlarni tejash mumkin. Elektron darsliklar qog'oz kitoblardan ancha arzon."
    },
    {
      title: "Individual ta'lim tezligi va uslubu",
      description: "Har bir talaba o'zining bilim darajasi, qobiliyati va bo'sh vaqtiga mos ravishda o'rganish tezligini belgilash imkoniyati. Qiyin mavzularni takrorlash, oson mavzularni tezda o'tish mumkin."
    },
    {
      title: "Global ta'lim imkoniyatlari",
      description: "Dunyoning istalgan nuqtasidagi nufuzli universitetlar, kollej va ta'lim markazlarida o'qish imkoniyati. Xalqaro sertifikatlar va diplomlar olish, chet ellik ustozlardan dars olish imkoniyati."
    },
    {
      title: "Zamonaviy texnologik ko'nikmalar",
      description: "Raqamli savodxonlik, onlayn hamkorlik, virtual atrof-muhit bilan ishlash, bulutli texnologiyalar va zamonaviy dasturlar bilan ishlash ko'nikmalarini rivojlantirish."
    },
    {
      title: "Mustaqil o'rganish va o'z-o'zini boshqarish",
      description: "Vaqtni rejalashtirish, maqsad qo'yish, o'z natijalarini tahlil qilish va nazorat qilish qobiliyatlarini rivojlantirish. Bu kelajakdagi kasbiy faoliyat uchun juda muhim ko'nikmalar."
    },
    {
      title: "Maxsus ehtiyojli talabalar uchun qulaylik",
      description: "Jismoniy cheklovlarga ega bo'lgan talabalar uchun maxsus dasturlar, audiomatnlar, subtitrlar va boshqa yordamchi texnologiyalar orqali ta'lim olish imkoniyati."
    },
    {
      title: "Ekologik foyda va barqarorlik",
      description: "Qog'oz ishlatishning kamayishi, transport vositalaridan foydalanishning qisqarishi va energiya tejash orqali atrof-muhitga ijobiy ta'sir ko'rsatish."
    }
  ];

  const technologies = [
    {
      emoji: "💻",
      title: "Video Konferensiya Tizimlari",
      description: "Zoom, Microsoft Teams, Google Meet, WebEx, BigBlueButton kabi platformalar orqali real vaqtda darslar o'tkazish",
      features: ["HD video sifati", "Ekranni ulashish", "Whiteboard funksiyasi", "Breakout rooms"]
    },
    {
      emoji: "📚", 
      title: "Ta'lim Boshqaruv Tizimlari (LMS)",
      description: "Moodle, Canvas, Blackboard, Google Classroom kabi platformalar orqali kurslarni boshqarish",
      features: ["Dars materallarini saqlash", "Topshiriqlarni tekshirish", "Baholarni kuzatish", "Forum va chat"]
    },
    {
      emoji: "🎮",
      title: "Interaktiv va Virtual Texnologiyalar", 
      description: "Virtual laboratoriyalar, simulyatorlar, AR/VR texnologiyalar va gamifikatsiya elementlari",
      features: ["3D modellar", "Virtual laboratoriyalar", "Interaktiv testlar", "O'yinli o'rganish"]
    },
    {
      emoji: "📱",
      title: "Mobil Ta'lim Texnologiyalari",
      description: "Smartfon va planshetlar uchun maxsus ilovalar orqali har qanday joyda ta'lim olish",
      features: ["Offline rejim", "Push bildirishnomalar", "Adaptiv interfeys", "Sinxronizatsiya"]
    },
    {
      emoji: "🤖",
      title: "Sun'iy Intellekt va Chatbotlar",
      description: "AI yordamchilari, avtomatik baholash tizimlari va shaxsiylashtirilgan ta'lim maslahatlari",
      features: ["24/7 yordam", "Avtomatik baholash", "Shaxsiy tavsiyalar", "Chatbot yordamchisi"]
    },
    {
      emoji: "☁️", 
      title: "Bulutli Xizmatlar va Saqlash",
      description: "Google Drive, OneDrive, Dropbox orqali materiallarni saqlash va ulashish",
      features: ["Cheksiz saqlash", "Jamoaviy ishlash", "Avtomat zaxiralash", "Kirish nazorati"]
    }
  ];

  const statistics = [
    { value: "92%", label: "Talabalar mamnunligi darajasi", description: "Masofaviy ta'limdan mamnun bo'lgan talabalar" },
    { value: "65%", label: "Xarajatlarni tejash", description: "An'anaviy ta'limga nisbatan moliyaviy tejash" },
    { value: "24/7", label: "Doimiy kirish imkoniyati", description: "Har qanday vaqtda materiallarga kirish" },
    { value: "150+", label: "Mavjud yo'nalishlar", description: "Turli sohalardagi ta'lim dasturlari" },
    { value: "85%", label: "Muvaffaqiyat darajasi", description: "Kursni muvaffaqiyatli tugatgan talabalar" },
    { value: "40%", label: "Vaqt tejash", description: "Transport va kutish vaqtini tejash" }
  ];

  const learningTypes = [
    {
      title: "Sinxron Ta'lim",
      description: "Real vaqtda o'qituvchi va talabalar o'rtasida jonli muloqot",
      examples: ["Video konferensiya darslar", "Jonli webinarlar", "Real vaqtdagi muhokamalar", "Virtual sinf mashg'ulotlari"],
      icon: "🔴"
    },
    {
      title: "Asinxron Ta'lim", 
      description: "Talabalar o'z vaqtlarida materiallarni o'rganadilar",
      examples: ["Video darsliklar", "Audio podcastlar", "Elektron kitoblar", "Interaktiv modullar"],
      icon: "⏰"
    },
    {
      title: "Gibrid (Aralash) Ta'lim",
      description: "An'anaviy va masofaviy ta'limning kombinatsiyasi",
      examples: ["Haftada bir kun kampusda", "Onlayn nazariya, amaliy laboratoriya", "Flipped classroom", "Blended learning"],
      icon: "🔄"
    }
  ];

  const challenges = [
    {
      title: "Texnik muammolar",
      description: "Internet aloqasi zaif bo'lgan hududlarda muammolar",
      solution: "Offline kontentlar, mobil internetdan foydalanish, texnik yordam"
    },
    {
      title: "O'z-o'zini nazorat qilish qiyinligi",
      description: "Ba'zi talabalar uchun mustaqil o'rganish qiyin",
      solution: "Vaqt rejalashtirish dasturlari, mentor yordami, progress tracking"
    },
    {
      title: "Ijtimoiy aloqa kamayishi",
      description: "Kursdoshlar bilan muloqotning cheklanganligi", 
      solution: "Virtual uchrashuvlar, guruh loyihalari, forum muhokamalar"
    },
    {
      title: "Amaliy ko'nikmalar",
      description: "Laboratoriya va amaliy mashg'ulotlarni o'tkazish qiyinligi",
      solution: "Virtual laboratoriyalar, AR/VR texnologiyalar, gibrid yondashuv"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 px-2">
            Masofaviy Ta'lim: Kelajak Bugun
          </h1>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4">
            XXI asrning eng innovatsion va samarali ta'lim shakli - zamonaviy texnologiyalar 
            orqali sifatli bilim olishning eng maqbul yo'li
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Masofaviy ta'lim nafaqat ta'lim olish usuli, balki hayot tarzini o'zgartiradigan 
            va kelajakka tayyorlaydigan kuchli vositadir
          </p>
        </div>

        {/* What is Distance Learning - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'lim - Batafsil Tushuncha
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border-l-4 border-blue-500 pl-4 sm:pl-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2 sm:mb-3">Ta'rif</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-600">Masofaviy ta'lim</span> - bu o'qituvchi va talaba 
                  bir joyda bo'lmasdan, zamonaviy axborot-kommunikatsiya texnologiyalari (AKT) yordamida 
                  amalga oshiriladigan ta'lim shakli bo'lib, bu jarayonda barcha ta'lim faoliyati 
                  internet orqali tashkil etiladi.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-green-500 pl-4 sm:pl-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-2 sm:mb-3">Asosiy Tamoyillar</h3>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 sm:mr-3 text-lg sm:text-xl mt-1">•</span>
                    <span><strong>Ochiqlik:</strong> Har qanday yoshdagi va darajadagi talabalar uchun</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 sm:mr-3 text-lg sm:text-xl mt-1">•</span>
                    <span><strong>Moslashuvchanlik:</strong> Individual ehtiyojlarga moslashish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 sm:mr-3 text-lg sm:text-xl mt-1">•</span>
                    <span><strong>Modullik:</strong> Kurslarni kichik qismlarga bo'lish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 sm:mr-3 text-lg sm:text-xl mt-1">•</span>
                    <span><strong>Sifat:</strong> Yuqori darajadagi ta'lim materiallari</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-500 pl-4 sm:pl-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-2 sm:mb-3">Ahamiyati</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Masofaviy ta'lim zamonaviy jamiyatda nafaqat ta'lim sektorini o'zgartirmoqda, 
                  balki iqtisodiy rivojlanish, ijtimoiy tenglik va raqamli transformatsiya 
                  jarayonlarida muhim rol o'ynamoqda. Bu 21-asr talablariga javob beradigan 
                  ta'lim tizimining asosiy qismidir.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Masofaviy Ta'limning Asosiy Komponentlari</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Internet Platformalar</h4>
                    <p className="text-gray-600 text-sm">LMS, video konferensiya, cloud storage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">📖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Raqamli Kontentlar</h4>
                    <p className="text-gray-600 text-sm">Video darslar, interaktiv testlar, e-kitoblar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">👨‍🏫</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Virtual O'qituvchilar</h4>
                    <p className="text-gray-600 text-sm">Onlayn yo'l-yo'riq, maslahat, baholash</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Baholash Tizimlari</h4>
                    <p className="text-gray-600 text-sm">Onlayn testlar, loyihalar, portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Types - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'lim Turlari
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {learningTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl">{type.icon}</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-2 sm:mt-4">{type.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">{type.description}</p>
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-gray-800 text-sm">Misollar:</h4>
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm sm:text-base">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Advantages Section - Mobile Optimized */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'limning Muhim Afzalliklari
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg sm:text-xl lg:text-2xl">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Courses Section - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Talabalar Uchun Yaratilgan Imkoniyatlar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-4">
            Universitet barcha talabalar uchun zamonaviy va sifatli ta'lim imkoniyatlarini taqdim etadi
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {/* Programming Course */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl text-white">💻</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-2 sm:mb-3">Dasturlashni O'rganish</h3>
                <p className="text-blue-600 font-medium text-sm sm:text-base">Infinity School Platformasi</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Python, JavaScript, Java dasturlash tillari</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Web va Mobile ilovalar yaratish</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Amaliy loyihalar va portfolio yaratish</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Tajribali dasturchilardan mentorlik</span>
                </div>
              </div>
              
              <div className="text-center">
                <span className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base">
                  Bepul Kirish
                </span>
              </div>
            </div>

            {/* English Language Course */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl text-white">🌍</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 mb-2 sm:mb-3">Ingliz Tili Kurslari</h3>
                <p className="text-green-600 font-medium text-sm sm:text-base">English Master Platformasi</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Boshlang'ich dan Ilg'or darajagacha</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">IELTS va TOEFL tayyorgarlik</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Gaplashish va Tinglash ko'nikmalarini rivojlantirish</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Native speaker o'qituvchilar bilan</span>
                </div>
              </div>
              
              <div className="text-center">
                <span className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base">
                  Har Hafta Jonli Darslar
                </span>
              </div>
            </div>

            {/* Computer Literacy Course */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-700 mb-2 sm:mb-3">Kompyuter Savodxonlik</h3>
                <p className="text-purple-600 font-medium text-sm sm:text-base">Zamonaviy Texnologiyalar</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Microsoft Office to'liq paket</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Internet va onlayn xavfsizlik</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Raqamli marketing asoslari</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">Cloud texnologiyalar bilan ishlash</span>
                </div>
              </div>
              
              <div className="text-center">
                <span className="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base">
                  Amaliy Mashg'ulotlar
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Barcha Kurslar Uchun Mukammal Erkinlik!</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90 px-2">
              Talabalar o'z vaqtlarida, o'z tezligida va o'z imkoniyatlariga mos ravishda ta'lim olishlari mumkin
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">🕐</span>
                <p className="font-medium text-xs sm:text-sm lg:text-base">24/7 Dostuplik</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">📱</span>
                <p className="font-medium text-xs sm:text-sm lg:text-base">Mobil Qurilmalarda</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">🎓</span>
                <p className="font-medium text-xs sm:text-sm lg:text-base">Sertifikat Olish</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Laboratories and Startups Section - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            AI Laboratoriyalar va Zamonaviy Startaplar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-4">
            Sun'iy intellekt va innovatsion texnologiyalar bilan tanishish va amaliy tajriba olish
          </p>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {/* AI Laboratories */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl text-white">🤖</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2 sm:mb-3">AI Laboratoriyalar</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-600 mb-1 sm:mb-2 text-sm sm:text-base">🧠 Machine Learning Lab</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Ma'lumotlarni tahlil qilish va bashorat qilish modellari yaratish</p>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-600 mb-1 sm:mb-2 text-sm sm:text-base">💬 Natural Language Processing</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Matn tahlili, tarjima va chatbot yaratish texnologiyalari</p>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-600 mb-1 sm:mb-2 text-sm sm:text-base">👁️ Computer Vision Lab</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Rasm va video tahlili, yuz tanish texnologiyalari</p>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-600 mb-1 sm:mb-2 text-sm sm:text-base">🔊 Speech Recognition</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Ovozni tanish va sintez qilish texnologiyalari</p>
                </div>
              </div>
            </div>

            {/* AI Startups */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl text-white">🚀</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-700 mb-2 sm:mb-3">AI Startaplar</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-100">
                  <h4 className="font-bold text-orange-600 mb-1 sm:mb-2 text-sm sm:text-base">🏥 MedAI - Tibbiy Diagnostika</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">AI yordamida kasalliklarni erta aniqlash va davolash yo'llari</p>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-100">
                  <h4 className="font-bold text-orange-600 mb-1 sm:mb-2 text-sm sm:text-base">🌾 AgriSmart - Qishloq Xo'jaligi</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Smart fermerlik va hosildorlikni oshirish texnologiyalari</p>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-100">
                  <h4 className="font-bold text-orange-600 mb-1 sm:mb-2 text-sm sm:text-base">🎓 EduBot - Ta'lim Yordamchisi</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Shaxsiylashtirilgan ta'lim va o'qituvchi AI yordamchilari</p>
                </div>
                
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-100">
                  <h4 className="font-bold text-orange-600 mb-1 sm:mb-2 text-sm sm:text-base">🏢 BusinessAI - Biznes Tahlili</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Biznes jarayonlarini optimallashtirish va bozor tahlili</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI Bilan Kelajakni Yarating!</h3>
                <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
                  Sun'iy intellekt texnologiyalari bilan tanishib, o'z startapingizni yarating va dunyoni o'zgartiring
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <span className="bg-white bg-opacity-20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                    Bepul Kirish
                  </span>
                  <span className="bg-white bg-opacity-20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                    Amaliy Loyihalar
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">⚡</span>
                  <p className="font-medium text-xs sm:text-sm">Tez O'rganish</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">🎯</span>
                  <p className="font-medium text-xs sm:text-sm">Praktik Yo'nalish</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">🤝</span>
                  <p className="font-medium text-xs sm:text-sm">Jamoa Ishi</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">💡</span>
                  <p className="font-medium text-xs sm:text-sm">Innovatsiya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Section - Mobile Optimized */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'lim Bo'yicha Statistik Ma'lumotlar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 lg:mb-4">{stat.value}</div>
                <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">{stat.label}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Technology Tools - Mobile Optimized */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'limda Qo'llaniladigan Zamonaviy Texnologiyalar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl">{tech.emoji}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-3 sm:mt-4 mb-2 sm:mb-3">{tech.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{tech.description}</p>
                <div className="space-y-1 sm:space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Asosiy Imkoniyatlar:</h4>
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges and Solutions - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'limdagi Qiyinchiliklar va Ularning Yechimlari
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-3 sm:mb-4">{challenge.title}</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">{challenge.description}</p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <h4 className="font-semibold text-green-600 mb-1 sm:mb-2 text-sm sm:text-base">Yechim:</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future of Distance Learning - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center px-2">
            Masofaviy Ta'limning Kelajagi
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-2 sm:mb-3">Sun'iy Intellekt (AI)</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Shaxsiylashtirilgan ta'lim yo'llari, avtomatik baholash, virtual o'qituvchilar 
                  va talabalarning o'rganish uslubini tahlil qilish orqali ta'lim samaradorligini oshirish.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-600 mb-2 sm:mb-3">Virtual va Augmented Reality</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Virtual laboratoriyalar, tarixiy voqealarni jonli ko'rish, 3D anatomiya darslari 
                  va immersiv ta'lim tajribasi orqali bilimlarni chuqurroq o'zlashtirish.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-600 mb-2 sm:mb-3">Blockchain Texnologiyasi</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Sertifikatlar va diplomlarning qalbakilashtirilmasligini ta'minlash, 
                  ta'lim natijalarini xavfsiz saqlash va global tan olinish.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center">2030-yilgacha Prognozlar</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm sm:text-base">AI-ga asoslangan ta'lim</span>
                  <span className="font-bold text-blue-600 text-sm sm:text-base">80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm sm:text-base">VR/AR ni qo'llash</span>
                  <span className="font-bold text-green-600 text-sm sm:text-base">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm sm:text-base">Mikro-o'rganish</span>
                  <span className="font-bold text-purple-600 text-sm sm:text-base">90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm sm:text-base">Mobil ta'lim</span>
                  <span className="font-bold text-orange-600 text-sm sm:text-base">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Mobile Enhanced */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            Masofaviy Ta'lim - Sizning Kelajagingiz!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Zamonaviy dunyoda masofaviy ta'lim nafaqat imkoniyat, balki zarurat hisoblanadi. 
            Bu texnologiya orqali siz o'z orzularingizga erishishingiz, kasbiy rivojlanishingiz 
            va global bozorda raqobatbardosh bo'lishingiz mumkin.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">🎯</span>
              <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Maqsadga Yo'naltirilgan</h3>
              <p className="text-gray-600 text-xs sm:text-sm">O'z maqsadlaringizga muvofiq ta'lim olish</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">🚀</span>
              <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Tez Rivojlanish</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Qisqa muddat ichida yangi ko'nikmalar egalash</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 sm:col-span-3 lg:col-span-1">
              <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">🌍</span>
              <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Global Imkoniyatlar</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Dunyo standartlaridagi ta'lim olish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasofaviyTalim