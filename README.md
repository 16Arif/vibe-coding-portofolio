# Arif's Portfolio Website

Selamat datang di repositori website portofolio statis satu halaman (Single Page Application) milik Arif, seorang Teknisi BMKG dengan ketertarikan di bidang Internet of Things (IoT), Web Development, dan Artificial Intelligence.

## 🚀 Fitur Utama

- **Desain Modern & Responsif**: Tampilan menarik dari layar *mobile* hingga desktop, mengusung konsep *glassmorphism* dan gradien.
- **Dark & Light Mode**: Dilengkapi sakelar (*toggle*) tema yang menyimpan preferensi secara otomatis menggunakan `localStorage`.
- **Projects Showcase**: Sistem *grid* interaktif dengan filter kategori (Semua, Photovoltaic, IoT, Web App, AI).
- **Contact Form Validation**: Validasi sisi klien (*client-side*) menggunakan Vanilla JavaScript lengkap dengan animasi Modal sukses yang mulus.
- **Smooth Scrolling**: Navigasi halaman tunggal yang halus dan menu *sticky* dengan efek latar buram (*backdrop-blur*).

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun murni tanpa *framework* berat, demi performa maksimal dan kemudahan integrasi dengan platform hosting statis.

- **HTML5** untuk struktur semantik.
- **Tailwind CSS (via CDN)** untuk *styling* cepat dan utilitas responsif.
- **Vanilla JavaScript (ES6+)** untuk interaktivitas (animasi, *filter*, *dark mode*).
- **Google Fonts (Inter)** untuk tipografi bersih.
- **Phosphor Icons** untuk *iconography* modern.

## 📁 Struktur Direktori

```text
├── .github/
│   └── workflows/
│       └── deploy.yml      # Konfigurasi aksi GitHub untuk deploy ke Pages otomatis
├── assets/
│   ├── css/
│   │   └── style.css       # Kustomisasi CSS ekstra (Scrollbar, Modal animation)
│   ├── images/
│   │   ├── hero.png        # Gambar ilustrasi halaman utama (Hero)
│   │   ├── project_pv.png  # Thumbnail proyek Photovoltaic
│   │   ├── project_iot.png # Thumbnail proyek IoT
│   │   └── project_web.png # Thumbnail proyek Web App
│   └── js/
│       └── app.js          # Logika Vanilla JS untuk filter, tema, validasi form
├── .nojekyll               # File bypass pemrosesan Jekyll di GitHub Pages
└── index.html              # Halaman utama HTML
```

## 💻 Cara Menjalankan Secara Lokal

Karena proyek ini sepenuhnya statis, Anda tidak perlu menginstal dependensi NPM (Node.js) apa pun. Cukup buka *file* secara langsung!

1. Klon (*clone*) atau unduh repositori ini.
2. Klik dua kali pada *file* `index.html` untuk membukanya di *browser* Anda.
3. *Alternatif:* Anda juga bisa menggunakan ekstensi [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) di VS Code untuk melihat perubahan secara *real-time*.

## 🌐 Deploy ke GitHub Pages

Repositori ini sudah dilengkapi dengan **GitHub Actions** untuk memublikasikan (deploy) web secara otomatis ke GitHub Pages.

1. Buka repositori Anda di GitHub.
2. Pergi ke bagian **Settings > Pages**.
3. Pada bagian **Build and deployment > Source**, pastikan pengaturannya dipilih pada opsi **GitHub Actions**.
4. Lakukan `git push` ke *branch* `main`.
5. Portofolio Anda kini akan secara otomatis dideploy ke URL *GitHub Pages* Anda (misal: `https://[username].github.io/Arif-portofolio/`).

---
Dibuat dengan 💻 oleh [Arif Abdul](https://github.com/Arif-abdul)
