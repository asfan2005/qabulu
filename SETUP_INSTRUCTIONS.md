# 🚀 Tezkor Setup Qo'llanmasi

Sizning Google Sheets ID: `1lskJppuJI5mZEylFdWYHohGJsk3614XgZ1BhByOppLQ` ✅

## 📋 Keyingi 3 Qadam:

### 1️⃣ Google Apps Script Deploy qiling
1. [script.google.com](https://script.google.com) ga kiring
2. "New project" tugmasini bosing
3. `google-apps-script.js` faylidagi **BARCHA KODNI** nusxalab qo'ying
4. "Deploy" → "New deployment" → "Web app" → "Deploy"
5. **Web App URL** ni nusxalang (masalan: `https://script.google.com/macros/s/ABC123.../exec`)

### 2️⃣ React Service ni yangilang
`src/services/googleSheets.js` faylida:
```javascript
// Bu qatorni o'zgartiring:
const GOOGLE_APPS_SCRIPT_URL = 'SIZNING_WEB_APP_URL_SINI_SHU_YERGA_QOYING';
```

### 3️⃣ Test qiling
1. `npm run dev` - loyihani ishga tushiring
2. Hujjat topshirish formasiga kiring
3. Test ma'lumotlari kiriting va yuborib ko'ring
4. Google Sheets da yangi qator paydo bo'lishini kuting

## ✅ Tayyor!
Ma'lumotlar avtomatik Google Sheets ga saqlanadi!

---

**Yordam kerakmi?** GOOGLE_SHEETS_SETUP.md faylini ko'ring yoki savol bering! 🙋‍♂️ 