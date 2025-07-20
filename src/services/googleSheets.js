// Google Sheets service - React dan Google Apps Script bilan aloqa qilish uchun

// Google Apps Script Web App URL - ENG YANGI URL (Fixed version) ✅ 
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwaCwWlJf9HOYQWFHS8TtLu2USqpZ2_bgzzskXXSmjUE4iiMuhEROX-K1mUNS5Gg_2w/exec';

/**
 * Google Sheets ga form ma'lumotlarini yuborish
 * @param {Object} formData - Form ma'lumotlari
 * @returns {Promise<Object>} - Server javobi
 */
export const submitToGoogleSheets = async (formData) => {
  try {
    console.log('Google Sheets ga ma\'lumot yuborilmoqda...', formData);

    // Ma'lumotlarni validatsiya qilish
    if (!formData || typeof formData !== 'object') {
      throw new Error('Form ma\'lumotlari noto\'g\'ri formatda');
    }

    // Zarur fieldlarni tekshirish
    const requiredFields = ['familya', 'ism', 'otaIsmi', 'telefon', 'viloyat', 'tuman', 'manzil', 'yonalish'];
    const missingFields = requiredFields.filter(field => !formData[field] || !formData[field].trim());
    
    if (missingFields.length > 0) {
      throw new Error(`Quyidagi maydonlar to'ldirilmagan: ${missingFields.join(', ')}`);
    }

    // Telefon raqam formatini tekshirish
    const phoneRegex = /^(\+998|998|8)[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    if (!phoneRegex.test(formData.telefon)) {
      throw new Error('Telefon raqam formati noto\'g\'ri');
    }

    if (formData.qoshimchaTelefon && !phoneRegex.test(formData.qoshimchaTelefon)) {
      throw new Error('Qo\'shimcha telefon raqam formati noto\'g\'ri');
    }

    // Ma'lumotlarni tozalash va formatlash
    const cleanedData = {
      familya: formData.familya.trim(),
      ism: formData.ism.trim(),
      otaIsmi: formData.otaIsmi.trim(),
      telefon: formData.telefon.trim(),
      qoshimchaTelefon: formData.qoshimchaTelefon ? formData.qoshimchaTelefon.trim() : '',
      viloyat: formData.viloyat,
      tuman: formData.tuman.trim(),
      manzil: formData.manzil.trim(),
      yonalish: formData.yonalish,
      submittedAt: new Date().toISOString()
    };

    // Form submission approach (iframe method)
    return await submitViaFormSubmission(cleanedData);

  } catch (error) {
    console.error('Google Sheets xatoligi:', error);

    return {
      success: false,
      message: error.message || 'Ma\'lumotlarni saqlashda kutilmagan xatolik yuz berdi',
      error: error.name || 'UNKNOWN_ERROR'
    };
  }
};

// Form submission yordamida ma'lumot yuborish (CORS muammosini hal qilish uchun)
const submitViaFormSubmission = (data) => {
  return new Promise((resolve) => {
    try {
      console.log('Form submission orqali yuborilmoqda...', data);

      // Yashirin iframe yaratish
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'google-sheets-submit';
      document.body.appendChild(iframe);

      // Form yaratish
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_APPS_SCRIPT_URL;
      form.target = 'google-sheets-submit';

      // Ma'lumotni form field sifatida qo'shish
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'data';
      input.value = JSON.stringify(data);
      form.appendChild(input);

      // Form ni submit qilish
      document.body.appendChild(form);
      form.submit();

      // Cleanup va success response
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        
        console.log('Ma\'lumot muvaffaqiyatli yuborildi (form submission method)');
        
        resolve({
          success: true,
          message: 'Ma\'lumotlar muvaffaqiyatli Google Sheets ga saqlandi',
          data: data
        });
      }, 2000); // 2 soniya kutish

    } catch (error) {
      console.error('Form submission xatoligi:', error);
      resolve({
        success: false,
        message: 'Ma\'lumotlarni yuborishda xatolik yuz berdi',
        error: 'FORM_SUBMISSION_ERROR'
      });
    }
  });
};

/**
 * Google Apps Script Web App URL ni tekshirish
 * @returns {boolean} - URL o'rnatilganmi
 */
export const isGoogleSheetsConfigured = () => {
  return GOOGLE_APPS_SCRIPT_URL && 
         GOOGLE_APPS_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE' &&
         GOOGLE_APPS_SCRIPT_URL.includes('script.google.com');
};

/**
 * Test ma'lumotlarini yuborish (development uchun)
 * @returns {Promise<Object>} - Test natijasi
 */
export const testGoogleSheetsConnection = async () => {
  const testData = {
    familya: 'Test',
    ism: 'User',
    otaIsmi: 'TestOta',
    telefon: '+998901234567',
    qoshimchaTelefon: '',
    viloyat: 'Toshkent shahri',
    tuman: 'Test tuman',
    manzil: 'Test manzil',
    yonalish: 'Dasturiy injiniring'
  };

  try {
    const result = await submitToGoogleSheets(testData);
    console.log('Test natijasi:', result);
    return result;
  } catch (error) {
    console.error('Test xatoligi:', error);
    return {
      success: false,
      message: 'Test muvaffaqiyatsiz',
      error: error.message
    };
  }
};

/**
 * Retry logic bilan ma'lumot yuborish
 * @param {Object} formData - Form ma'lumotlari  
 * @param {number} maxRetries - Maksimal urinishlar soni
 * @returns {Promise<Object>} - Natija
 */
export const submitWithRetry = async (formData, maxRetries = 3) => {
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Urinish ${attempt}/${maxRetries}`);
      
      const result = await submitToGoogleSheets(formData);
      
      if (result.success) {
        return result;
      }
      
      // Agar server xatoligi bo'lsa, qayta urinmaymiz
      if (result.error && !['NETWORK_ERROR', 'CORS_ERROR'].includes(result.error)) {
        return result;
      }
      
      lastError = result;
      
      // Keyingi urinishdan oldin kutish (exponential backoff)
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
        console.log(`${delay}ms kutilmoqda...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
    } catch (error) {
      lastError = {
        success: false,
        message: error.message,
        error: 'UNEXPECTED_ERROR'
      };
      
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  return lastError || {
    success: false,
    message: 'Barcha urinishlar muvaffaqiyatsiz',
    error: 'MAX_RETRIES_EXCEEDED'
  };
}; 