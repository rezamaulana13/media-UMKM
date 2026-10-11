/* =====================================================
   Skrip utama — membaca data.js dan menampilkan halaman
   ===================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const waLink = (no, pesan) => `https://wa.me/${String(no).replace(/\D/g, '')}?text=${encodeURIComponent(pesan || '')}`;
const rupiah = n => typeof n === 'number' ? 'Rp' + n.toLocaleString('id-ID') : (n || 'Tanya via WA');
const kat = id => KATEGORI.find(k => k.id === id) || { nama: id, ikon: 'bi-shop' };

/* Gambar placeholder (SVG) bila UMKM belum punya foto */
function placeholder(u, i = 0) {
  const kiri = i % 2 === 0;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
    <rect width='800' height='600' fill='${u.warna || '#0E5A4B'}'/>
    <circle cx='${kiri ? 150 : 650}' cy='${kiri ? 470 : 110}' r='230' fill='rgba(255,255,255,.13)'/>
    <circle cx='${kiri ? 700 : 100}' cy='${kiri ? 90 : 520}' r='110' fill='rgba(255,255,255,.1)'/>
    <text x='400' y='370' font-size='210' text-anchor='middle'>${u.emoji || '🏪'}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
const fotoList = u => (u.foto && u.foto.length) ? u.foto : [placeholder(u, 0), placeholder(u, 1), placeholder(u, 2)];
const inSubdir = window.location.pathname.toLowerCase().replace(/\\/g, '/').includes('/direktori/');
const rootPrefix = inSubdir ? '../' : '';
const dirPrefix = inSubdir ? '' : 'Direktori/';

const umkmLink = u => `${dirPrefix}${encodeURIComponent(u.id)}.html`;

/* ---------- Kartu UMKM ---------- */
function kartu(u) {
  const pesan = `Halo ${u.nama}, saya ingin bertanya mengenai usaha Anda di ${SITE.nama}.`;
  const badge = u.badge ? `<span class="badge-tag badge-emerald">${esc(u.badge)}</span>` : `<span class="badge-tag badge-amber">${esc(kat(u.kategori).nama)}</span>`;
  return `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="umkm-card h-100">
      <div class="umkm-card-photo">
        ${badge}
        <img src="${esc(fotoList(u)[0])}" alt="Foto ${esc(u.nama)}" loading="lazy">
      </div>
      <div class="umkm-card-body">
        <span class="umkm-category">${esc(kat(u.kategori).nama)}</span>
        <h3>${esc(u.nama)}</h3>
        <p>${esc(u.tagline)}</p>
        <ul class="umkm-info-list">
          <li><i class="bi bi-geo-alt text-success"></i> ${esc(u.area)}, ${esc(SITE.kota)}</li>
          <li><i class="bi bi-clock text-warning"></i> ${esc(u.jam || 'Setiap Hari')}</li>
        </ul>
        <div class="umkm-card-footer mt-auto">
          <a href="${umkmLink(u)}" class="btn-detail">Lihat Detail</a>
          <a href="${waLink(u.wa, pesan)}" target="_blank" rel="noopener" class="btn-wa-card" aria-label="Chat WhatsApp ${esc(u.nama)}"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>`;
}

/* ---------- Footer, tombol WA, dan data site ---------- */
function pasangLayout() {
  const ig = SITE.instagram ? `<li><a href="https://instagram.com/${esc(SITE.instagram)}" target="_blank" rel="noopener"><i class="bi bi-instagram"></i> @${esc(SITE.instagram)}</a></li>` : '';
  if ($('#footer')) {
    $('#footer').outerHTML = `<!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <!-- Col 1: Brand & Kontak -->
      <div class="footer-brand-col">
        <a class="footer-brand mb-3 d-inline-block" href="${rootPrefix || '/'}">
          <span class="brand-logo-text"><span class="brand-name">Media <span class="brand-highlight">UMKM</span></span></span>
        </a>
        <div class="footer-address">
          Portal Direktori &amp; Etalase Digital UMKM<br>
          Terbuka untuk Pelaku Usaha di Seluruh Indonesia
        </div>
        <div class="footer-contact-simple">
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890" target="_blank" rel="noopener">0812-3456-7890</a></p>
          <p><strong>Telepon:</strong> 0341-554321</p>
        </div>
      </div>

      <!-- Col 2: Tautan Cepat -->
      <div class="footer-col">
        <h4 class="footer-col-title">Tautan Cepat</h4>
        <div class="footer-title-bar"></div>
        <ul class="footer-list">
          <li><a href="${rootPrefix || '/'}">Beranda</a></li>
          <li><a href="${rootPrefix}tentang.html">Tentang Kami</a></li>
          <li><a href="${rootPrefix}direktori.html">Direktori UMKM</a></li>
          <li><a href="${rootPrefix}galeri.html">Galeri Etalase</a></li>
          <li><a href="${rootPrefix}blog.html">Artikel &amp; Edukasi</a></li>
          <li><a href="${rootPrefix}daftar.html">Daftarkan Usaha</a></li>
          <li><a href="${rootPrefix}kontak.html">Kontak</a></li>
        </ul>
      </div>

      <!-- Col 3: Kategori Usaha -->
      <div class="footer-col">
        <h4 class="footer-col-title">Kategori Usaha</h4>
        <div class="footer-title-bar"></div>
        <ul class="footer-list">
          <li><a href="${rootPrefix}direktori.html?kat=kuliner">Kuliner &amp; Minuman</a></li>
          <li><a href="${rootPrefix}direktori.html?kat=fashion">Fashion &amp; Kriya</a></li>
          <li><a href="${rootPrefix}direktori.html?kat=jasa">Jasa &amp; Perbaikan</a></li>
          <li><a href="${rootPrefix}direktori.html?kat=sembako">Sembako &amp; Toko</a></li>
          <li><a href="${rootPrefix}direktori.html?kat=kecantikan">Kecantikan &amp; Sehat</a></li>
          <li><a href="${rootPrefix}direktori.html?kat=pertanian">Pertanian &amp; Tanaman</a></li>
        </ul>
      </div>

      <!-- Col 4: Informasi & Bantuan -->
      <div class="footer-col">
        <h4 class="footer-col-title">Informasi &amp; Bantuan</h4>
        <div class="footer-title-bar"></div>
        <ul class="footer-list">
          <li><a href="${rootPrefix}daftar.html">Panduan Pendaftaran</a></li>
          <li><a href="${rootPrefix}kontak.html">Pertanyaan Umum</a></li>
          <li><a href="${rootPrefix}tentang.html">Testimoni Warga</a></li>
          <li><a href="${rootPrefix}galeri.html">Galeri Produk</a></li>
          <li><a href="${rootPrefix}tentang.html">Syarat &amp; Ketentuan</a></li>
          <li><a href="${rootPrefix}tentang.html">Kebijakan Privasi</a></li>
          <li><button type="button" class="footer-network-link" data-bs-toggle="modal" data-bs-target="#networkModal"><i class="bi bi-globe2"></i><span>Jaringan Wilayah Kota</span></button></li>
        </ul>
      </div>

      <!-- Col 5: Jam Operasional -->
      <div class="footer-col">
        <h4 class="footer-col-title">Jam Operasional</h4>
        <div class="footer-title-bar"></div>
        <div class="footer-schedule-item">
          <span class="sched-label">Layanan Pengelola</span>
          <span class="sched-val">Sen – Sab, 08.00 – 20.00 WIB</span>
        </div>
        <div class="footer-schedule-item">
          <span class="sched-label">Konsultasi WhatsApp</span>
          <span class="sched-val">Buka 24 jam setiap hari</span>
        </div>
        <div class="footer-schedule-item">
          <span class="sched-label">Pendaftaran Toko Online</span>
          <span class="sched-val">Setiap hari, 24 jam</span>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copy-text">&copy; 2026 <strong>Media UMKM</strong>. Hak cipta dilindungi.</p>
        <div class="footer-social-icons">
          <a href="https://instagram.com/mediaumkm.web.id" target="_blank" rel="noopener" class="footer-social-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://facebook.com/mediaumkm" target="_blank" rel="noopener" class="footer-social-btn" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://youtube.com/@mediaumkm" target="_blank" rel="noopener" class="footer-social-btn" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          <a href="https://tiktok.com/@mediaumkm" target="_blank" rel="noopener" class="footer-social-btn" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="footer-social-btn" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </footer>

    <!-- NETWORK MODAL POPUP -->
    <div class="modal fade modal-network" id="networkModal" tabindex="-1" aria-labelledby="networkModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title h5 font-bold text-white" id="networkModalTitle"><i class="bi bi-globe-americas text-success me-2"></i>Jaringan Network Website Wilayah</h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Tutup"></button>
          </div>
          <div class="modal-body">
            <p class="small text-white-50 mb-3">Pilih portal resmi Media UMKM di kota / wilayah Anda untuk melihat etalase lokal setempat:</p>
            <div class="network-search-box mb-3">
              <input type="text" id="networkSearchInput" placeholder="Cari wilayah / direktori network warga..." aria-label="Cari network">
            </div>
            <div class="network-grid" id="networkGrid">
              <div class="network-card" data-title="Media UMKM Malang" data-domain="malang.mediaumkm.web.id">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="network-card-title fw-bold text-white"><i class="bi bi-geo-alt-fill text-success me-1"></i>Media UMKM Malang</span>
                    <span class="badge bg-success bg-opacity-25 text-success small">Jawa Timur</span>
                  </div>
                  <span class="network-card-domain text-success small d-block mb-2"><i class="bi bi-link-45deg me-1"></i>malang.mediaumkm.web.id</span>
                  <p class="small text-white-50 mb-0">Direktori terpadu pelaku usaha mikro dan kuliner lokal Malang Raya.</p>
                </div>
                <a href="https://malang.mediaumkm.web.id" target="_blank" rel="noopener" class="btn btn-sm btn-emerald w-100 mt-3 d-inline-flex align-items-center justify-content-center gap-2">
                  <span>Kunjungi Website</span> <i class="bi bi-box-arrow-up-right small"></i>
                </a>
              </div>
              <div class="network-card" data-title="Media UMKM Batu" data-domain="batu.mediaumkm.web.id">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="network-card-title fw-bold text-white"><i class="bi bi-geo-alt-fill text-success me-1"></i>Media UMKM Kota Batu</span>
                    <span class="badge bg-success bg-opacity-25 text-success small">Jawa Timur</span>
                  </div>
                  <span class="network-card-domain text-success small d-block mb-2"><i class="bi bi-link-45deg me-1"></i>batu.mediaumkm.web.id</span>
                  <p class="small text-white-50 mb-0">Sentra etalase wisata kuliner, oleh-oleh buah apel, dan villa lokal.</p>
                </div>
                <a href="https://batu.mediaumkm.web.id" target="_blank" rel="noopener" class="btn btn-sm btn-emerald w-100 mt-3 d-inline-flex align-items-center justify-content-center gap-2">
                  <span>Kunjungi Website</span> <i class="bi bi-box-arrow-up-right small"></i>
                </a>
              </div>
              <div class="network-card" data-title="Media UMKM Surabaya" data-domain="surabaya.mediaumkm.web.id">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="network-card-title fw-bold text-white"><i class="bi bi-geo-alt-fill text-success me-1"></i>Media UMKM Surabaya</span>
                    <span class="badge bg-success bg-opacity-25 text-success small">Jawa Timur</span>
                  </div>
                  <span class="network-card-domain text-success small d-block mb-2"><i class="bi bi-link-45deg me-1"></i>surabaya.mediaumkm.web.id</span>
                  <p class="small text-white-50 mb-0">Jaringan pedagang toko kelontong, kuliner pahlawan, dan aneka jasa.</p>
                </div>
                <a href="https://surabaya.mediaumkm.web.id" target="_blank" rel="noopener" class="btn btn-sm btn-emerald w-100 mt-3 d-inline-flex align-items-center justify-content-center gap-2">
                  <span>Kunjungi Website</span> <i class="bi bi-box-arrow-up-right small"></i>
                </a>
              </div>
              <div class="network-card" data-title="Media UMKM Bandung" data-domain="bandung.mediaumkm.web.id">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="network-card-title fw-bold text-white"><i class="bi bi-geo-alt-fill text-info me-1"></i>Media UMKM Bandung</span>
                    <span class="badge bg-info bg-opacity-25 text-info small">Jawa Barat</span>
                  </div>
                  <span class="network-card-domain text-info small d-block mb-2"><i class="bi bi-link-45deg me-1"></i>bandung.mediaumkm.web.id</span>
                  <p class="small text-white-50 mb-0">Pusat promosi fashion distro, kriya kreatif, dan jajanan kuliner Priangan.</p>
                </div>
                <a href="https://bandung.mediaumkm.web.id" target="_blank" rel="noopener" class="btn btn-sm btn-emerald w-100 mt-3 d-inline-flex align-items-center justify-content-center gap-2">
                  <span>Kunjungi Website</span> <i class="bi bi-box-arrow-up-right small"></i>
                </a>
              </div>
              <div class="network-card" data-title="Media UMKM Yogyakarta" data-domain="jogja.mediaumkm.web.id">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="network-card-title fw-bold text-white"><i class="bi bi-geo-alt-fill text-warning me-1"></i>Media UMKM Yogyakarta</span>
                    <span class="badge bg-warning bg-opacity-25 text-warning small">D.I. Yogyakarta</span>
                  </div>
                  <span class="network-card-domain text-warning small d-block mb-2"><i class="bi bi-link-45deg me-1"></i>jogja.mediaumkm.web.id</span>
                  <p class="small text-white-50 mb-0">Katalog etalase kerajinan perak, batik khas, dan kuliner tradisional.</p>
                </div>
                <a href="https://jogja.mediaumkm.web.id" target="_blank" rel="noopener" class="btn btn-sm btn-emerald w-100 mt-3 d-inline-flex align-items-center justify-content-center gap-2">
                  <span>Kunjungi Website</span> <i class="bi bi-box-arrow-up-right small"></i>
                </a>
              </div>
              <div class="network-card" data-title="Media UMKM Jabodetabek" data-domain="jakarta.mediaumkm.web.id">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="network-card-title fw-bold text-white"><i class="bi bi-geo-alt-fill text-primary me-1"></i>Media UMKM Jabodetabek</span>
                    <span class="badge bg-primary bg-opacity-25 text-primary small">DKI &amp; Sekitar</span>
                  </div>
                  <span class="network-card-domain text-primary small d-block mb-2"><i class="bi bi-link-45deg me-1"></i>jakarta.mediaumkm.web.id</span>
                  <p class="small text-white-50 mb-0">Hub direktori merchant usaha metropolitan dan jasa servis terpercaya.</p>
                </div>
                <a href="https://jakarta.mediaumkm.web.id" target="_blank" rel="noopener" class="btn btn-sm btn-emerald w-100 mt-3 d-inline-flex align-items-center justify-content-center gap-2">
                  <span>Kunjungi Website</span> <i class="bi bi-box-arrow-up-right small"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }

  // Pasang Floating WA Widget dan Scroll To Top jika belum ada
  if (!document.getElementById('waFloatingWidget')) {
    const waHtml = `
  <!-- FLOATING WHATSAPP POP-UP WIDGET -->
  <div class="wa-floating-widget" id="waFloatingWidget">
    <div class="wa-popup-card" id="waPopupCard">
      <div class="wa-popup-header">
        <img src="${rootPrefix}assets/img/favicon.png" alt="Admin" width="28" height="28" class="rounded-circle">
        <div>
          <div class="fw-bold fs-6">Admin Media UMKM</div>
          <div class="small opacity-75">Online • Siap Membantu</div>
        </div>
        <button class="btn-close btn-close-white ms-auto" id="waPopupClose" aria-label="Tutup"></button>
      </div>
      <div class="wa-popup-body">
        <div class="wa-chat-bubble">
          <p class="mb-1">Halo! Mau mendaftarkan usaha warungmu atau butuh bantuan mencari produk lokal?</p>
          <span class="small text-muted d-block text-end">Baru saja</span>
        </div>
      </div>
      <div class="p-2 bg-dark text-center">
        <a href="https://wa.me/6281234567890?text=Halo%20Admin%20Media%20UMKM%2C%20saya%20butuh%20bantuan" target="_blank" class="btn btn-wa w-100 justify-content-center">
          <i class="bi bi-whatsapp"></i> Chat Admin WA
        </a>
      </div>
    </div>
    <button class="wa-floating-btn" id="waFloatingBtn" type="button" aria-label="Bantuan WA">
      <i class="bi bi-whatsapp fs-3"></i>
    </button>
  </div>

  <!-- SCROLL TO TOP -->
  <button class="scroll-to-top" id="scrollToTop" type="button" aria-label="Kembali ke atas">
    <svg class="progress-ring" width="48" height="48" viewBox="0 0 48 48">
      <circle class="progress-ring-bg" cx="24" cy="24" r="20" fill="transparent" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-dasharray="4 3" />
      <circle class="progress-ring-circle" cx="24" cy="24" r="20" fill="transparent" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" />
    </svg>
    <i class="bi bi-chevron-up position-relative z-2"></i>
  </button>`;
    document.body.insertAdjacentHTML('beforeend', waHtml);
  }

  const floatingBtn = document.getElementById('waFloatingBtn');
  const popupCard = document.getElementById('waPopupCard');
  const closeBtn = document.getElementById('waPopupClose');
  if (floatingBtn && popupCard && !floatingBtn._bound) {
    floatingBtn._bound = true;
    floatingBtn.addEventListener('click', () => popupCard.classList.toggle('active'));
    closeBtn?.addEventListener('click', () => popupCard.classList.remove('active'));
    setTimeout(() => popupCard.classList.add('active'), 5000);
  }

  const btnTop = document.getElementById('scrollToTop');
  const progressCircle = btnTop?.querySelector('.progress-ring-circle');
  if (btnTop && progressCircle && !btnTop._bound) {
    btnTop._bound = true;
    const circumference = 2 * Math.PI * 20;
    let docHeight = 1, ticking = false, shown = false;
    const measure = () => { docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); };
    const update = () => {
      ticking = false;
      const scrollTop = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
      progressCircle.style.strokeDashoffset = circumference - (progress * circumference);
      const show = scrollTop > 250;
      if (show !== shown) { shown = show; btnTop.classList.toggle('active', show); }
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', () => { measure(); update(); }, { passive: true });
    window.addEventListener('load', measure);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);
    measure();
    btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  $$('[data-site]').forEach(el => el.textContent = SITE[el.dataset.site]);
  $$('[data-wa]').forEach(el => el.href = waLink(SITE.wa, el.dataset.wa));
}

/* ---------- Beranda ---------- */
function halamanBeranda() {
  const unggulan = UMKM.filter(u => u.unggulan);
  const pilihan = (unggulan.length ? unggulan : UMKM).slice(0, 6);
  if ($('#hero-tiles')) {
    $('#hero-tiles').innerHTML = pilihan.slice(0, 3).map(u => `
      <a class="tile" href="${umkmLink(u)}">
        <img src="${esc(fotoList(u)[0])}" alt="">
        <span><strong>${esc(u.nama)}</strong><small>${esc(kat(u.kategori).nama)} · ${esc(u.area)}</small></span></a>`).join('');
  }
  $('#kategori-list').innerHTML = KATEGORI.map(k => {
    const n = UMKM.filter(u => u.kategori === k.id).length;
    return `<a class="kat-chip" href="direktori.html?kategori=${k.id}"><i class="bi ${k.ikon}"></i><span>${esc(k.nama)} <small>(${n})</small></span></a>`;
  }).join('');
  $('#unggulan-grid').innerHTML = pilihan.map(kartu).join('');
  hitungMundur();
  $('#form-cari').addEventListener('submit', e => {
    e.preventDefault();
    const q = $('#cari-hero').value.trim();
    const area = $('#area-hero') ? $('#area-hero').value.trim() : '';
    const query = [q, area].filter(Boolean).join(' ');
    location.href = 'direktori.html' + (query ? '?q=' + encodeURIComponent(query) : '');
  });
}

function hitungMundur() {
  const blok = $('#blok-hitung'), tujuan = SITE.batasDaftar ? new Date(SITE.batasDaftar).getTime() : NaN;
  if (isNaN(tujuan) || tujuan <= Date.now()) { blok.remove(); return; }
  const isi = () => {
    const s = Math.max(0, Math.floor((tujuan - Date.now()) / 1000));
    $('#h-hari').textContent = String(Math.floor(s / 86400)).padStart(2, '0');
    $('#h-jam').textContent = String(Math.floor(s % 86400 / 3600)).padStart(2, '0');
    $('#h-menit').textContent = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
    $('#h-detik').textContent = String(s % 60).padStart(2, '0');
  };
  isi(); setInterval(isi, 1000);
}

/* ---------- Direktori ---------- */
function halamanDirektori() {
  const p = new URLSearchParams(location.search);
  const state = { q: p.get('q') || '', kat: p.get('kategori') || 'semua' };
  const input = $('#cari'); input.value = state.q;
  const semua = [{ id: 'semua', nama: 'Semua' }, ...KATEGORI];

  function gambar() {
    $('#pills').innerHTML = semua.map(k => `<button type="button" class="pill ${state.kat === k.id ? 'aktif' : ''}" data-k="${k.id}" aria-pressed="${state.kat === k.id}">${esc(k.nama)}</button>`).join('');
    const q = state.q.toLowerCase();
    const hasil = UMKM.filter(u => (state.kat === 'semua' || u.kategori === state.kat) &&
      (!q || [u.nama, u.tagline, u.deskripsi, u.area, kat(u.kategori).nama, ...(u.produk || []).map(x => x.nama)].join(' ').toLowerCase().includes(q)));
    $('#jumlah').textContent = `${hasil.length} usaha ditemukan`;
    $('#daftar-umkm').innerHTML = hasil.length ? hasil.map(kartu).join('') :
      `<div class="col-12"><div class="kosong"><i class="bi bi-search"></i><h3 class="mt-2">Belum ada yang cocok</h3>
       <p>Coba kata kunci lain atau pilih "Semua". Usahamu belum ada di sini? <a href="daftar.html">Daftarkan sekarang</a>.</p></div></div>`;
    const url = new URL(location); state.q ? url.searchParams.set('q', state.q) : url.searchParams.delete('q');
    state.kat !== 'semua' ? url.searchParams.set('kategori', state.kat) : url.searchParams.delete('kategori');
    history.replaceState(null, '', url);
  }
  input.addEventListener('input', () => { state.q = input.value.trim(); gambar(); });
  $('#pills').addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) { state.kat = b.dataset.k; gambar(); } });
  gambar();
}

/* ---------- Detail ---------- */
function halamanDetail() {
  const id = document.body.dataset.umkmId || new URLSearchParams(location.search).get('id');
  const u = UMKM.find(x => x.id === id);
  const root = $('#detail');
  if (!u) {
    document.title = 'Usaha tidak ditemukan — ' + SITE.nama;
    root.innerHTML = `<div class="container seksi"><div class="kosong"><i class="bi bi-emoji-frown fs-1 text-warning mb-3 d-block"></i><h1 class="fs-2 mt-2 text-white">Usaha tidak ditemukan</h1>
      <p class="text-muted">Tautan mungkin salah atau usahanya sudah tidak tayang.</p><a class="btn btn-emerald mt-3" href="${rootPrefix}direktori.html">Lihat semua UMKM</a></div></div>`;
    return;
  }
  document.title = `${u.nama} — ${SITE.nama}`;
  const fotos = fotoList(u);
  const pesan = `Halo ${u.nama}, saya melihat usaha Anda di platform ${SITE.nama}.`;
  const qPeta = encodeURIComponent(`${u.alamat}, ${SITE.kota}`);
  const peta = u.maps || `https://maps.google.com/maps?q=${qPeta}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const petaLink = `https://www.google.com/maps/search/?api=1&query=${qPeta}`;

  const galeri = fotos.length > 1 ? `
    <div id="carouselFoto" class="carousel slide galeri shadow-lg mb-4" data-bs-ride="carousel">
      <div class="carousel-inner">${fotos.map((f, i) => `<div class="carousel-item ${i ? '' : 'active'}"><img src="${esc(f)}" alt="Foto ${i + 1} ${esc(u.nama)}" class="galeri-img"></div>`).join('')}</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselFoto" data-bs-slide="prev" aria-label="Foto sebelumnya"><span class="carousel-control-prev-icon"></span></button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselFoto" data-bs-slide="next" aria-label="Foto berikutnya"><span class="carousel-control-next-icon"></span></button>
    </div>` : `<div class="galeri shadow-lg mb-4"><img src="${esc(fotos[0])}" alt="Foto ${esc(u.nama)}" class="galeri-img"></div>`;

  const produk = (u.produk || []).map(x => {
    const pesanItem = `Halo ${u.nama}, saya ingin memesan produk: ${x.nama} (${rupiah(x.harga)}). Apakah masih tersedia?`;
    return `
    <div class="produk-baris">
      <div class="produk-info">
        <strong class="produk-nama">${esc(x.nama)}</strong>
        ${x.ket ? `<span class="produk-ket">${esc(x.ket)}</span>` : ''}
      </div>
      <div class="produk-action">
        <div class="harga">${esc(rupiah(x.harga))}</div>
        <a href="${waLink(u.wa, pesanItem)}" target="_blank" rel="noopener" class="btn-pesan-item" aria-label="Pesan ${esc(x.nama)} via WhatsApp">
          <i class="bi bi-whatsapp me-1"></i> Pesan
        </a>
      </div>
    </div>`;
  }).join('');

  // Ambil usaha kategori serupa, jika kurang dari 3 lengkapi dengan rekomendasi lain agar selalu tampil 3 kartu
  let mirip = UMKM.filter(x => x.kategori === u.kategori && x.id !== u.id);
  if (mirip.length < 3) {
    const lainnya = UMKM.filter(x => x.id !== u.id && !mirip.some(m => m.id === x.id));
    mirip = [...mirip, ...lainnya].slice(0, 3);
  } else {
    mirip = mirip.slice(0, 3);
  }

  const ig = u.instagram ? `<div class="info-baris"><i class="bi bi-instagram text-danger"></i><div><small>Instagram</small><a href="https://instagram.com/${esc(u.instagram)}" target="_blank" rel="noopener">@${esc(u.instagram)}</a></div></div>` : '';

  root.innerHTML = `
  <div class="page-head">
    <div class="container">
      <div class="crumb mb-2"><a href="${rootPrefix}direktori.html"><i class="bi bi-arrow-left me-1"></i> Direktori UMKM</a> / <span class="text-white">${esc(kat(u.kategori).nama)}</span></div>
      <h1 class="page-head-title">${esc(u.nama)}</h1>
      <p class="page-head-sub">${esc(u.tagline)}</p>
    </div>
  </div>

  <div class="container seksi pt-4">
    <div class="row g-4">
      <div class="col-lg-8">
        ${galeri}
        <div class="panel">
          <h2 class="panel-title"><i class="bi bi-shop me-2 text-success"></i>Tentang Usaha Ini</h2>
          <p class="panel-desc mb-0">${esc(u.deskripsi)}</p>
        </div>
        ${produk ? `
        <div class="panel">
          <h2 class="panel-title"><i class="bi bi-journal-text me-2 text-warning"></i>Daftar Produk &amp; Pricelist</h2>
          <div class="produk-list">${produk}</div>
          <p class="small text-muted mt-3 mb-0"><i class="bi bi-info-circle me-1"></i> Harga dapat berubah sewaktu-waktu. Pembelian langsung terhubung via WhatsApp penjual.</p>
        </div>` : ''}
        <div class="panel">
          <h2 class="panel-title"><i class="bi bi-geo-alt-fill me-2 text-danger"></i>Lokasi Usaha</h2>
          <div class="peta-wrapper mb-3">
            <iframe class="peta" src="${esc(peta)}" title="Peta lokasi ${esc(u.nama)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <a class="btn btn-emerald btn-sm" href="${petaLink}" target="_blank" rel="noopener"><i class="bi bi-cursor-fill me-1"></i> Buka Petunjuk Arah di Google Maps</a>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="sticky-aksi">
          <div class="panel panel-sidebar">
            <a class="btn btn-wa-detail w-100 mb-3" href="${waLink(u.wa, pesan)}" target="_blank" rel="noopener">
              <i class="bi bi-whatsapp me-2 fs-5"></i> Chat &amp; Pesan via WhatsApp
            </a>
            <button type="button" class="btn btn-outline-light w-100 mb-4 rounded-3" id="bagikan">
              <i class="bi bi-share me-2"></i> Bagikan Halaman Ini
            </button>

            <h3 class="sidebar-title">Informasi Lengkap</h3>
            <div class="info-baris"><i class="bi bi-geo-alt-fill text-success"></i><div><small>Alamat</small><strong>${esc(u.alamat)}</strong></div></div>
            <div class="info-baris"><i class="bi bi-clock-fill text-warning"></i><div><small>Jam Operasional</small><strong>${esc(u.jam)}</strong></div></div>
            <div class="info-baris"><i class="bi ${kat(u.kategori).ikon} text-info"></i><div><small>Kategori Usaha</small><strong>${esc(kat(u.kategori).nama)}</strong></div></div>
            ${ig}
          </div>
        </div>
      </div>
    </div>

    ${mirip.length ? `
    <div class="mt-5 pt-3">
      <h2 class="h3 font-bold text-white mb-4"><i class="bi bi-grid-3x3-gap-fill text-success me-2"></i>Produk Serupa</h2>
      <div class="row g-4">${mirip.map(kartu).join('')}</div>
    </div>` : ''}
  </div>`;

  $('#bagikan').addEventListener('click', async e => {
    const b = e.currentTarget;
    try {
      if (navigator.share) await navigator.share({ title: u.nama, text: u.tagline, url: location.href });
      else { await navigator.clipboard.writeText(location.href); b.innerHTML = '<i class="bi bi-check2"></i> Tautan disalin!'; }
    } catch (_) { /* dibatalkan */ }
  });
}

/* ---------- Daftar / Gabung ---------- */
function halamanDaftar() {
  $('#kategori-opsi').innerHTML = KATEGORI.map(k => `<option value="${esc(k.nama)}">${esc(k.nama)}</option>`).join('');
  const form = $('#form-daftar');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
    const d = Object.fromEntries(new FormData(form));
    const pesan = `Halo, saya ingin mendaftarkan usaha di ${SITE.nama}.\n\nNama pemilik: ${d.pemilik}\nNama usaha: ${d.usaha}\nKategori: ${d.kategori}\nArea/alamat: ${d.alamat}\nCeritakan usaha: ${d.cerita || '-'}`;
    window.open(waLink(SITE.wa, pesan), '_blank', 'noopener');
  });
}

/* ---------- Mulai ---------- */
document.addEventListener('DOMContentLoaded', () => {
  pasangLayout();
  const fn = { beranda: halamanBeranda, direktori: halamanDirektori, detail: halamanDetail, daftar: halamanDaftar }[document.body.dataset.page];
  if (fn) fn();
});
