import React, { useState } from 'react'

const Litsensiya = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const licenses = [
    {
      id: 1,
      image: "https://buxiu.uz/landing/images/lic/lic1.png",
    },
    {
      id: 2,
      image: "https://buxiu.uz/landing/images/lic/lic2.png",
    },
    {
      id: 3,
      image: "https://buxiu.uz/landing/images/lic/lic3.png",
    }
  ]

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
              📜 Rasmiy Litsenziyalar
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Bizning Litsenziyalarimiz
            </span>
          </h2>
        </div>

        {/* Licenses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {licenses.map((license) => (
            <div 
              key={license.id}
              className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openModal(license.image)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={license.image}
                  alt="Litsensiya"
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Eye Icon Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Litsensiya"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Litsensiya 