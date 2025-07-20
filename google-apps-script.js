// Google Apps Script kodi - Bu kodni script.google.com da yaratib, web app sifatida deploy qiling

// REAL Google Sheets ID - sizning sheet id
const SHEET_ID = '1lskJppuJI5mZEylFdWYHohGJsk3614XgZ1BhByOppLQ';
const SHEET_NAME = 'HujjatTopshirish'; // Sheet nomi

function doPost(e) {
  try {
    console.log('doPost ishga tushdi');
    console.log('Event object:', e);
    
    let data;
    
    // Turli xil ma'lumot formatlarini handle qilish
    if (e && e.postData) {
      if (e.postData.contents) {
        // JSON format
        try {
          data = JSON.parse(e.postData.contents);
        } catch (jsonError) {
          console.log('JSON parse xatoligi, parameter sifatida tekshirilmoqda');
          // Form data format
          data = JSON.parse(e.parameter.data || '{}');
        }
      } else if (e.parameter && e.parameter.data) {
        // URL parameter format
        data = JSON.parse(e.parameter.data);
      }
    } else if (e && e.parameter) {
      // Faqat parameter mavjud
      data = JSON.parse(e.parameter.data || '{}');
    }
    
    if (!data) {
      throw new Error('Ma\'lumot topilmadi');
    }
    
    console.log('Qabul qilingan ma\'lumot:', data);
    
    // Google Sheets ga ma'lumot yozish
    const result = writeToSheet(data);
    
    const response = result.success ? {
      'status': 'success',
      'message': 'Ma\'lumotlar muvaffaqiyatli saqlandi'
    } : {
      'status': 'error',
      'message': result.error || 'Ma\'lumotlarni saqlashda xatolik yuz berdi'
    };
    
    console.log('Javob yuborilmoqda:', response);
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('doPost xatoligi:', error);
    const errorResponse = {
      'status': 'error',
      'message': 'Ma\'lumotlarni saqlashda xatolik yuz berdi: ' + error.toString()
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function writeToSheet(formData) {
  try {
    // Google Sheets ni ochish
    let sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Agar sheet mavjud bo'lmasa, yangi yaratish
    if (!sheet) {
      const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Header qatorini qo'shish
      const headers = [
        'Sana', 'Familya', 'Ism', 'Otasining ismi', 'Telefon', 
        'Qo\'shimcha telefon', 'Viloyat', 'Tuman', 'Manzil', 'Yo\'nalish'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Header styling
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#4285f4')
        .setFontColor('white');
    }
    
    // Yangi qatorni qo'shish
    const currentDate = new Date();
    const uzbekistanTime = new Date(currentDate.getTime() + (5 * 60 * 60 * 1000)); // UTC+5
    
    const rowData = [
      Utilities.formatDate(uzbekistanTime, 'GMT+5', 'dd/MM/yyyy HH:mm:ss'),
      formData.familya || '',
      formData.ism || '',
      formData.otaIsmi || '',
      formData.telefon || '',
      formData.qoshimchaTelefon || '',
      formData.viloyat || '',
      formData.tuman || '',
      formData.manzil || '',
      formData.yonalish || ''
    ];
    
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Yangi qo'shilgan qatorni formatting qilish
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, rowData.length);
    
    // Har ikkinchi qator uchun background color
    if (lastRow % 2 === 0) {
      range.setBackground('#f8f9fa');
    }
    
    // Telefon raqamlar uchun maxsus formatting
    sheet.getRange(lastRow, 5, 1, 2).setNumberFormat('@'); // Telefon ustunlari
    
    console.log('Ma\'lumot muvaffaqiyatli qo\'shildi:', rowData);
    
    return { success: true };
    
  } catch (error) {
    console.error('Sheet ga yozishda xatolik:', error);
    return { success: false, error: error.toString() };
  }
}

// Test funksiyasi - bu funksiyani ishga tushirib test qilishingiz mumkin
function testWriteToSheet() {
  console.log('🧪 Test boshlandi...');
  
  const testData = {
    familya: 'Test Familya',
    ism: 'Test Ism',
    otaIsmi: 'Test Otasining ismi',
    telefon: '+998901234567',
    qoshimchaTelefon: '+998701234567',
    viloyat: 'Toshkent shahri',
    tuman: 'Yunusobod',
    manzil: 'Test manzil, 123-uy',
    yonalish: 'Dasturiy injiniring'
  };
  
  console.log('📝 Test ma\'lumotlari:', testData);
  
  const result = writeToSheet(testData);
  console.log('📊 Test natijasi:', result);
  
  if (result.success) {
    console.log('✅ Test muvaffaqiyatli! Google Sheets ga ma\'lumot qo\'shildi.');
    return '✅ Test muvaffaqiyatli!';
  } else {
    console.log('❌ Test muvaffaqiyatsiz:', result.error);
    return '❌ Test muvaffaqiyatsiz: ' + result.error;
  }
}

// Oddiy test funksiyasi
function simpleTest() {
  console.log('📱 Oddiy test ishga tushdi');
  console.log('📅 Vaqt:', new Date().toISOString());
  console.log('🆔 Sheet ID:', SHEET_ID);
  console.log('📝 Sheet nomi:', SHEET_NAME);
  
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    console.log('✅ Google Sheets topildi:', spreadsheet.getName());
    return '✅ Google Sheets ulanishi muvaffaqiyatli!';
  } catch (error) {
    console.log('❌ Google Sheets xatoligi:', error);
    return '❌ Google Sheets xatoligi: ' + error.toString();
  }
}

// GET request ni handle qilish (CORS muammosini hal qilish uchun)
function doGet(e) {
  console.log('GET request qabul qilindi');
  
  // Test response
  const response = {
    'status': 'success',
    'message': 'Google Apps Script ishlayapti',
    'timestamp': new Date().toISOString()
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// Google Sheets ni sozlash va tekshirish uchun helper funksiya
function setupGoogleSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    console.log('✅ Google Sheets topildi:', spreadsheet.getName());
    
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      console.log('✅ Yangi sheet yaratildi:', SHEET_NAME);
      
      // Header qo'shish
      const headers = [
        'Sana', 'Familya', 'Ism', 'Otasining ismi', 'Telefon', 
        'Qo\'shimcha telefon', 'Viloyat', 'Tuman', 'Manzil', 'Yo\'nalish'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Header styling
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#4285f4')
        .setFontColor('white');
        
      console.log('✅ Header qatori qo\'shildi');
    } else {
      console.log('✅ Sheet mavjud:', SHEET_NAME);
    }
    
    return { success: true, message: 'Setup muvaffaqiyatli' };
    
  } catch (error) {
    console.error('❌ Setup xatoligi:', error);
    return { success: false, error: error.toString() };
  }
} 