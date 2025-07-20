# Services Directory

Bu direktoriya loyiha uchun turli xil servicelarni o'z ichiga oladi.

## Google Sheets Service

`googleSheets.js` fayli form ma'lumotlarini Google Sheets ga yuborish uchun ishlatiladi.

### Asosiy funksiyalar:

- **`submitToGoogleSheets(formData)`** - Form ma'lumotlarini Google Sheets ga yuboradi
- **`submitWithRetry(formData, maxRetries)`** - Retry logic bilan ma'lumot yuboradi  
- **`isGoogleSheetsConfigured()`** - Google Sheets konfiguratsiyasini tekshiradi
- **`testGoogleSheetsConnection()`** - Test ma'lumotlarini yuboradi

### Konfiguratsiya:

1. `GOOGLE_APPS_SCRIPT_URL` o'zgaruvchisini o'zingizning Web App URL bilan almashtiring
2. Google Apps Script loyihasini o'rnating (`google-apps-script.js` faylini ishlatib)

### Foydalanish:

```javascript
import { submitWithRetry } from '../services/googleSheets'

const result = await submitWithRetry(formData)
if (result.success) {
  console.log('Muvaffaqiyatli saqlandi!')
} else {
  console.error('Xatolik:', result.message)
}
```

To'liq o'rnatish qo'llanmasi uchun `GOOGLE_SHEETS_SETUP.md` faylini ko'ring. 