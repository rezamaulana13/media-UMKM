# Media UMKM — Website Wadah UMKM

Website statis (HTML + Bootstrap 5 + JavaScript biasa). Tanpa database, tanpa server.

## Cara membuka
Klik dua kali `index.html`. Perlu internet karena Bootstrap, ikon, dan font dimuat lewat CDN.

## Yang perlu kamu edit (hanya satu file)
Buka `assets/js/data.js`:

1. **SITE**: nama website, nomor WhatsApp kamu (format `628xxxxxxxxxx`), Instagram, email, nama pengelola.
2. **KATEGORI**: tambah atau ubah kategori. Ikon dari https://icons.getbootstrap.com
3. **UMKM**: satu blok `{ ... }` = satu usaha.

## Menambah UMKM baru (dari WhatsApp)
1. Simpan foto di `assets/img/umkm/` (mis. `seblak-1.jpg`, `seblak-2.jpg`).
2. Salin satu blok UMKM di `data.js`, beri tanda koma, lalu ubah isinya.
3. Isi `id` unik tanpa spasi (mis. `seblak-bu-ratna`). Halaman usaha: `seblak-bu-ratna.html`.
4. Isi `foto: ["assets/img/umkm/seblak-1.jpg", "assets/img/umkm/seblak-2.jpg"]`.
   Jika `foto: []`, tampil gambar placeholder berwarna.
5. `unggulan: true` untuk menampilkan di beranda. `badge`: "Baru", "Promo", atau "".

Tips foto: rasio 4:3, terang, ukuran di bawah 300 KB (kompres di squoosh.app).

## Tampilan
Tema gelap navy + cyan. Warna diatur di bagian `:root` pada `assets/css/style.css`.
Foto pengelola (opsional): simpan sebagai `assets/img/pengelola.jpg`.
Hitung mundur di beranda memakai `SITE.batasDaftar` di `data.js` (kosongkan untuk menyembunyikan).

## Hosting gratis
- Netlify Drop: seret folder ini ke https://app.netlify.com/drop
- GitHub Pages: unggah ke repo lalu aktifkan Pages.
- Atau unggah ke hosting biasa lewat cPanel (folder `public_html`).

## Struktur
```
index.html              Beranda
direktori.html          Daftar semua UMKM + cari + filter
seblak-bu-ratna.html    Halaman UMKM: Kedai Seblak Bu Ratna
kopi-janari.html        Halaman UMKM: Kopi Janari
mekar-batik.html        Halaman UMKM: Mekar Batik Priangan
rajut-neng-ayu.html     Halaman UMKM: Rajut Neng Ayu
laundry-kilat.html      Halaman UMKM: Laundry Kilat Cihampelas
jaya-roda.html          Halaman UMKM: Bengkel Sepeda Jaya Roda
daftar.html             Formulir daftar -> kirim ke WhatsApp
tentang.html            Tentang
kontak.html             Kontak
assets/css/style.css
assets/js/data.js       <- data kamu
assets/js/app.js        <- logika halaman
```
