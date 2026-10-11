# 🌿 Media UMKM — Modern Design System (DESIGN.md)

<div align="center">

![Badge: Version](https://img.shields.io/badge/Design_System-v3.0_Slate_&_Emerald-10B981?style=for-the-badge&logo=figma&logoColor=white)
![Badge: PRD Alignment](https://img.shields.io/badge/Aligned_with-PRD.md_v2.0-0F172A?style=for-the-badge&logo=markdown&logoColor=10B981)
![Badge: Typography](https://img.shields.io/badge/Typography-Plus_Jakarta_Sans-0B0F19?style=for-the-badge&logo=googlefonts&logoColor=10B981)
![Badge: Accessibility](https://img.shields.io/badge/WCAG-2.1_AAA_Compliant-25D366?style=for-the-badge&logo=w3c&logoColor=white)

**Sistem Desain Visual, Panduan Komponen, dan Standar Interaksi UI/UX Platform Etalase Media UMKM.**  
*Dokumen ini dirancang selaras 100% dengan kebutuhan spesifikasi produk di [PRD.md](file:///e:/Magang/boostrap/UMKM/PRD.md).*

</div>

---

## 🧭 1. Konsep & Filosofi Desain

```
                      +------------------------------------------+
                      |       FILOSOFI DESAIN MEDIA UMKM        |
                      +------------------------------------------+
                                           |
         +---------------------------------+---------------------------------+
         |                                 |                                 |
         v                                 v                                 v
   [ 🌿 SEGAR & BERSIH ]             [ ⚡ CEPAT & SIMPEL ]            [ 📱 RAMAH PENGGUNA ]
  Palet Slate & Emerald yang         Pencarian instan, filter cepat,  Tipografi Plus Jakarta Sans
  hangat, modern, & estetik.         & 1-klik chat WhatsApp.          yang nyaman dibaca di ponsel.
```

1. **Simpel & Elegan (*Clean Slate & Emerald*):**
   Mengganti warna gelap yang terlalu berat dengan kombinasi **Deep Slate (`#0B0F19`)**, **Panel Dark Slate (`#131B2E`)**, dan aksen **Vibrant Emerald (`#10B981`)** yang segar, profesional, dan sangat cocok untuk produk UMKM, makanan, kerajinan, serta layanan lokal.
2. **Tipografi Modern (*Plus Jakarta Sans*):**
   Menggunakan font tunggal berbobot ergonomis yang bersih, rapi, dan mudah dibaca oleh semua kalangan usia di perangkat smartphone maupun layar komputer.
3. **Pencarian Cepat & Praktis (PRD Sec 4.2):**
   Kotak pencarian langsung di hero banner dilengkapi dengan tag pintas (*shortcut tags*) untuk kata kunci yang sering dicari warga (*Seblak Pedas, Kopi Susu, Batik Tulis, Laundry Kilat*).

---

## 🎨 2. Palet Warna & Token Desain

### 2.1 Matriks Warna

| Token Name | Hex Code | Visual Swatch | Fungsi & Penggunaan di [PRD.md](file:///e:/Magang/boostrap/UMKM/PRD.md) |
| :--- | :--- | :---: | :--- |
| `--bg` | `#0B0F19` | ⬛ `[#0B0F19]` | **Background Utama Kanvas** (Midnight Slate) |
| `--bg-subtle` | `#0F172A` | 🟦 `[#0F172A]` | **Latar Seksi Alternatif** (Slate-900) |
| `--panel` | `#131B2E` | 🔷 `[#131B2E]` | **Latar Kartu UMKM, Panel Form, & Accordion** |
| `--panel-hover` | `#1A243B` | 🔷 `[#1A243B]` | **Efek Hover Kartu & Menu** |
| `--primary` | `#10B981` | 🟢 `[#10B981]` | **Aksen Utama / Tombol CTA / Badge "Baru"** |
| `--primary-light` | `#34D399` | 🌿 `[#34D399]` | **Highlight Teks / Ikon / Tag Aktif** |
| `--accent` | `#F59E0B` | 🍯 `[#F59E0B]` | **Aksen Badge "Promo" / Rating / Highlight** |
| `--wa` | `#25D366` | 💬 `[#25D366]` | **Tombol Kontak Resmi WhatsApp (Official)** |
| `--text-head` | `#F8FAFC` | ⚪ `[#F8FAFC]` | **Judul Utama & Nama Usaha (Slate-50)** |
| `--text-body` | `#CBD5E1` | 📄 `[#CBD5E1]` | **Teks Paragraf & Deskripsi (Slate-300)** |
| `--text-muted` | `#94A3B8` | 🔘 `[#94A3B8]` | **Meta Info, Area, & Jam Buka (Slate-400)** |

### 2.2 Kode Token CSS (`assets/css/style.css`)

```css
:root {
  --bg: #0B0F19;
  --bg-subtle: #0F172A;
  --panel: #131B2E;
  --panel-hover: #1A243B;
  
  --primary: #10B981;
  --primary-hover: #059669;
  --primary-light: #34D399;
  --primary-subtle: rgba(16, 185, 129, 0.12);
  
  --accent: #F59E0B;
  --wa: #25D366;
  
  --text-head: #F8FAFC;
  --text-body: #CBD5E1;
  --text-muted: #94A3B8;
}
```

---

## 🔤 3. Tipografi & Hierarki Visual

Menggunakan font tunggal yang harmonis: **`Plus Jakarta Sans`**

```
  Plus Jakarta Sans — Modern Geometric Typography
  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
```

### 3.1 Skala Ukuran Font (Fluid Scale)

| Elemen | Ukuran (Fluid) | Weight | Line Height | Keterangan |
| :--- | :--- | :--- | :--- | :--- |
| **Headline H1** | `clamp(2.2rem, 4.8vw, 3.6rem)` | 800 (Extra Bold) | `1.20` | Judul Utama di Beranda |
| **Section H2** | `clamp(1.75rem, 3.4vw, 2.5rem)` | 800 (Bold) | `1.25` | Judul Seksi Konten |
| **Card H3** | `clamp(1.2rem, 2.2vw, 1.5rem)` | 700 (Bold) | `1.30` | Nama Usaha pada Kartu |
| **Body Regular** | `0.98rem (15.7px)` | 400 / 500 | `1.65` | Teks Deskripsi & Paragraf |
| **Button Label** | `0.92rem (14.7px)` | 700 (Bold) | `1.00` | Teks Tombol Aksi |
| **Badge / Caption**| `0.80rem – 0.85rem` | 600 / 700 | `1.40` | Tag Kategori, Area, & Jam |

---

## 📐 4. Struktur Komponen UI & Keselarasan PRD

### 4.1 Navbar Melayang Gelap (Floating Dark Card Navbar — PRD Sec 4.1)
Mengadopsi gaya kartu hitam/gelap melayang (*floating dark card*) dengan sudut melengkung 16px, bayangan halus, dan tombol aksi biru elektrik cerah:

```
[DESKTOP (Viewport >= 992px) — Floating Dark Card Bar]
+---------------------------------------------------------------------------------------------------------+
| [🏪] Media UMKM      |    [ Beranda | Direktori UMKM | Tentang Kami | Kontak ]    | ( DAFTARKAN USAHA )|
|   (Brand: White/Cyan) |            (Teks Slate Terang, Aktif: Sky Blue)             | (Electric Blue Pill)
+---------------------------------------------------------------------------------------------------------+

[MOBILE (Viewport < 992px) — Dark Card Drawer]
+---------------------------------------------------------------------+
| [🏪] Media UMKM                                  [ ≡ (HAMBURGER) ] |
+---------------------------------------------------------------------+
| (Dropdown Menu Panel Gelap Bersih)                                  |
|  • Beranda (Aktif: Sky Blue Accent)                                 |
|  • Direktori UMKM                                                   |
|  • Tentang Kami                                                     |
|  • Kontak                                                           |
|  ( DAFTARKAN USAHA - Full Width Electric Blue Pill Button )         |
+---------------------------------------------------------------------+
```

* **Latar Belakang:** Hitam/panel gelap `linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(11, 15, 25, 0.96))` dengan *backdrop-filter blur*, mengambang anggun di atas hero banner dengan sudut membulat 16px, garis tepi tipis halus `rgba(255, 255, 255, 0.12)`, dan elevasi `box-shadow: 0 14px 38px rgba(0, 0, 0, 0.35)`.
* **Brand Logo (Kiri):** Logo transparan resmi terkompresi (`logo.webp`, 34.07 KB, tanpa latar belakang putih) dipadukan dengan teks *"Media UMKM"* putih bersih tebal `#FFFFFF`.
* **Navigasi Halaman (Tengah):** Teks slate terang ramah dibaca `#CBD5E1`, dengan status hover/aktif beraksen biru langit cerah `#38BDF8`.
* **Tombol CTA (Kanan):** Tombol lonjong pill shape (`border-radius: 50px`) berwarna *Electric Royal Blue* (`#0066FF` ke `#0051CC`) dengan teks putih tebal dan bayangan glow biru.

### 4.2 Hero Section & Pencarian Terpadu (PRD Sec 4.2)
Mengadopsi tata letak terpusat (*centered layout*) di atas latar ilustrasi cat air tematik Nusantara (*watercolor archipelago, sawah terasering, & flora lokal* — `background-hero.webp`, terkompresi 62.88 KB) dengan lapisan gradasi lembut untuk keterbacaan optimal:

```
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|                   Dukung Usaha Tetangga, Belanja Langsung ke Warung Lokal                               |
|                                                                                                         |
|       Temukan etalase makanan sedap, warung sembako terdekat, hingga jasa terpercaya di sekitar Anda... |
|                                                                                                         |
|       +-----------------------------------------------------------------------------------------+       |
|       | [🔍 Cari warung, soto, sembako...]                             | [ Cari -> (Emerald Btn) ] |       |
|       +-----------------------------------------------------------------------------------------+       |
|                                                                                                         |
|                   120+                              0%                              100%                |
|             Warung Terdaftar                 Komisi Potongan                  Chat Penjual Asli         |
|         (Direct Text - Tanpa Bg)         (Direct Text - Tanpa Bg)         (Direct Text - Tanpa Bg)      |
+---------------------------------------------------------------------------------------------------------+
```

* **Headline Terpusat:** Judul tebal berukuran besar (`clamp(2.3rem, 5vw, 3.6rem)`) warna slate gelap `#0F172A`, tampil langsung dan tegas di bagian atas hero.
* **Subtitle Deskriptif:** Paragraf pengantar terpusat warna `#475569` dengan batas lebar maksimal 680px.
* **Bilah Pencarian Simpel (Floating Search Card):** Kontainer kartu putih dengan input pencarian dan tombol aksi hijau *forest emerald* (`#065F46`) tanpa dropdown filter wilayah.
* **3 Metrik Teks Langsung (Tanpa Background Putih):** Angka statistik besar (*120+*, *0%*, *100%*) berwarna hijau tua cerah dan label teks slate tanpa kotak/background kartu putih, menyatu elegan dengan kanvas hero.

### 4.3 Kartu UMKM Modern (PRD Sec 4.3 & 4.4)
- **Corner Radius:** 16px dengan garis tepi tipis halus (`border: 1px solid var(--border)`).
- **Aspek Rasio Foto:** `4:3` dengan *object-fit: cover*.
- **Badge Posisi:** Hijau emerald (`Baru`) atau kuning amber (`Promo`).
- **Aksi Kontak:** Tombol resmi WhatsApp (`--wa: #25D366`) dengan format pesan otomatis.

### 4.4 3 Kotak Target Audiens (PRD Sec 4.2)
- `01` — Pemilik usaha kecil & warung rumahan yang ingin etalase online instan.
- `02` — Pelanggan yang membutuhkan kepastian harga, jam buka, dan peta lokasi.
- `03` — Warga yang ingin mendukung ekonomi tetangga di sekitarnya.

### 4.5 Countdown Timer (PRD Sec 4.2)
- 4 unit kotak digital (*Hari*, *Jam*, *Menit*, *Detik*) dengan angka besar berwarna hijau mint (`font-weight: 800`) dan skrip *real-time countdown*.

---

## 📱 5. Breakpoints & Grid System (PRD Sec 6)

| Device Category | Viewport Width | Penyesuaian Layout |
| :--- | :--- | :--- |
| **Mobile Kecil** | `< 480px` | 1 Kolom kartu, touch target min. 44px, hero search full width. |
| **Mobile Standar** | `480px – 767px` | 1–2 Kolom kartu, horizontal chips wrapping. |
| **Tablet** | `768px – 991px` | 2 Kolom kartu UMKM, navbar collapse aktif. |
| **Desktop** | `≥ 992px` | 3 Kolom kartu UMKM, navbar 3-bagian desktop simetris. |
| **Wide Desktop** | `≥ 1200px` | Container maksimal terpusat 1140px/1320px dengan margin seimbang. |

---

## ♿ 6. Aksesibilitas & Standar Kualitas (WCAG 2.1)

- **Rasio Kontras Warna:** Teks putih (`#F8FAFC`) di atas latar panel (`#131B2E`) memiliki rasio kontras `11.8:1` (melebihi standar minimum WCAG AAA `7:1`).
- **Target Sentuh Ramah Ponsel:** Seluruh tombol navigasi, pill filter, dan link memiliki area sentuh minimal 44x44px.
- **Reduced Motion:** Mendukung `@media (prefers-reduced-motion: reduce)` untuk mematikan animasi bagi pengguna yang sensitif.

---

<div align="center">

**Media UMKM © 2026 — Desain & PRD Sepenuhnya Terintegrasi dan Tersinkronisasi.**  
*Lihat berkas spesifikasi produk: [PRD.md](file:///e:/Magang/boostrap/UMKM/PRD.md)*

</div>
