# Panduan Standar SEO, AEO & GEO — Media UMKM (Edisi 2026–2027)

Dokumen ini merupakan panduan resmi dan patokan baku (*benchmark*) optimasi mesin pencari tradisional (**SEO**), mesin penjawab kecerdasan buatan (**AEO / Answer Engine Optimization**), serta penargetan geografis lokal (**GEO / Generative Engine Optimization**) untuk seluruh halaman website **Media UMKM**.

---

## 1. Aturan Baku Jumlah Kata & Batasan Karakter

| Elemen Metadata | Batas Karakter Optimal | Batas Kata Maksimal | Standar & Alasan Teknis |
| :--- | :--- | :--- | :--- |
| **Title Tag** | **50 – 60 Karakter** | **7 – 10 Kata** | Lebar kontainer Google SERP desktop dan mobile adalah ~600px. Jika melebihi 60 karakter, judul akan terpotong elipsis (`...`). Format baku: `[Kata Kunci Utama] — [Value Proposition] \| [Brand]`. |
| **Meta Description** | **140 – 160 Karakter** | **20 – 25 Kata** | Di atas 160 karakter akan dipotong mesin pencari; di bawah 120 karakter kurang kaya konteks bagi AI Overviews. Wajib memuat nilai unik (0% komisi, chat WhatsApp langsung) dan ajakan bertindak (CTA). |
| **Heading H1** | **30 – 70 Karakter** | **5 – 12 Kata** | Wajib hanya **1 tag `<h1>` per halaman**. Harus memuat kata kunci primer halaman tersebut. |
| **URL Slug** | **3 – 5 Kata** | **Maks. 50 Karakter** | Menggunakan huruf kecil, dipisahkan tanda strip (`-`), hindari stop-words yang tidak perlu (contoh: `/direktori.html`, `/daftar.html`). |

---

## 2. Riset Kata Kunci (Keywords) Berbobot Tertinggi — Skala Nasional

### A. Kata Kunci Primer (High Search Volume & Brand Awareness Nasional)
- `Portal UMKM Indonesia`
- `Direktori UMKM Nasional`
- `Katalog Produk UMKM Nusantara`
- `Platform UMKM Digital Indonesia`
- `Pemberdayaan Usaha Mikro Indonesia`
- `Etalase Warung & Toko Online`

### B. Kata Kunci Konversi & Nilai Tambah (High Intent & Zero Commission)
- `Beli Langsung ke Penjual Tanpa Komisi`
- `Pesan Produk UMKM via WhatsApp`
- `Daftar UMKM Gratis Seluruh Indonesia`
- `Promosi Warung & Usaha Rumahan Gratis`
- `Jual Beli Produk Lokal Nusantara`

### C. Kata Kunci Skalabilitas Wilayah (Seluruh Penjuru Indonesia)
- `Lapak UMKM Seluruh Indonesia`
- `Katalog Kuliner & Produk Warga Nusantara`
- `Jaringan UMKM Indonesia Bebas Biaya`
- `Pusat Dagang Usaha Mikro Nusantara`

---

## 3. Ketentuan AEO (Answer Engine Optimization untuk AI Search)

Mesin pencari berbasis AI modern (**ChatGPT Search, Perplexity AI, Google Gemini / AI Overviews, Claude, Microsoft Copilot**) mengekstrak entitas langsung dari data terstruktur:

1. **Skema `FAQPage` (JSON-LD)**:
   - Wajib menyajikan pertanyaan dan jawaban faktual yang ringkas, lugas, dan to-the-point seputar pendaftaran dari berbagai daerah, transaksi langsung via WhatsApp, dan kepastian bebas biaya komisi (0%).
   - Jawaban langsung (*direct answer*) harus berada dalam rentang 40–60 kata agar mudah dikutip sebagai *featured snippet* atau AI summary.
2. **Hierarki Jawaban Semantik**:
   - Gunakan format Q&A yang jelas pada halaman konten.
   - Cantumkan data kontak WhatsApp dan jangkauan nasional yang konsisten di seluruh kode HTML.

---

## 4. Ketentuan GEO & Kebijakan Alamat (Jangkauan Nasional Tanpa Batas Wilayah)

Website **Media UMKM** diposisikan sebagai **portal direktori nasional** yang merangkul seluruh pedagang dan pelaku usaha mikro dari Sabang sampai Merauke tanpa batasan kota atau wilayah tertentu.

### A. Kebijakan Alamat (Anti-Spesifik)
- **Dilarang mencantumkan alamat jalan dan nomor spesifik (Jl... No...)** yang memberi kesan platform ini hanya melayani satu kelurahan/kecamatan tertentu.
- Footer dan profil platform menggunakan identitas nasional:
  ```html
  <div class="footer-address">
    Portal Direktori &amp; Etalase Digital UMKM<br>
    Terbuka untuk Pelaku Usaha di Seluruh Indonesia
  </div>
  ```

### B. Tag Meta GEO Nasional
Setiap halaman website menyertakan koordinat pusat geografis Indonesia dan kode negara ISO 3166-1:

```html
<!-- Geo-Targeting Metadata (GEO) -->
<meta name="geo.region" content="ID">
<meta name="geo.placename" content="Indonesia">
<meta name="geo.position" content="-0.789275;113.921327">
<meta name="ICBM" content="-0.789275, 113.921327">
```

### C. Skema LocalBusiness / Organization Skala Nasional
Dalam skema JSON-LD:
- `address`: `{"@type": "PostalAddress", "addressCountry": "ID"}`
- `areaServed`: `{"@type": "Country", "name": "Indonesia"}`
- Menghilangkan kolom `streetAddress` dan `postalCode` lokal agar relevan di seluruh Indonesia.

---

## 5. Kebijakan Kontak (Tanpa Email)

Berdasarkan keputusan operasional:
- **Dilarang menampilkan email** (`mailto:`, `halo@...`, `admin@...`) baik di footer, profil produk, maupun formulir kontak/pendaftaran.
- Seluruh konfirmasi transaksi dan interaksi pengguna **100% dialihkan ke WhatsApp resmi** dan **Hotline Telepon Pengelola**:
  - **WhatsApp Pengelola:** `0812-3456-7890` (`https://wa.me/6281234567890`)
  - **Telepon Kantor:** `(0341) 554321` (`tel:0341554321`)
  - **Jam Layanan:** Senin – Sabtu, 08.00 – 20.00 WIB

---

## 6. Daftar Baku Title & Meta Description Per Halaman

### 1. Beranda (`index.html`)
- **Title (60 Karakter / 9 Kata):**
  ```html
  <title>Media UMKM — Direktori &amp; Etalase Warung Lokal Terpercaya</title>
  ```
- **Meta Description (145 Karakter / 20 Kata):**
  ```html
  <meta name="description" content="Jelajahi direktori UMKM, aneka kuliner lokal, toko sembako, dan jasa warga terdekat. Hubungi penjual langsung via WhatsApp tanpa potongan komisi!">
  ```
- **Schema JSON-LD:** `@graph` berisi `WebSite` (SearchAction), `LocalBusiness`, dan `FAQPage`.

### 2. Direktori (`direktori.html`)
- **Title (58 Karakter / 10 Kata):**
  ```html
  <title>Direktori UMKM &amp; Katalog Toko Warga Lokal | Media UMKM</title>
  ```
- **Meta Description (150 Karakter / 21 Kata):**
  ```html
  <meta name="description" content="Cari dan temukan ribuan produk UMKM pilihan: kuliner sedap, fashion, jasa perbaikan, hingga sembako terdekat. Chat langsung pemilik toko via WhatsApp.">
  ```
- **Schema JSON-LD:** `CollectionPage` dan `BreadcrumbList`.

### 3. Tentang Kami (`tentang.html`)
- **Title (54 Karakter / 9 Kata):**
  ```html
  <title>Tentang Kami — Gerakan Digitalisasi Warga | Media UMKM</title>
  ```
- **Meta Description (144 Karakter / 20 Kata):**
  ```html
  <meta name="description" content="Mengenal Media UMKM: inisiatif digitalisasi dan promosi gratis untuk memajukan warung rumahan dan pelaku usaha mikro lokal di seluruh Indonesia.">
  ```
- **Schema JSON-LD:** `AboutPage` dan `BreadcrumbList`.

### 4. Galeri Etalase (`galeri.html`)
- **Title (54 Karakter / 9 Kata):**
  ```html
  <title>Galeri Etalase Produk Unggulan UMKM Lokal | Media UMKM</title>
  ```
- **Meta Description (147 Karakter / 21 Kata):**
  ```html
  <meta name="description" content="Lihat visual etalase produk unggulan dari warung dan perajin lokal binaan Media UMKM. Kualitas terjamin, harga jujur, langsung dari tangan pertama.">
  ```
- **Schema JSON-LD:** `ImageGallery` dan `BreadcrumbList`.

### 5. Blog & Edukasi (`blog.html`)
- **Title (61 Karakter / 10 Kata):**
  ```html
  <title>Blog &amp; Tips Sukses Mengembangkan Bisnis UMKM | Media UMKM</title>
  ```
- **Meta Description (144 Karakter / 20 Kata):**
  ```html
  <meta name="description" content="Panduan praktis bisnis UMKM: strategi jualan WhatsApp, cara daftar Google Maps, pembukuan keuangan toko, hingga teknik foto produk murah meriah.">
  ```
- **Schema JSON-LD:** `Blog` dan `BreadcrumbList`.

### 6. Hubungi Kami (`kontak.html`)
- **Title (57 Karakter / 9 Kata):**
  ```html
  <title>Hubungi Kami &amp; Layanan Bantuan Pengelola | Media UMKM</title>
  ```
- **Meta Description (147 Karakter / 19 Kata):**
  ```html
  <meta name="description" content="Layanan pengelola Media UMKM siaga membantu pertanyaan, konsultasi pendaftaran toko, dan kemitraan. Hubungi kami langsung via WhatsApp dan telepon.">
  ```
- **Schema JSON-LD:** `ContactPage` dan `BreadcrumbList`.

### 7. Pendaftaran Mitra (`daftar.html`)
- **Title (53 Karakter / 9 Kata):**
  ```html
  <title>Daftarkan Usaha Anda Gratis Tanpa Komisi | Media UMKM</title>
  ```
- **Meta Description (150 Karakter / 22 Kata):**
  ```html
  <meta name="description" content="Gabung menjadi mitra Media UMKM secara gratis! Tampilkan produk dan warung Anda di etalase digital warga. Langsung terhubung ke chat WhatsApp pembeli.">
  ```
- **Schema JSON-LD:** `WebPage` dan `BreadcrumbList`.

---

## 7. Cetak Biru (Template) untuk Halaman Baru Mendatang

### A. Template Header untuk Artikel Blog Baru (`blog/[slug].html`):
```html
<title>[Judul Artikel Praktis 5-8 Kata] | Media UMKM</title>
<meta name="description" content="[Ringkasan isi artikel 20-24 kata yang menjawab masalah pembaca dan mendorong klik].">
<meta name="keywords" content="[keyword primer], [keyword sekunder], tips umkm, bisnis lokal">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="https://mediaumkm.web.id/blog/[slug].html">

<!-- Geo Metadata -->
<meta name="geo.region" content="ID">
<meta name="geo.placename" content="Indonesia">
<meta name="geo.position" content="-0.789275;113.921327">
<meta name="ICBM" content="-0.789275, 113.921327">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:url" content="https://mediaumkm.web.id/blog/[slug].html">
<meta property="og:title" content="[Judul Artikel] | Media UMKM">
<meta property="og:description" content="[Ringkasan isi artikel 20-24 kata].">
<meta property="og:image" content="https://mediaumkm.web.id/assets/img/background-hero.webp">

<!-- Schema JSON-LD BlogPosting -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Judul Artikel]",
  "description": "[Ringkasan isi artikel]",
  "author": {
    "@type": "Organization",
    "name": "Media UMKM"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Media UMKM",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mediaumkm.web.id/assets/img/logo.webp"
    }
  },
  "inLanguage": "id-ID"
}
</script>
```

### B. Template Header untuk Halaman Detail Toko Baru (`Direktori/[id-umkm].html`):
```html
<title>[Nama Toko] — [Kategori] di [Area/Kota] | Media UMKM</title>
<meta name="description" content="Pesan [produk unggulan] dari [Nama Toko] di [Area/Kota]. Hubungi langsung via WhatsApp tanpa komisi perantara di etalase Media UMKM.">
<meta name="keywords" content="[nama toko], [kategori toko], kuliner [area], umkm [kota]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://mediaumkm.web.id/Direktori/[id-umkm].html">

<!-- Geo Metadata -->
<meta name="geo.region" content="ID">
<meta name="geo.placename" content="Indonesia">
<meta name="geo.position" content="-0.789275;113.921327">
<meta name="ICBM" content="-0.789275, 113.921327">

<!-- Schema JSON-LD LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Nama Toko]",
  "description": "[Deskripsi singkat produk/jasa toko]",
  "telephone": "+62-[Nomor-WA-Toko]",
  "priceRange": "Rp",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  }
  }
}
</script>
```
