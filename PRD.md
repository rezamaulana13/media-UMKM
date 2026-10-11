# Product Requirements Document (PRD) — Media UMKM

**Versi Dokumen:** 2.0.0  
**Status:** Approved / Live Implementation  
**Tema Desain:** Modern Clean Slate & Vibrant Emerald (Plus Jakarta Sans)  
**Terakhir Diperbarui:** 10 Oktober 2026  
**Penulis:** Tim Pengembang Media UMKM  
**Dokumen Terkait:** [DESIGN.md](file:///e:/Magang/boostrap/UMKM/DESIGN.md)

---

## 1. Executive Summary (Ringkasan Eksekutif)
**Media UMKM** adalah platform etalase digital bersama berbasis web statis modern dan responsif yang dirancang untuk memperkenalkan warung, toko, dan pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) lokal kepada warga sekitar. 

Platform ini mengadopsi tema visual **Modern Slate & Vibrant Emerald** dengan tipografi bersih **Plus Jakarta Sans**, memungkinkan calon pembeli mencari produk berdasarkan kategori atau kata kunci, melihat daftar harga transparan, jam buka, dan peta lokasi, serta langsung berinteraksi atau memesan ke pemilik usaha melalui WhatsApp tanpa perantara dan tanpa potongan komisi.

---

## 2. Problem Statement & Value Proposition (Masalah & Solusi)

### 2.1 Permasalahan
* **Tantangan Digitalisasi UMKM:** Banyak pelaku usaha mikro (warung makan, penjahit, bengkel sepeda, toko kelontong) tidak memiliki anggaran, keahlian teknis, maupun waktu untuk membangun dan mengelola website sendiri.
* **Keterbatasan Visibilitas:** Pelanggan potensial di area sekitar sering kali tidak mengetahui keberadaan produk atau jasa lokal berkualitas yang berada di radius tempat tinggal mereka.
* **Biaya Aplikasi Pihak Ketiga:** Platform *marketplace* atau *food delivery* mengenakan komisi potongan yang relatif tinggi bagi pelaku usaha berskala kecil.

### 2.2 Solusi (Value Proposition)
* **Website Tanpa Biaya Server & Database:** Dibangun menggunakan arsitektur web statis yang ringan, cepat, aman, dan mudah di-hosting gratis (GitHub Pages, Netlify).
* **Integrasi WhatsApp Direct Contact:** Menghubungkan pembeli langsung ke nomor WhatsApp penjual dengan format pesan otomatis.
* **Halaman Mandiri (*Standalone Pages*):** Setiap UMKM memiliki tautan halaman mandiri (`.html`) yang mudah dibagikan (*shareable*) ke media sosial.
* **Tampilan Modern, Simpel & Responsif:** Desain visual profesional bernuansa *Modern Slate & Vibrant Emerald* yang segar, elegan, dan optimal diakses dari ponsel pintar (mobile) maupun desktop layar lebar.

---

## 3. User Personas (Target Pengguna)

| Persona | Profil Singkat | Kebutuhan Utama |
| :--- | :--- | :--- |
| **Pembeli / Warga Lokal (End User)** | Warga yang mencari produk/jasa di sekitar lingkungan tempat tinggal. | Pencarian cepat, informasi harga & jam operasional jelas, tautan peta akurat, kemudahan kontak langsung via WA. |
| **Pelaku UMKM (Merchant)** | Pemilik warung, kedai kopi, pengrajin batik/rajut, jasa laundry, bengkel. | Halaman profil usaha yang rapi tanpa perlu coding, promosi usaha, penerimaan pesanan langsung ke nomor WhatsApp pribadi. |
| **Pengelola / Admin Komunitas** | Warga atau inisiator lokal yang memfasilitasi onboarding UMKM. | Kemudahan penambahan data UMKM baru hanya dengan memperbarui satu berkas data terpusat (`data.js`). |

---

## 4. Fitur Utama & Spesifikasi Fungsional

### 4.1 Navigasi Utama (Floating Dark Card Navbar)
* **Wadah Navbar:** Kartu hitam/gelap melayang (*floating dark card*, `linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(11, 15, 25, 0.96))`) dengan efek *backdrop blur*, sudut melengkung 16px, garis tepi tipis `rgba(255, 255, 255, 0.12)`, dan elevasi `box-shadow: 0 14px 38px rgba(0, 0, 0, 0.35)`.
* **Kiri (Branding):** Ikon toko modern bersudut melengkung (*squircle*) biru elektrik (`#0284C7` ke `#0066FF`) dan teks jenama *"Media UMKM"* berwarna putih tebal `#FFFFFF`.
* **Tengah (Navigasi Halaman):** Menu navigasi horizontal dengan teks warna slate terang nyaman (`#CBD5E1`), dan status aktif/hover beraksen biru langit cerah (`#38BDF8`):
  - *Beranda* (`index.html`)
  - *Direktori UMKM* (`direktori.html`)
  - *Tentang Kami* (`tentang.html`)
  - *Kontak* (`kontak.html`)
* **Kanan (Call to Action):** Tombol lonjong pill shape (`border-radius: 50px`) berwarna *Electric Royal Blue* (`#0066FF` ke `#0051CC`) dengan teks putih *"Daftarkan Usaha"*.
* **Mode Mobile (< 992px):** Tombol hamburger menu modern membuka drawer menu hitam/gelap dengan item navigasi terpusat.

### 4.2 Halaman Beranda (`index.html`)
* **Hero Banner Terpusat (Centered Hero Layout):** 
  - Latar Belakang: Gambar tematik cat air Nusantara terkompresi ringkas (< 100 KB, aktual: 62.88 KB `background-hero.webp`) dengan lapisan gradasi transparan untuk menjaga kontras teks dan kartu pencarian.
  - Headline utama: *"Dukung Usaha Tetangga, Belanja Langsung ke Warung Lokal"* tampil langsung di posisi teratas hero dengan tipografi tebal dan proporsional.
  - Paragraf deskripsi yang ramah dan mengajak belanja lokal.
  - Kartu pencarian simpel (*floating search card*): input kata kunci usaha/produk langsung berdampingan dengan tombol cari hijau forest emerald (`Cari ->`) tanpa dropdown filter wilayah.
  - Deretan 3 metrik teks langsung (tanpa kotak background putih): angka statistik tebal *120+ Warung Terdaftar*, *0% Komisi Potongan*, dan *100% Chat Penjual Asli* tampil langsung dan bersih di atas kanvas hero.
* **Highlight 4 Pilar Keunggulan:**
  1. *Dekat & Mudah* — Temukan usaha terdekat dari tempat tinggal.
  2. *Harga Transparan* — Daftar harga resmi langsung dari pemilik.
  3. *Jam & Peta Jelas* — Jam operasional dan navigasi Google Maps akurat.
  4. *Langsung WhatsApp* — Pesan langsung tanpa potongan komisi.
* **Grid Kategori Cepat:** Chip kategori (Kuliner, Fashion & Kerajinan, Jasa, Kebutuhan Harian, Kecantikan) dengan penghitung jumlah usaha aktif.
* **Koleksi Usaha Unggulan:** Kartu etalase produk UMKM terpilih dengan badge status (*Baru* warna emerald, *Promo* warna amber).
* **3 Kartu Target Audiens:**
  - `01` — Pemilik usaha kecil dan warung rumahan.
  - `02` — Pelanggan yang membutuhkan etalase online praktis.
  - `03` — Warga yang ingin mendukung ekonomi tetangga sendiri.
* **Profil Pengelola:** Narasi inisiator komunitas dengan tombol WhatsApp langsung dan foto profil berbingkai rapi.
* **Hitungan Mundur Gelombang Pendaftaran:** Timer interaktif real-time 4 angka (*Hari, Jam, Menit, Detik*).

### 4.3 Direktori & Pencarian UMKM (`direktori.html`)
* **Filter Multi-Kategori:** Filter pill kategori instan tanpa me-refresh halaman (*client-side reactive filter*).
* **Pencarian Real-Time (Live Search):** Filter kata kunci berdasarkan nama usaha, tagline, deskripsi, area, maupun nama produk.
* **Sinkronisasi Parameter URL:** Menyimpan status pencarian dan kategori pada query string URL (`?q=...&kategori=...`) untuk kemudahan *bookmarking*.
* **State Kosong (Empty State):** Tampilan informatif saat hasil pencarian tidak ditemukan dengan arahan mendaftarkan usaha.

### 4.4 Halaman Detail Usaha Mandiri (`*.html`)
Setiap unit usaha memiliki berkas halaman HTML independen (contoh: `seblak-bu-ratna.html`, `kopi-janari.html`):
* **Galeri / Carousel Foto:** Slider foto interaktif untuk menampilkan produk unggulan.
* **Profil Lengkap:** Deskripsi usaha, alamat lengkap, dan jam operasional.
* **Daftar Menu / Produk & Harga:** Tabel/baris daftar item beserta harga dalam format Rupiah (`RpXX.XXX`).
* **Peta Lokasi Terintegrasi:** Embed Google Maps interaktif + tombol pintasan navigasi peta.
* **Panel Aksi (Sticky Sidebar):** Tombol aksi *Chat WhatsApp* (dengan format pesan pembuka otomatis) dan fitur *Bagikan Halaman* (*Web Share API* / *Clipboard Copy*).
* **Rekomendasi Usaha Serupa:** Menampilkan usaha lain dalam kategori yang relevan.

### 4.5 Formulir Pendaftaran Usaha (`daftar.html`)
* Formulir pendaftaran terstruktur (Nama Pemilik, Nama Usaha, Kategori, Alamat/Area, Deskripsi).
* Validasi input HTML5 bawaan (*needs-validation*).
* Otomasi pengiriman data: mengonversi input formulir menjadi pesan terformat dan membukanya langsung ke WhatsApp pengelola.
* Seksi FAQ (*Accordion*) menjawab pertanyaan biaya, persiapan data, durasi tayang, dan pembaruan data.

### 4.6 Halaman Informasi & Bantuan (`tentang.html` & `kontak.html`)
* Narasi visi misi dan latar belakang inisiatif platform.
* Kartu kontak interaktif: WhatsApp, Instagram, dan Email pengelola.

---

## 5. Struktur Data (Data Schema)

Seluruh konfigurasi dan database disimpan di [assets/js/data.js](file:///e:/Magang/boostrap/UMKM/assets/js/data.js):

### 5.1 Skema `SITE` (Pengaturan Global)
```javascript
const SITE = {
  nama: "Media UMKM",
  slogan: "Etalase bersama warung, toko, dan jasa lokal",
  kota: "Bandung",
  wa: "6281234567890",
  instagram: "mediaumkm",
  email: "halo@mediaumkm.web.id",
  pengelola: "Nama Pengelola",
  alamat: "Bandung, Jawa Barat",
  jamRespon: "Senin–Sabtu, 08.00–20.00 WIB",
  batasDaftar: "2026-12-31T23:59:00"
};
```

### 5.2 Skema `UMKM`
```javascript
{
  id: "seblak-bu-ratna",           // ID unik sekaligus nama file html
  nama: "Kedai Seblak Bu Ratna",
  kategori: "kuliner",
  tagline: "Seblak kuah pedas dengan topping yang bisa dipilih sendiri.",
  deskripsi: "Deskripsi lengkap usaha...",
  emoji: "🍜",
  warna: "#131B2E",               // Warna latar placeholder SVG jika tanpa foto
  foto: [],                       // Array path foto (kosong = fallback placeholder)
  area: "Antapani",
  alamat: "Jl. Purwakarta No. 12, Antapani, Bandung",
  maps: "",                       // Custom embed URL Google Maps (opsional)
  jam: "Setiap hari, 10.00–22.00",
  wa: "6281234560001",
  instagram: "seblakburatna",
  badge: "Baru",                  // "Baru", "Promo", atau ""
  unggulan: true,                 // Tampil di landing page beranda
  produk: [
    { nama: "Seblak Original", harga: 15000, ket: "Kerupuk, telur, sayur" }
  ]
}
```

---

## 6. Persyaratan Non-Fungsional (Non-Functional Requirements)

* **Performa (Fast Load Time):** Skor Google Lighthouse ≥ 90 untuk Performance, Accessibility, Best Practices, dan SEO.
* **Kompatibilitas Lintas Browser (Cross-Browser Compatibility):** Berfungsi mulus di Chrome, Firefox, Safari, Edge, dan browser ponsel (Android Chrome & iOS Safari).
* **Desain Responsif (Mobile-First):** Tampilan adaptif pada berbagai breakpoint:
  - Mobile Kecil: `< 480px`
  - Mobile Standar / Tablet Kecil: `480px - 767px`
  - Tablet / iPad: `768px - 991px`
  - Desktop: `≥ 992px`
  - Desktop Layar Lebar: `≥ 1200px`
* **Keamanan & Privasi:** Tidak memerlukan penyimpanan data sensitif pengguna di server (*zero backend vulnerability*).

---

## 7. Roadmap Pengembangan Masa Depan
1. **PWA (Progressive Web App):** Mendukung fitur *Add to Home Screen* dan offline browsing untuk data yang telah ter-cache.
2. **Kalkulator Ongkos Kirim Mandiri:** Estimasi jarak otomatis ke titik lokasi UMKM.
3. **Ulasan & Rating Berbasis Komunitas:** Integrasi feedback pelanggan secara moderasi.
4. **QR Code Generator Meja:** Fitur pembuatan kartu menu QR Code cetak untuk meja warung fisik.

---

## 8. Strategi Pengindeksan Google Search Console (SOP Artikel)

Panduan operasional dan solusi percepatan indeks artikel baru di Google Search Console (GSC):

1. **Tautkan Antar-Artikel (*Internal Linking*):**  
   Setiap kali menerbitkan artikel baru, edit 1 atau 2 artikel lama yang sudah terbit, lalu sisipkan tautan (*internal link*) menuju artikel baru tersebut. Ini memberi sinyal kuat kepada Googlebot bahwa artikel baru memiliki relevansi dan bobot prioritas tinggi (mencegah *orphan page*).

2. **Manfaatkan Fitur Inspeksi URL (Maksimal 5x per hari):**  
   Di Google Search Console, masukkan URL artikel baru ke kolom pencarian inspeksi di bagian atas, klik **"Uji URL Langsung" (*Test Live URL*)**, lalu klik **"Minta Pengindeksan" (*Request Indexing*)**. Langkah ini memotong antrean perayapan standar Googlebot.

3. **Pancing dengan Trafik Nyata (*Traffic Signal*):**  
   Segera setelah artikel terbit, bagikan tautannya ke status WhatsApp, grup komunitas, atau media sosial. Ketika sistem Google mendeteksi adanya klik aktif dan pembaca nyata yang berinteraksi dengan artikel, Google secara otomatis akan menaikkan prioritas pengindeksannya.

4. **Beri Waktu Adaptasi (1–4 Minggu):**  
   Untuk website yang usianya masih di bawah 6 bulan, fluktuasi grafik "Tidak Terindeks" (*Discovered / Crawled - currently not indexed*) merupakan proses adaptasi normal terhadap *crawl budget* domain baru. Seiring bertambahnya usia domain, otoritas situs, dan konsistensi pembaruan konten, rasio halaman terindeks akan meningkat dengan sendirinya.

