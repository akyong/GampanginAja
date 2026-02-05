# DOJ Epstein PDF Navigator – Chrome Extension

Chrome Extension sederhana untuk mempermudah navigasi dokumen PDF DOJ Epstein (Next / Back + shortcut keyboard).

Ekstensi ini **TIDAK membypass sistem keamanan**, **TIDAK mengakses file tersembunyi**, dan **TIDAK memodifikasi cookie**.  
Ekstensi hanya membantu **navigasi URL PDF yang memang sudah publik dan bisa diakses via browser**.

---

## ⚠️ PENTING (WAJIB DILAKUKAN PERTAMA)

Sebelum menggunakan ekstensi:

1. **Buka link resmi DOJ secara manual terlebih dahulu:**

   👉 https://www.justice.gov/epstein/doj-disclosures

2. Website akan menanyakan:
   > “Are you 18 years of age or older?”

   Pilih **Yes**.

3. Setelah lolos verifikasi usia, **buka salah satu file PDF secara manual terlebih dahulu**  
   (bebas dari dataset mana saja).

   Contoh: https://www.justice.gov/epstein/files/DataSet%201/EFTA00000001.pdf


✅ Setelah ini selesai, browser akan menyimpan session & cookie yang dibutuhkan.  
Ekstensi baru bisa bekerja normal **SETELAH langkah ini dilakukan**.

---

## ✨ Cara Kerja Ekstensi (Versi Terbaru)

✅ **Tidak perlu input apapun lagi**
- Tidak perlu isi dataset
- Tidak perlu isi start number
- Tidak perlu set folder
- Tidak perlu konfigurasi manual

Ekstensi sudah:
- Mengenali pola URL otomatis
- Menggunakan daftar file resmi (Dataset 10, 11, 12, dst)
- Navigasi hanya ke file yang memang **ADA**

---

## 🧭 Cara Menggunakan

1. Pastikan kamu **sudah membuka 1 file PDF DOJ secara manual** (lihat langkah penting di atas).
2. Buka salah satu PDF dataset (misalnya Dataset 10 / 11 / 12).
3. Gunakan:
- **Tombol Next / Back di extension**
- atau **shortcut keyboard**

---

## ⌨️ Shortcut Keyboard

| Shortcut | Fungsi |
|--------|-------|
| `→` (Arrow Right) | Next PDF |
| `←` (Arrow Left) | Previous PDF |

> Shortcut bisa diubah di: chrome://extensions/shortcuts

---

## 📂 Dataset yang Didukung

Ekstensi sudah dikonfigurasi untuk dataset besar yang **nomor filenya tidak berurutan**, termasuk:

- ✅ Dataset 10
- ✅ Dataset 11
- ✅ Dataset 12

Navigasi **tidak lompat ke file kosong** karena:
- Sudah menggunakan **daftar file valid**
- Tidak sekadar `+1 / -1`

---

## 🔐 Tentang Keamanan & Legal

- Ekstensi **tidak mem-bypass age gate**
- Ekstensi **tidak mengubah cookie**
- Ekstensi **tidak membuka file privat**
- Semua file:
  - Bisa dibuka manual
  - Bersumber dari domain resmi `justice.gov`

Ekstensi ini hanya alat bantu navigasi URL.

---

## 📦 Packaging Chrome Extension

Jika ingin build `.crx`:

1. Buka: chrome://extensions
2. Aktifkan **Developer Mode**
3. Klik **Pack extension**
4. Pilih folder ekstensi
5. Gunakan `.pem` lama jika diminta (atau hapus jika ingin key baru)

---

## 🧠 Catatan Tambahan

Jika:
- PDF tidak terbuka
- Lompat balik ke halaman verifikasi usia

Solusi:
- Buka ulang `https://www.justice.gov/epstein/doj-disclosures`
- Pastikan sudah klik **Yes (18+)**
- Buka satu PDF manual lagi
- Lanjutkan pakai ekstensi

---

## ✅ Ringkasannya

✔ Verifikasi usia → manual  
✔ Buka 1 PDF → manual  
✔ Navigasi ratusan PDF → pakai ekstensi  

No ribet. No input. No bypass.  
Pure navigation helper.

---

