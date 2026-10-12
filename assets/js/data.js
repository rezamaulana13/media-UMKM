/* =====================================================
   DATA WEBSITE — hanya file ini yang perlu kamu edit
   ===================================================== */

/* 1. Pengaturan umum (ganti sesuai punyamu) */
const SITE = {
  nama: "Media UMKM",
  slogan: "Portal etalase digital bersama warung, toko, dan jasa lokal se-Indonesia",
  kota: "Indonesia",
  wa: "6281234567890",          // nomor WA pengelola
  telepon: "0341-554321",       // hotline layanan nasional
  instagram: "mediaumkm",       // tanpa @
  pengelola: "Pengelola Media UMKM",
  alamat: "Indonesia — Layanan Terbuka untuk Seluruh Pelaku UMKM Nusantara",
  jamRespon: "Senin–Sabtu, 08.00–20.00 WIB",
  batasDaftar: "2026-12-31T23:59:00"   // batas pendaftaran gelombang ini
};

/* 2. Daftar kategori (id dipakai pada data UMKM di bawah) */
const KATEGORI = [
  { id: "kuliner",    nama: "Kuliner",               ikon: "bi-cup-hot" },
  { id: "fashion",    nama: "Fashion & Kerajinan",   ikon: "bi-bag-heart" },
  { id: "jasa",       nama: "Jasa",                  ikon: "bi-tools" },
  { id: "kebutuhan",  nama: "Kebutuhan Harian",      ikon: "bi-basket" },
  { id: "kecantikan", nama: "Kecantikan & Kesehatan",ikon: "bi-flower1" }
];

/* 3. Daftar UMKM — satu blok { ... } = satu usaha.
   Tambah usaha baru: salin satu blok, beri koma, lalu ubah isinya.
   foto : isi path gambar, mis. ["assets/img/umkm/seblak-1.jpg"].
          Jika dikosongkan [], otomatis tampil gambar placeholder berwarna.
   maps : kosongkan untuk memakai alamat otomatis, atau isi link embed Google Maps.
   badge: "Baru", "Promo", atau "" (kosong).
   unggulan: true = tampil di beranda. */
const UMKM = [
  {
    id: "seblak-bu-ratna",
    nama: "Kedai Seblak Bu Ratna",
    kategori: "kuliner",
    tagline: "Seblak kuah pedas dengan topping yang bisa dipilih sendiri.",
    deskripsi: "Berjualan sejak 2018. Kuah kencur dibuat segar setiap hari, level pedas bisa diatur dari 0 sampai 5. Cocok untuk makan sendiri, nongkrong, atau pesan untuk acara kecil.",
    emoji: "🍜", warna: "#B8392F",
    foto: [
      "assets/img/umkm/umkm-seblak-bu-ratna.webp"
    ],
    area: "Antapani",
    alamat: "Jl. Purwakarta No. 12, Antapani, Bandung",
    maps: "",
    jam: "Setiap hari, 10.00–22.00",
    wa: "6281234560001",
    instagram: "seblakburatna",
    badge: "Baru",
    unggulan: true,
    produk: [
      { nama: "Seblak Original Komplit", harga: 15000, ket: "Kerupuk, makaroni, telur, sawi, sosis" },
      { nama: "Seblak Ceker Pedas Nampol", harga: 20000, ket: "Ceker empuk 4 pcs, siomay kering, telur" },
      { nama: "Seblak Seafood Spesial", harga: 25000, ket: "Udang, cumi, crabstick, dumpling keju, telur" },
      { nama: "Seblak Bakso & Sosis Lava", harga: 18000, ket: "Bakso sapi, sosis jumbo, kuah rempah pedas" },
      { nama: "Seblak Mie Kuah Kencur", harga: 16000, ket: "Mie kuning, kwetiau, telur, batagor kering" },
      { nama: "Ekstra Topping Dumpling Keju (2 pcs)", harga: 6000, ket: "Olahan ikan isi keju lumer" },
      { nama: "Ekstra Topping Jamur Enoki", harga: 5000, ket: "Jamur enoki segar renyah" },
      { nama: "Es Teh Manis Jumbo", harga: 5000, ket: "Gula murni, es segar dingin" },
      { nama: "Es Jeruk Peras Segar", harga: 7000, ket: "Jeruk peras asli tanpa pemanis buatan" }
    ]
  },
  {
    id: "kopi-janari",
    nama: "Kopi Janari",
    kategori: "kuliner",
    tagline: "Kopi susu gula aren dan biji kopi lokal Jawa Barat.",
    deskripsi: "Kedai kopi kecil dengan biji pilihan dari petani Pangalengan dan Gunung Puntang. Tersedia seduh manual, kopi susu, dan biji kopi kiloan untuk dibawa pulang.",
    emoji: "☕", warna: "#6B4A2F",
    foto: [
      "assets/img/umkm/umkm-kopi-janari.webp"
    ],
    area: "Dago",
    alamat: "Jl. Dago Asri No. 8, Coblong, Bandung",
    maps: "",
    jam: "Senin–Sabtu, 07.00–21.00",
    wa: "6281234560002",
    instagram: "kopijanari",
    badge: "Promo",
    unggulan: true,
    produk: [
      { nama: "Kopi Susu Gula Aren Janari", harga: 18000, ket: "Espresso house blend, susu segar, aren murni (250 ml)" },
      { nama: "Kopi Susu Creamy Regal", harga: 22000, ket: "Kopi susu dengan crumble biskuit Marie Regal" },
      { nama: "Americano / Long Black Dingin", harga: 16000, ket: "Double shot espresso biji Pangalengan" },
      { nama: "V60 Single Origin Manual Brew", harga: 25000, ket: "Pilihan biji Puntang / Ciwidey / Kamojang" },
      { nama: "Matcha Latte Susu Segar", harga: 20000, ket: "Pure matcha Jepang, fresh milk, gula aren" },
      { nama: "Roti Bakar Cokelat Keju Gandum", harga: 18000, ket: "Roti gandum, meses lumer, parutan keju melimpah" },
      { nama: "Biji Kopi Sangrai Pangalengan (200 gr)", harga: 65000, ket: "Medium roast, whole bean atau bubuk" },
      { nama: "Cold Brew Botol 500 ml", harga: 35000, ket: "Ekstraksi dingin 16 jam, tahan 7 hari di kulkas" }
    ]
  },
  {
    id: "mekar-batik",
    nama: "Mekar Batik Priangan",
    kategori: "fashion",
    tagline: "Kemeja dan kain batik motif khas Priangan, dibuat tangan.",
    deskripsi: "Dikerjakan oleh pengrajin lokal dengan pewarna yang aman. Menerima pesanan seragam keluarga, kantor, dan sekolah dengan minimal 10 potong.",
    emoji: "👘", warna: "#2E4C8F",
    foto: [
      "assets/img/umkm/umkm-mekar-batik.webp"
    ],
    area: "Cicendo",
    alamat: "Jl. Pasirkaliki No. 45, Cicendo, Bandung",
    maps: "",
    jam: "Senin–Sabtu, 09.00–17.00",
    wa: "6281234560003",
    instagram: "mekarbatik",
    badge: "",
    unggulan: true,
    produk: [
      { nama: "Kemeja Batik Pria Lengan Panjang Priangan", harga: 185000, ket: "Katun primisima halus, lapis furing trikot (S–XXL)" },
      { nama: "Kemeja Batik Pria Lengan Pendek", harga: 145000, ket: "Katun sanforized adem, motif daun teh Priangan" },
      { nama: "Blouse Batik Wanita Modern", harga: 165000, ket: "Kerah shanghai, resleting jepang, motif garutan" },
      { nama: "Kain Panjang Batik Tulis Pewarna Alam", harga: 350000, ket: "Ukuran 2.2m x 1.15m, bahan sutra super halus" },
      { nama: "Kain Batik Cap Halus 2 Meter", harga: 120000, ket: "Katun mori primisima, motif lereng Priangan" },
      { nama: "Selendang & Scarf Batik Sutra", harga: 85000, ket: "Sutra organza motif floral etnik priangan" },
      { nama: "Set Pouch Dompet Batik Handmade", harga: 35000, ket: "Isi 2 pcs: pouch kartu & pouch kosmetik" },
      { nama: "Paket Pesanan Seragam Kantor / Keluarga", harga: "Mulai Rp110.000/pcs", ket: "Minimal order 10 pcs, custom ukuran & motif" }
    ]
  },
  {
    id: "rajut-neng-ayu",
    nama: "Rajut Neng Ayu",
    kategori: "fashion",
    tagline: "Tas, topi, dan hadiah rajut buatan tangan.",
    deskripsi: "Cocok untuk hadiah ulang tahun, hampers, atau suvenir acara. Warna dan ukuran bisa dipesan khusus, pengerjaan 3–7 hari.",
    emoji: "🧶", warna: "#B03A6F",
    foto: [
      "assets/img/umkm/umkm-rajut-neng-ayu.webp"
    ],
    area: "Buah Batu",
    alamat: "Jl. Kiaracondong No. 21, Buah Batu, Bandung",
    maps: "",
    jam: "Setiap hari, 09.00–20.00 (pesan via WA)",
    wa: "6281234560004",
    instagram: "rajutnengayu",
    badge: "Baru",
    unggulan: false,
    produk: [
      { nama: "Tas Rajut Tote Bag Bahu", harga: 95000, ket: "Benang nilon premium, furing tebal + resleting kuat" },
      { nama: "Tas Selempang Mini Sling Rajut", harga: 65000, ket: "Muat HP & dompet, tali rajut rantai kokoh" },
      { nama: "Dompet Koin & Kartu Rajut Etnik", harga: 30000, ket: "Penutup kancing magnet, rajutan rapi motif bunga" },
      { nama: "Topi Baret Rajut Bayi & Anak", harga: 45000, ket: "Benang wol lembut hypoallergenic, aneka warna pastel" },
      { nama: "Gantungan Kunci Boneka Amigurumi", harga: 25000, ket: "Karakter hewan lucu buatan tangan, bisa request nama" },
      { nama: "Konektor & Scrunchie Rajut", harga: 15000, ket: "Bahan katun stretch elastis, nyaman di rambut" },
      { nama: "Tatakan Gelas Rajut Macrame (Set 4 pcs)", harga: 40000, ket: "Motif sunflower bohemian, benang katun tebal" },
      { nama: "Paket Hampers Souvenir Rajut Spesial", harga: 125000, ket: "Box mika pita cantik + tote bag + gantungan kunci" }
    ]
  },
  {
    id: "laundry-kilat",
    nama: "Laundry Kilat Cihampelas",
    kategori: "jasa",
    tagline: "Cuci kiloan, antar jemput gratis dalam radius 3 km.",
    deskripsi: "Selesai 24 jam untuk layanan ekspres. Tersedia cuci kiloan, satuan, selimut, dan sepatu. Pakaian dipisah per pelanggan dan disetrika rapi.",
    emoji: "🧺", warna: "#1F7A8C",
    foto: [
      "assets/img/umkm/umkm-laundry-kilat.webp"
    ],
    area: "Cihampelas",
    alamat: "Jl. Cihampelas No. 150, Bandung",
    maps: "",
    jam: "Setiap hari, 07.00–20.00",
    wa: "6281234560005",
    instagram: "",
    badge: "",
    unggulan: true,
    produk: [
      { nama: "Cuci Kering Setrika Kiloan Reguler", harga: 7000, ket: "Per kg, selesai 2 hari, parfum wangi higienis tahan lama" },
      { nama: "Cuci Kering Setrika Express 24 Jam", harga: 10000, ket: "Per kg, selesai besok, packing plastik tersegel rapi" },
      { nama: "Cuci Kering Super Kilat 6 Jam", harga: 15000, ket: "Per kg, layanan darurat hari yang sama siap pakai" },
      { nama: "Cuci Bedcover Jumbo / Sprei Besar", harga: 25000, ket: "Per potong, proses anti tungau & deterjen antibakteri" },
      { nama: "Cuci & Deep Cleaning Sepatu Sneakers", harga: 35000, ket: "Pembersihan midsole, upper, & insole wangi segar" },
      { nama: "Cuci Jaket Tebal / Parka / Jas Formal", harga: 20000, ket: "Per potong, perawatan serat kain dry clean khusus" },
      { nama: "Cuci Boneka Ukuran Sedang", harga: 18000, ket: "Per boneka, sterilisasi uap aman untuk anak" },
      { nama: "Cuci Karpet Rumah / Sajadah Masjid", harga: 15000, ket: "Per m², pengeringan mesin vakum anti apek" }
    ]
  },
  {
    id: "jaya-roda",
    nama: "Bengkel Sepeda Jaya Roda",
    kategori: "jasa",
    tagline: "Servis sepeda lipat, gunung, dan sepeda harian.",
    deskripsi: "Dikerjakan teknisi berpengalaman lebih dari 10 tahun. Tersedia suku cadang dasar, tambal ban, dan servis total dengan garansi 7 hari.",
    emoji: "🚲", warna: "#3F6B35",
    foto: [
      "assets/img/umkm/umkm-jaya-roda.webp"
    ],
    area: "Lengkong",
    alamat: "Jl. Burangrang No. 33, Lengkong, Bandung",
    maps: "",
    jam: "Senin–Sabtu, 08.00–17.00",
    wa: "6281234560006",
    instagram: "jayaroda.bdg",
    badge: "",
    unggulan: false,
    produk: [
      { nama: "Tambal Ban & Isi Angin Nitrogen", harga: 10000, ket: "Ban dalam sepeda lipat, gunung (MTB), fixie, & roadbike" },
      { nama: "Ganti Ban Luar / Ban Dalam", harga: 35000, ket: "Tersedia ukuran 16, 20, 26, 27.5, & 29 inch merk ternama" },
      { nama: "Servis Ringan / Tune-up Setelan", harga: 50000, ket: "Setting rem hidrolik/mekanik, RD, FD, & pelumasan rantai" },
      { nama: "Servis Berat & Overhaul Total", harga: 150000, ket: "Bongkar hub, bottom bracket, headset, degreasing, grease ulang" },
      { nama: "Cuci Sepeda Detailing Kilap", harga: 40000, ket: "Cuci drivetrain bersih dari kerak oli, wax frame mengkilap" },
      { nama: "Stel Velg & Jari-jari Roda", harga: 30000, ket: "Presisi putaran roda depan/belakang anti oleng" },
      { nama: "Ganti Rantai & Sprocket Cassette", harga: 45000, ket: "Pemasangan rantai 7-12 speed presisi" },
      { nama: "Pemasangan Aksesoris & Rak Pannier", harga: 20000, ket: "Holder botol, lampu, spakbor, boncengan anak" }
    ]
  },
  {
    id: "toko-berkah",
    nama: "Toko Kelontong Berkah Warga",
    kategori: "kebutuhan",
    tagline: "Sembako murah, beras kualitas super, dan kebutuhan dapur lengkap.",
    deskripsi: "Menyediakan sembako komplit untuk warga sekitar dengan harga bersaing. Siap antar gratis untuk pembelian minimal Rp50.000 dalam komplek.",
    emoji: "🛒", warna: "#10B981",
    foto: [
      "assets/img/umkm/umkm-toko-kelontong-berkah.webp"
    ],
    area: "Antapani",
    alamat: "Jl. Antapani No. 88, Bandung",
    maps: "",
    jam: "Setiap hari, 06.00–21.00",
    wa: "6281234560007",
    instagram: "berkahwarga.store",
    badge: "Laris",
    unggulan: true,
    produk: [
      { nama: "Beras Pandan Wangi Super (5 kg)", harga: 72000, ket: "Beras pulen koki pilihan, tanpa pemutih & pengawet" },
      { nama: "Beras Setra Ramos Cap Bunga (10 kg)", harga: 140000, ket: "Karung 10 kg, pulen harum untuk stok keluarga" },
      { nama: "Minyak Goreng Tropical / Bimoli (2 Liter)", harga: 34000, ket: "Minyak sawit jernih 2x penyaringan kemasan pouch" },
      { nama: "Gula Pasir Gulaku Tebu Murni (1 kg)", harga: 17500, ket: "Gula kristal putih bersih premium higienis" },
      { nama: "Telur Ayam Negeri Segar (1 kg)", harga: 28000, ket: "Telur segar pilihan dari peternak, isi 16-17 butir" },
      { nama: "Tepung Terigu Segitiga Biru (1 kg)", harga: 12500, ket: "Tepung terigu serbaguna untuk gorengan & kue" },
      { nama: "Mie Instan Indomie Goreng (Karton isi 40 pcs)", harga: 115000, ket: "Kemasan dus karton hemat atau eceran" },
      { nama: "Kopi Kapal Api Special Mix (1 Renceng)", harga: 15000, ket: "Isi 10 sachet kopi plus gula harum mantap" },
      { nama: "Susu Kental Manis Frisian Flag Gold (370 gr)", harga: 16000, ket: "Susu kental manis kaleng lezat bergizi" },
      { nama: "Sabun Cuci Piring Sunlight Jeruk Nipis (700 ml)", harga: 14000, ket: "Refill pouch pembersih lemak piring ampuh" },
      { nama: "Gas Elpiji 3 kg Melon (Isi Ulang)", harga: 22000, ket: "Tukar tabung resmi Pertamina segel aman" }
    ]
  },
  {
    id: "salon-warga",
    nama: "Salon & Barbershop Warga",
    kategori: "kecantikan",
    tagline: "Potong rambut pria & wanita modern, harga terjangkau.",
    deskripsi: "Tempat potong rambut nyaman dengan kapster profesional. Melayani potong rambut pria, pangkas anak, creambath, serta pewarnaan rambut.",
    emoji: "💈", warna: "#EF4444",
    foto: [
      "assets/img/umkm/umkm-salon-warga.webp"
    ],
    area: "Coblong",
    alamat: "Jl. Dipatiukur No. 42, Bandung",
    maps: "",
    jam: "Selasa–Minggu, 09.00–21.00",
    wa: "6281234560008",
    instagram: "barberwarga",
    badge: "Popular",
    unggulan: false,
    produk: [
      { nama: "Potong Rambut Pria Modern + Cuci & Tonic", harga: 35000, ket: "Model fade, undercut, mullet, pompadour termasuk vitamin" },
      { nama: "Cukur Rambut Anak & Balita", harga: 25000, ket: "Ramah anak, potongan rapi aman, plus bedak bayi wangi" },
      { nama: "Potong Rambut Wanita + Blow Styling", harga: 50000, ket: "Layer, bob cut, wolf cut disesuaikan bentuk wajah" },
      { nama: "Creambath Tradisional Lidah Buaya / Alpukat", harga: 60000, ket: "Pijat relaksasi kepala, leher, & pundak 45 menit" },
      { nama: "Hair Spa Matrix / L'Oreal Treatment", harga: 85000, ket: "Perawatan intensif rambut rusak/rontok + masker steam" },
      { nama: "Pewarnaan Rambut / Hair Coloring", harga: 120000, ket: "Cat rambut fashion trend / tutup uban natural awet" },
      { nama: "Smoothing & Rebonding Keratin", harga: 200000, ket: "Pelurusan rambut lembut natural berkilau tahan 6 bulan" },
      { nama: "Cukur Jenggot, Kumis & Hot Towel Shave", harga: 25000, ket: "Pencukuran bersih higienis dengan handuk hangat aromaterapi" }
    ]
  },
  {
    id: "sambal-nusantara",
    nama: "Dapur Sambal Nusantara",
    kategori: "kuliner",
    tagline: "Nasi bebek & ayam bakar resep bumbu rempah khas nusantara.",
    deskripsi: "Ayam dan bebek goreng/bakar dengan 5 varian sambal ulek uleg segar. Dibuat tanpa bahan pengawet, cocok untuk pesanan nasi kotak acara.",
    emoji: "🍗", warna: "#F59E0B",
    foto: [
      "assets/img/umkm/umkm-sambal-nusantara.webp"
    ],
    area: "Sukajadi",
    alamat: "Jl. Sukajadi No. 102, Bandung",
    maps: "",
    jam: "Setiap hari, 10.00–22.00",
    wa: "6281234560009",
    instagram: "dapursambal.bdg",
    badge: "Favorit",
    unggulan: true,
    produk: [
      { nama: "Paket Nasi Bebek Goreng Sambal Ijo", harga: 32000, ket: "Nasi pulen, bebek rempah empuk gurih, tahu, tempe, lalap" },
      { nama: "Paket Nasi Bebek Bakar Madu Gurih", harga: 34000, ket: "Bebek bakar bumbu madu karamel, sambal korek pedas" },
      { nama: "Paket Nasi Ayam Bakar Taliwang", harga: 26000, ket: "Ayam bakar bumbu pedas khas Lombok, plecing kangkung" },
      { nama: "Paket Nasi Ayam Goreng Serundeng Lengkuas", harga: 25000, ket: "Ayam goreng tabur renyah lengkuas wangi, sambal terasi" },
      { nama: "Nasi Liwet Panci Kastrol Komplit (2 Porsi)", harga: 45000, ket: "Nasi liwet teri medan, cumi asin cabe ijo, telur balado" },
      { nama: "Sambal Botol Ulek Segar (150 gr)", harga: 25000, ket: "Pilihan: Sambal Bawang, Sambal Ijo Teri, atau Sambal Cumi Asin" },
      { nama: "Tahu & Tempe Mendoan Hangat (Isi 5 pcs)", harga: 12000, ket: "Mendoan renyah gurih + cocolan kecap rawit pedas" },
      { nama: "Es Jeruk Peras Segar Gula Asli", harga: 7000, ket: "Jeruk peras murni segar pelepas dahaga" },
      { nama: "Es Cendol Nangka Kelapa Muda", harga: 10000, ket: "Cendol beras pandan, santan gurih, gula aren cair" }
    ]
  },
  {
    id: "service-elektronik",
    nama: "Service Elektronik Bersaudara",
    kategori: "jasa",
    tagline: "Perbaikan TV, Mesin Cuci, Kulkas & Kipas Angin panggilan.",
    deskripsi: "Teknisi berpengalaman melayani perbaikan peralatan elektronik rumah tangga. Bisa dipanggil langsung ke rumah dengan garansi servis 1 bulan.",
    emoji: "🔌", warna: "#38BDF8",
    foto: [
      "assets/img/umkm/umkm-services-elektronik.webp"
    ],
    area: "Batununggal",
    alamat: "Jl. Soekarno Hatta No. 210, Bandung",
    maps: "",
    jam: "Senin–Sabtu, 08.00–18.00",
    wa: "6281234560010",
    instagram: "",
    badge: "Terpercaya",
    unggulan: false,
    produk: [
      { nama: "Servis Panggilan & Pengecekan Kerusakan", harga: 50000, ket: "Biaya cek langsung ke rumah, free konsultasi estimasi biaya" },
      { nama: "Servis Mesin Cuci 1 & 2 Tabung", harga: 150000, ket: "Modul error, dinamo mati/lemah, air mampet, garansi 30 hari" },
      { nama: "Servis Kulkas & Freezer Tidak Dingin", harga: 165000, ket: "Isi freon R134a/R600, perbaikan kompresor, ganti thermostat" },
      { nama: "Perbaikan TV LED / Android TV", harga: 175000, ket: "Layar gelap suara ada/backlight mati, mati total, ganti mainboard" },
      { nama: "Cuci & Servis AC Split (1/2 - 1 PK)", harga: 75000, ket: "Cuci evaporator, filter indoor, outdoor unit, periksa tekanan" },
      { nama: "Tambah / Isi Ulang Freon AC R32 / R410", harga: 120000, ket: "AC kembali dingin sejuk maksimal" },
      { nama: "Servis Kipas Angin & Exhaust Fan", harga: 45000, ket: "Dinamo macet, ganti bearing/bushing, ganti kapasitor" },
      { nama: "Perbaikan Rice Cooker, Dispenser & Blender", harga: 40000, ket: "Mati total, tidak bisa memanaskan, bocor, ganti elemen pemanas" }
    ]
  }
];
