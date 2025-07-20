# Google Sheets Integratsiyasini O'rnatish 📊

Bu qo'llanma sizga `HujjatTopshirish` komponentini Google Sheets bilan integratsiya qilish bo'yicha to'liq ma'lumot beradi.

## 🚀 1-Qadam: Google Sheets Yaratish

1. [Google Sheets](https://sheets.google.com) ga kiring
2. Yangi sheet yarating yoki mavjud sheetdan foydalaning
3. Sheet URL dan ID ni nusxalang:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit#gid=0
   ```
4. `SHEET_ID` ni keyingi qadamlar uchun saqlang

## 🔧 2-Qadam: Google Apps Script O'rnatish

### 2.1. Apps Script loyihasini yaratish
1. [script.google.com](https://script.google.com) ga kiring
2. "New project" tugmasini bosing
3. Loyihaga nom bering (masalan: "HujjatTopshirish API")

### 2.2. Kodni qo'shish
1. Standart `Code.gs` faylini oching
2. Barcha mavjud kodni o'chiring
3. `google-apps-script.js` faylidagi barcha kodni nusxalab qo'ying
4. `SHEET_ID` o'zgaruvchisini o'zingizning Google Sheets ID bilan almashtiring:
   ```javascript
   const SHEET_ID = 'sizning_google_sheets_id_sini_shu_yerga_qoying';
   ```

### 2.3. Web App sifatida deploy qilish
1. "Deploy" tugmasini bosing → "New deployment"
2. "Type" ni "Web app" ga o'zgartiring
3. Quyidagi sozlamalarni qo'ying:
   - **Execute as:** Me (sizning email ingiz)
   - **Who has access:** Anyone
4. "Deploy" tugmasini bosing
5. **Web app URL** ni nusxalab oling (buni keyingi qadamda ishlatamiz)

### 2.4. Ruxsatlarni berish
1. Birinchi deploy qilganda, Google ruxsat so'raydi
2. "Review permissions" tugmasini bosing
3. Google account tanlang
4. "Advanced" → "Go to [loyiha nomi] (unsafe)" ni bosing
5. "Allow" tugmasini bosing

## ⚙️ 3-Qadam: React Loyihasini Konfiguratsiya Qilish

### 3.1. Google Sheets Service konfiguratsiya
1. `buiqabul/src/services/googleSheets.js` faylini oching
2. `GOOGLE_APPS_SCRIPT_URL` o'zgaruvchisini o'zingizning Web App URL bilan almashtiring:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'sizning_web_app_url_sini_shu_yerga_qoying';
   ```

### 3.2. URL formatini tekshirish
Web App URL quyidagi formatda bo'lishi kerak:
```
https://script.google.com/macros/s/[SCRIPT_ID]/exec
```

## 🧪 4-Qadam: Test Qilish

### 4.1. Google Apps Script da test
1. Apps Script loyihasida `testWriteToSheet` funksiyasini ishga tushiring
2. Execution log ni tekshiring
3. Google Sheets ga test ma'lumoti qo'shilganini tekshiring

### 4.2. React loyihasida test
1. Loyihani ishga tushiring: `npm run dev`
2. Hujjat topshirish formasi sahifasiga kiring
3. Test ma'lumotlarini kiriting va formani yuborib ko'ring
4. Google Sheets da yangi qator paydo bo'lishini kuting

## 🔒 5-Qadam: Xavfsizlik Sozlamalari

### 5.1. Google Sheets huquqlarini cheklash
1. Google Sheets ni oching
2. "Share" tugmasini bosing
3. Faqat kerakli odamlarga ruxsat bering
4. "View" yoki "Comment" huquqini bering (admin uchun "Edit")

### 5.2. Apps Script huquqlarini tekshirish
1. Apps Script loyihasida "Project Settings" ga kiring
2. "Execution API" ni "Disabled" qilib qo'ying (agar kerak bo'lmasa)

## 📝 6-Qadam: Ma'lumotlar Strukturasi

Google Sheets da quyidagi ustunlar avtomatik yaratiladi:

| Ustun | Tavsif |
|-------|--------|
| Sana | Forma yuborilgan vaqt |
| Familya | Talabaning familyasi |
| Ism | Talabaning ismi |
| Otasining ismi | Otasining ismi |
| Telefon | Asosiy telefon raqam |
| Qo'shimcha telefon | Qo'shimcha telefon raqam |
| Viloyat | Tanlangan viloyat |
| Tuman | Kiritilgan tuman |
| Manzil | To'liq manzil |
| Yo'nalish | Tanlangan ta'lim yo'nalishi |

## 🚨 Xatoliklarni Hal Qilish

### "Permission denied" xatoligi
- Apps Script da ruxsatlarni qayta bering
- Web App ni qayta deploy qiling

### "CORS error" xatoligi
- Web App sozlamalarida "Who has access" ni "Anyone" qilib qo'ying
- Browser cache ni tozalang

### "Sheet not found" xatoligi
- Google Sheets ID to'g'ri kiritilganini tekshiring
- Google Sheets mavjudligini va unga ruxsatingiz borligini tekshiring

### Ma'lumotlar saqlanmayapti
- Web App URL to'g'ri kiritilganini tekshiring
- Apps Script execution log ni tekshiring
- Browser developer console da xatoliklarni tekshiring

## 🔄 Yangilash va Backup

### Apps Script kodni yangilash
1. Apps Script loyihasiga kiring
2. Kodni o'zgartiring
3. Qayta deploy qiling (yangi version yarating)

### Google Sheets backup
1. Google Sheets ni PDF yoki Excel formatida export qiling
2. Muntazam ravishda nusxa oling
3. Google Drive da avtomatik backup ishlaydi

## 📞 Yordam

Agar muammolarga duch kelsangiz:

1. **Browser developer console** ni tekshiring (F12)
2. **Google Apps Script execution log** ni ko'ring
3. **Google Sheets huquqlari** to'g'ri ekanligini tekshiring
4. **URL lar** to'g'ri kiritilganligini tasdiqlang

## 🎉 Tayyor!

Endi sizning formangiz Google Sheets bilan to'liq integratsiya qilingan! 

Har bir forma yuborilganda:
- ✅ Ma'lumotlar avtomatik Google Sheets ga saqlanadi
- ✅ Sana va vaqt avtomatik qo'shiladi
- ✅ Xatoliklar foydalanuvchiga ko'rsatiladi
- ✅ Loading va success xabarlar ko'rsatiladi
- ✅ Retry logic ishlatiladi (agar network muammosi bo'lsa)

**Omad tilaymiz! 🚀** 