import { useState } from 'react'
import { submitWithRetry, isGoogleSheetsConfigured } from '../../services/googleSheets'

export default function HujjatTopshirish() {
  const [formData, setFormData] = useState({
    familya: '',
    ism: '',
    otaIsmi: '',
    telefon: '',
    qoshimchaTelefon: '',
    viloyat: '',
    tuman: '',
    manzil: '',
    yonalish: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'loading', 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('')

  const viloyatlar = [
    'Andijon', 'Buxoro', 'Farg\'ona', 'Jizzax', 'Xorazm', 'Namangan',
    'Navoiy', 'Qashqadaryo', 'Qoraqalpog\'iston', 'Samarqand', 'Sirdaryo',
    'Surxondaryo', 'Toshkent viloyati', 'Toshkent shahri'
  ]

  const yonalishlar = [
    // BAKALAVRIAT YO'NALISHLARI (21 ta)
    'Amaliy matematika',
    'Axborot tizimlari va texnologiyalari', 
    'Boshlang\'ich ta\'lim',
    'Buxgalteriya hisobi',
    'Dasturiy injiniring',
    'Energetika muhandisligi',
    'Iqtisodiyot',
    'Jismoniy madaniyat',
    'Kompyuter injiniringi',
    'Maktabgacha ta\'lim',
    'Maxsus pedagogika',
    'Moliya va moliyaviy texnologiyalar',
    'Musiqa ta\'limi',
    'Psixologiya',
    'Qurilish muhandisligi',
    'Tarix',
    'Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish',
    'Transport vositalari muhandisligi',
    'Logistika',
    'Xorijiy til va adabiyoti (Ingliz tili)',
    'Ona til va adabiyoti (RUS tili)',
    
    // MAGISTRATURA YO'NALISHLARI (4 ta)
    'Iqtisodiyot (Magistratura)',
    'Testologiya va bilimlarni baholash (Magistratura)',
    'Ta\'limda axborot texnologiyalari (Magistratura)',
    'Pedagogika nazariyasi va tarixi (Magistratura)'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Xatolikni tozalash
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.familya.trim()) newErrors.familya = 'Familya majburiy'
    if (!formData.ism.trim()) newErrors.ism = 'Ism majburiy'
    if (!formData.otaIsmi.trim()) newErrors.otaIsmi = 'Otasining ismi majburiy'
    if (!formData.telefon.trim()) newErrors.telefon = 'Telefon raqam majburiy'
    if (!formData.viloyat) newErrors.viloyat = 'Viloyat tanlash majburiy'
    if (!formData.tuman.trim()) newErrors.tuman = 'Tuman majburiy'
    if (!formData.manzil.trim()) newErrors.manzil = 'Manzil majburiy'
    if (!formData.yonalish) newErrors.yonalish = 'Yo\'nalish tanlash majburiy'

    // Telefon raqam formatini tekshirish
    const phoneRegex = /^(\+998|998|8)[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/
    if (formData.telefon && !phoneRegex.test(formData.telefon)) {
      newErrors.telefon = 'Telefon raqam formati noto\'g\'ri'
    }

    if (formData.qoshimchaTelefon && !phoneRegex.test(formData.qoshimchaTelefon)) {
      newErrors.qoshimchaTelefon = 'Qo\'shimcha telefon raqam formati noto\'g\'ri'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Google Sheets konfiguratsiyasini tekshirish
    if (!isGoogleSheetsConfigured()) {
      setSubmitStatus('error')
      setSubmitMessage('Google Sheets konfiguratsiyasi to\'ldirilmagan. Administrator bilan bog\'laning.')
      return
    }

    setIsSubmitted(true)
    setSubmitStatus('loading')
    setSubmitMessage('Ma\'lumotlar Google Sheets ga yuborilmoqda...')
    
    try {
      console.log('Forma ma\'lumotlari Google Sheets ga yuborilmoqda:', formData)
      
      // Google Sheets ga ma'lumot yuborish (retry logic bilan)
      const result = await submitWithRetry(formData, 3)
      
      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Hujjatlar muvaffaqiyatli Google Sheets ga saqlandi!')
        console.log('Google Sheets ga muvaffaqiyatli yuborildi:', result)
        
        // Formani tozalash
        setTimeout(() => {
          resetForm()
          setSubmitStatus(null)
          setSubmitMessage('')
        }, 3000)
        
      } else {
        throw new Error(result.message || 'Ma\'lumotlarni saqlashda xatolik yuz berdi')
      }
      
    } catch (error) {
      console.error('Form submission xatoligi:', error)
      setSubmitStatus('error')
      setSubmitMessage(error.message || 'Ma\'lumotlarni saqlashda kutilmagan xatolik yuz berdi')
    } finally {
      setIsSubmitted(false)
    }
  }

  const resetForm = () => {
    setFormData({
      familya: '',
      ism: '',
      otaIsmi: '',
      telefon: '',
      qoshimchaTelefon: '',
      viloyat: '',
      tuman: '',
      manzil: '',
      yonalish: ''
    })
    setErrors({})
    setIsSubmitted(false)
    setSubmitStatus(null)
    setSubmitMessage('')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 mt-16">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hujjat Topshirish
          </h2>
          <p className="text-lg text-gray-600">
            Kursga yozilish uchun quyidagi formani to'ldiring
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shaxsiy ma'lumotlar */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Familya *
                </label>
                <input
                  type="text"
                  name="familya"
                  value={formData.familya}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.familya ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Familyangizni kiriting"
                />
                {errors.familya && (
                  <p className="text-red-500 text-sm mt-1">{errors.familya}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ism *
                </label>
                <input
                  type="text"
                  name="ism"
                  value={formData.ism}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.ism ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ismingizni kiriting"
                />
                {errors.ism && (
                  <p className="text-red-500 text-sm mt-1">{errors.ism}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Otasining ismi *
                </label>
                <input
                  type="text"
                  name="otaIsmi"
                  value={formData.otaIsmi}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.otaIsmi ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Otasining ismini kiriting"
                />
                {errors.otaIsmi && (
                  <p className="text-red-500 text-sm mt-1">{errors.otaIsmi}</p>
                )}
              </div>
            </div>

            {/* Telefon raqamlar */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon raqam *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.telefon ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+998 xx xxx xx xx"
                />
                {errors.telefon && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qo'shimcha telefon raqam
                </label>
                <input
                  type="tel"
                  name="qoshimchaTelefon"
                  value={formData.qoshimchaTelefon}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.qoshimchaTelefon ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+998 xx xxx xx xx"
                />
                {errors.qoshimchaTelefon && (
                  <p className="text-red-500 text-sm mt-1">{errors.qoshimchaTelefon}</p>
                )}
              </div>
            </div>

            {/* Manzil ma'lumotlari */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Viloyat *
                </label>
                <select
                  name="viloyat"
                  value={formData.viloyat}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.viloyat ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Viloyat tanlang</option>
                  {viloyatlar.map((viloyat) => (
                    <option key={viloyat} value={viloyat}>
                      {viloyat}
                    </option>
                  ))}
                </select>
                {errors.viloyat && (
                  <p className="text-red-500 text-sm mt-1">{errors.viloyat}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tuman *
                </label>
                <input
                  type="text"
                  name="tuman"
                  value={formData.tuman}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.tuman ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tumanni kiriting"
                />
                {errors.tuman && (
                  <p className="text-red-500 text-sm mt-1">{errors.tuman}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Manzil *
                </label>
                <input
                  type="text"
                  name="manzil"
                  value={formData.manzil}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.manzil ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="To'liq manzilni kiriting"
                />
                {errors.manzil && (
                  <p className="text-red-500 text-sm mt-1">{errors.manzil}</p>
                )}
              </div>
            </div>

            {/* Yo'nalish */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qaysi yo'nalishda o'qimoqchisiz? *
              </label>
              <select
                name="yonalish"
                value={formData.yonalish}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.yonalish ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Yo'nalish tanlang</option>
                {yonalishlar.map((yonalish) => (
                  <option key={yonalish} value={yonalish}>
                    {yonalish}
                  </option>
                ))}
              </select>
              {errors.yonalish && (
                <p className="text-red-500 text-sm mt-1">{errors.yonalish}</p>
              )}
            </div>

            {/* Status xabari */}
            {submitMessage && (
              <div className={`p-4 rounded-lg border-l-4 ${
                submitStatus === 'success' 
                  ? 'bg-green-50 border-green-400 text-green-700'
                  : submitStatus === 'error'
                  ? 'bg-red-50 border-red-400 text-red-700'
                  : 'bg-blue-50 border-blue-400 text-blue-700'
              }`}>
                <div className="flex items-center">
                  {submitStatus === 'loading' && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
                  )}
                  {submitStatus === 'success' && (
                    <div className="text-green-600 mr-3">✅</div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-600 mr-3">❌</div>
                  )}
                  <p className="font-medium">{submitMessage}</p>
                </div>
              </div>
            )}

            {/* Button lar */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitted || submitStatus === 'loading'}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {submitStatus === 'loading' && (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                )}
                {isSubmitted || submitStatus === 'loading' 
                  ? 'Google Sheets ga yuborilmoqda...' 
                  : 'Google Sheets ga Yuborish'
                }
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                disabled={submitStatus === 'loading'}
                className="flex-1 bg-gray-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Formani Tozalash
              </button>
            </div>
          </form>

          {/* Qo'shimcha ma'lumot */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                📋 Kerakli hujjatlar:
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Pasport nusxasi</li>
                <li>• 3x4 o'lchamdagi rasm</li>
                <li>• Ta'lim haqidagi hujjat nusxasi</li>
                <li>• Tibbiy ma'lumotnoma</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                📊 Google Sheets integratsiyasi:
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Barcha ma'lumotlar Google Sheets ga avtomatik saqlanadi</li>
                <li>• Real vaqtda ma'lumotlar backup qilinadi</li>
                <li>• Administrator tomonidan oson boshqariladi</li>
                <li>• Xavfsiz va ishonchli ma'lumot saqlash</li>
              </ul>
              {!isGoogleSheetsConfigured() && (
                <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    ⚠️ Diqqat: Google Sheets konfiguratsiyasi to'ldirilmagan. 
                    Ma'lumotlar saqlanmasligi mumkin.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 