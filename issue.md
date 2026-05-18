# Pembaruan Konten Portofolio Arif Abdul (Content Update Tracker)

Dokumen ini berisi panduan teknis yang sangat detail untuk memperbarui konten (teks, data proyek, dan riwayat pengalaman) pada website portofolio statis Arif Abdul, menyesuaikan dengan profil, keahlian, dan tujuan karir terbarunya.
*Task* ini disiapkan agar dapat dieksekusi langkah demi langkah dengan presisi oleh *junior programmer* atau *AI Agent*.

---

## 🎯 Objektif Profil Baru
Portofolio harus mencerminkan Arif sebagai:
1. **Teknisi BMKG (Stasiun Geofisika Balikpapan)** dengan keahlian teknis operasional.
2. **Fullstack Developer** (Laravel, PHP, JS, Flutter) yang mengembangkan aplikasi logbook gempa terintegrasi.
3. **Calon Mahasiswa Master** yang bersemangat di bidang *Renewable Energy*, *Power Systems*, dan *Microcontroller*, dengan rekam jejak nyata dalam memecahkan masalah kelistrikan (seismograf/genset).
4. Seseorang dengan kepedulian terhadap isu iklim, bencana, serta memiliki hobi hidroponik selada.

---

## 📋 Eksekusi Fase 1: Penyesuaian `index.html` (Struktur Utama)

### 1.1 Update Hero Section (Bagian Atas)
- **Lokasi Kode**: `<section id="home">`
- **Tugas**:
  - Ubah deskripsi di bawah judul "Arif Abdul - BMKG Technician" agar lebih mencerminkan profil baru.
  - **Teks Baru (Saran)**: "Teknisi di Stasiun Geofisika Balikpapan - BMKG yang memadukan keahlian Instrumentasi dan *Fullstack Web Development*. Berdedikasi pada keandalan sistem peringatan dini bencana, peduli pada isu perubahan iklim, dan saat ini mendalami *Renewable Energy* serta analisis sistem tenaga kelistrikan."

### 1.2 Update About Me Section
- **Lokasi Kode**: `<section id="about">`
- **Tugas (Paragraf Profil)**:
  - Tulis ulang 2 paragraf profil menjadi 3 paragraf yang mencakup:
    - Latar belakang pendidikan (Lulusan Diploma IV Instrumentasi STMKG tahun 2020) dan peran saat ini sejak Juni 2021.
    - Pengalaman menghadapi masalah kegagalan daya (*power failure*) akibat *drop* tegangan baterai pada sistem seismograf, yang memotivasi ketertarikan pada *renewable energy*, *photovoltaic*, dan efisiensi sistem tenaga. Serta keinginan melanjutkan studi master di bidang *renewable energy*, *microcontroller*, *network model*, dan *power flow analysis*.
    - Sisi personal: Peduli terhadap isu perubahan iklim dan bencana, memiliki hobi hidroponik selada (terutama strategi budidaya di iklim panas), serta mengantongi skor IELTS 6.0.
- **Tugas (Skill Badges)**:
  - Perbarui daftar label keahlian (*badges*). Hapus yang tidak relevan dan ganti dengan: `Laravel`, `PHP`, `JavaScript`, `Flutter`, `Photovoltaic`, `Power System Analysis`, `Microcontroller`, `Renewable Energy`.

### 1.3 Update Experience / Timeline Section
- **Lokasi Kode**: `<section id="experience">`
- **Tugas**: Sesuaikan rentang waktu dan peran (ubah isi HTML dari elemen *timeline* yang sudah ada). Tambahkan/kurangi *item* agar sesuai dengan data berikut:
  1. **Juni 2021 - Sekarang**: Teknisi BMKG di Stasiun Geofisika Balikpapan. (Sebutkan fokus pada keandalan operasional, seismograf, genset).
  2. **Saat Ini (Ongoing)**: Development Website UPT Stasiun Geofisika Balikpapan & Project Predictive Power Degradation Aki Genset.
  3. **Juni 2025 - Januari 2026**: Driver Gojek (Sebutkan sebagai pengalaman membangun kegigihan dan interaksi sosial).
  4. **2023**: Mengikuti Diklat Pemrograman Aplikasi Mobile oleh Pusjarkom BMKG (Tingkatkan fokus pada Flutter/Mobile).
  5. **2020**: Lulus Diploma IV Instrumentasi dari Sekolah Tinggi Meteorologi Klimatologi dan Geofisika (STMKG).

---

## 📋 Eksekusi Fase 2: Penyesuaian `assets/js/app.js` (Dynamic Projects)

### 2.1 Perbarui Kategori Filter Proyek
- **Lokasi Kode di `index.html`**: Elemen `<div id="filter-container">`
- **Tugas**: 
  - Ubah tombol filter menjadi relevan dengan proyek baru.
  - Saran Filter: `all` (Semua), `web` (Web App/Laravel), `power` (Power & Energy), `mobile` (Mobile App).

### 2.2 Perbarui Data Array `projectsData`
- **Lokasi Kode di `app.js`**: `const projectsData = [ ... ]`
- **Tugas**: Ganti seluruh objek di dalam array tersebut dengan daftar proyek berikut:
  
  **Proyek 1: Aplikasi Logbook Operasional (Laravel)**
  - `category`: `web`
  - `categoryLabel`: `Fullstack Laravel`
  - `title`: `Aplikasi Logbook Operasional Geofisika`
  - `desc`: `Aplikasi operasional terintegrasi dengan fitur generator narasi dan infografis gempa, import/export CSV, serta integrasi pemetaan Leaflet dan html2canvas.`
  - `tags`: `["Laravel", "PHP", "Leaflet", "JS"]`

  **Proyek 2: Predictive Power Degradation Aki Genset**
  - `category`: `power`
  - `categoryLabel`: `Power System & Data`
  - `title`: `Prediksi Degradasi Aki Genset Stageof Balikpapan`
  - `desc`: `Proyek analisis sistem kelistrikan (contingency analysis) untuk memahami akar masalah power failure dan memprediksi penurunan daya baterai pada fasilitas seismograf.`
  - `tags`: `["Energy", "Data Analysis", "Microcontroller"]`

  **Proyek 3: Website UPT Stasiun Geofisika Balikpapan**
  - `category`: `web`
  - `categoryLabel`: `Web Development`
  - `title`: `Website Profil UPT Stageof Balikpapan`
  - `desc`: `Pengembangan portal informasi resmi stasiun geofisika secara komprehensif, modern, dan mudah diakses oleh publik.`
  - `tags`: `["Laravel", "Frontend", "UI/UX"]`

  *(Catatan: Anda dapat menggunakan gambar aset `project_web.png` atau `project_iot.png` yang sudah ada sebagai placeholder gambar `img` untuk saat ini).*

---

## 📋 Eksekusi Fase 3: SEO dan Finalisasi (Opsional tapi Penting)

### 3.1 Perbarui Meta Description
- **Lokasi Kode di `index.html`**: `<meta name="description">` dan `<meta property="og:description">`
- **Tugas**: Pastikan deskripsinya menyebutkan "Teknisi BMKG Balikpapan", "Laravel Fullstack Developer", dan "Renewable Energy Enthusiast".

### 3.2 Instruksi Validasi untuk Eksekutor
Setelah semua perubahan pada HTML dan JS selesai dilakukan:
1. Buka file `index.html` di browser.
2. Verifikasi bahwa paragraf "About Me" merender cerita tentang seismograf dan hobi hidroponik selada.
3. Uji tombol filter proyek (Web App, Power, dll.) dan pastikan proyek Laravel serta Genset muncul dengan benar.
4. Verifikasi bahwa alur timeline (STMKG -> BMKG -> Diklat Pusjarkom -> Gojek -> Saat ini) tersusun secara logis secara vertikal.

---
**Catatan untuk Eksekutor (AI/Junior Dev):** 
Gunakan bahasa Indonesia yang baku namun tetap luwes dan profesional untuk isi teks konten (copywriting). Jangan menghapus class utilitas CSS Tailwind yang mengatur animasi (`reveal`) dan responsivitas saat mengganti isi teks.
