/**
 * Media UMKM — Core JavaScript Application Engine
 * Handles 3D Fan Showcase, Live Direktori Search, Testimonials Slider,
 * Floating WA Widget, Scroll Progress Ring & Reveal Animations
 */

function initAll() {
  initNavbarState();
  initScrollReveal();
  initScrollToTop();
  initFloatingWA();
  init3DFanGallery();
  initTestimonialsSlider();
  initNetworkModalSearch();
  initDirektoriFilter();
  initDirektoriSearch();
}
if (document.readyState === 'complete') initAll();
else document.addEventListener('DOMContentLoaded', initAll);

/* Helper: jalankan fungsi hanya saat elemen terlihat di layar (hemat CPU untuk slider otomatis) */
function whenVisible(el, onChange) {
  if (!el || !('IntersectionObserver' in window)) { onChange(true); return; }
  new IntersectionObserver((entries) => onChange(entries[entries.length - 1].isIntersecting), { threshold: 0 }).observe(el);
}

/* =====================================================
   1. Navbar Active Link & Sticky Shadow
   ===================================================== */
function initNavbarState() {
  const navbar = document.getElementById('navbar');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPath)) {
      link.classList.add('active');
    }
  });

  let scrolled = false;
  window.addEventListener('scroll', () => {
    const now = window.scrollY > 30;
    if (now !== scrolled) {
      scrolled = now;
      navbar?.classList.toggle('scrolled', now);
    }
  }, { passive: true });
}

/* =====================================================
   2. Scroll Reveal Animations
   ===================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '100px 0px 50px 0px', threshold: 0.01 });

  // IntersectionObserver langsung melaporkan elemen yang sudah terlihat, tanpa memaksa layout ulang
  reveals.forEach(el => observer.observe(el));
}

/* =====================================================
   3. Scroll to Top Button with Progress Ring
   ===================================================== */
function initScrollToTop() {
  const btn = document.getElementById('scrollToTop');
  const progressCircle = btn?.querySelector('.progress-ring-circle');
  if (!btn || !progressCircle || btn._bound) return;
  btn._bound = true;

  const circumference = 2 * Math.PI * 20; // 125.66

  let docHeight = 1, ticking = false, isActive = false;
  const measure = () => { docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); };

  function updateProgress() {
    ticking = false;
    const scrollTop = window.scrollY;
    const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
    progressCircle.style.strokeDashoffset = circumference - (progress * circumference);

    const show = scrollTop > 250;
    if (show !== isActive) {
      isActive = show;
      btn.classList.toggle('active', show);
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', () => { measure(); updateProgress(); }, { passive: true });
  window.addEventListener('load', measure);
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);
  measure();
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =====================================================
   4. Floating WhatsApp Pop-up Widget
   ===================================================== */
function initFloatingWA() {
  const floatingBtn = document.getElementById('waFloatingBtn');
  const popupCard = document.getElementById('waPopupCard');
  const closeBtn = document.getElementById('waPopupClose');

  if (!floatingBtn || !popupCard || floatingBtn._bound) return;
  floatingBtn._bound = true;

  floatingBtn.addEventListener('click', () => {
    popupCard.classList.toggle('active');
  });

  closeBtn?.addEventListener('click', () => {
    popupCard.classList.remove('active');
  });

  setTimeout(() => {
    popupCard.classList.add('active');
  }, 5000);
}

/* =====================================================
   5. 3D Fan Showcase Logic
   ===================================================== */
function init3DFanGallery() {
  const cards = document.querySelectorAll('.gallery-fan-card');
  const dots = document.querySelectorAll('.gallery-fan-dot');
  if (!cards.length) return;

  let currentIndex = 2;

  function updateFanPosition() {
    cards.forEach((card, i) => {
      let pos = i - currentIndex;
      if (pos < -2) pos = -2;
      if (pos > 2) pos = 2;
      card.setAttribute('data-pos', pos);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      currentIndex = i;
      updateFanPosition();
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-target'));
      if (!isNaN(target)) {
        currentIndex = target;
        updateFanPosition();
      }
    });
  });

  let visible = true;
  whenVisible(document.getElementById('galleryFan'), v => { visible = v; });
  setInterval(() => {
    if (!visible || document.hidden) return;
    currentIndex = (currentIndex + 1) % cards.length;
    updateFanPosition();
  }, 4500);

  updateFanPosition();
}

/* =====================================================
   6. Testimonials Slider Logic
   ===================================================== */
function initTestimonialsSlider() {
  const track = document.getElementById('testiTrack');
  const dots = document.querySelectorAll('.testi-dot');
  const cards = document.querySelectorAll('.testimoni-card');
  if (!track || !cards.length) return;

  let index = 0;

  function slideTo(i) {
    if (i < 0) i = cards.length - 1;
    if (i >= cards.length) i = 0;
    index = i;

    cards.forEach(card => {
      card.style.transform = `translateX(-${index * 100}%)`;
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      if (!isNaN(idx)) slideTo(idx);
    });
  });

  let visible = true;
  whenVisible(track, v => { visible = v; });
  setInterval(() => { if (visible && !document.hidden) slideTo(index + 1); }, 6000);
}

/* =====================================================
   7. Network Modal Search
   ===================================================== */
function initNetworkModalSearch() {
  const input = document.getElementById('networkSearchInput');
  const grid = document.getElementById('networkGrid');
  if (!input || !grid) return;

  const cards = grid.querySelectorAll('.network-card');

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(q)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* =====================================================
   8. Direktori Category Filter & Live Search
   ===================================================== */
function initDirektoriFilter() {
  const filterBtns = document.querySelectorAll('.btn-filter');
  const items = document.querySelectorAll('.gallery-grid-item');
  if (!items.length) return;

  function applyFilter(cat) {
    if (!cat) cat = 'all';

    filterBtns.forEach(b => {
      if (b.getAttribute('data-filter') === cat) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (cat === 'all' || itemCat === cat) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Parse URL parameter ?kat=
  const urlParams = new URLSearchParams(window.location.search);
  const katParam = urlParams.get('kat');
  if (katParam) {
    applyFilter(katParam);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      applyFilter(cat);
    });
  });
}

function initDirektoriSearch() {
  const input = document.getElementById('direktoriSearchInput');
  const items = document.querySelectorAll('.gallery-grid-item');
  if (!input || !items.length) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
}
