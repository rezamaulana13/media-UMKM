/**
 * Build aset Media UMKM  ->  jalankan:  npm install   (sekali)   lalu   npm run build
 *
 * Yang dihasilkan:
 *   assets/css/site.min.css                    1 file CSS (Bootstrap terpangkas + ikon + style.css, sudah minify)
 *   assets/fonts/plus-jakarta-sans-latin.woff2 font teks (di-hosting sendiri, tidak lagi dari Google)
 *
 * Kapan harus dijalankan ulang:
 *   - setelah mengubah assets/css/style.css
 *   - setelah menambah/mengubah ikon (bi-xxx) di HTML atau assets/js/data.js
 *   - setelah menambah halaman/kelas Bootstrap baru
 *
 * File sumber (style.css, assets/vendor/*) TIDAK diubah.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { PurgeCSS } from 'purgecss';
import * as csso from 'csso';
import subsetFont from 'subset-font';

const require = createRequire(import.meta.url);
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const nm = (p) => path.join(ROOT, 'node_modules', p);
const read = (p) => fs.readFileSync(p, 'utf8');
const kb = (n) => (n / 1024).toFixed(1) + ' KiB';

/* ---------- 0. Kumpulkan semua file yang memakai kelas CSS ---------- */
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'vendor', '.vscode'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(html|js)$/.test(e.name) && e.name !== 'build.mjs') out.push(p);
  }
  return out;
}
const contentFiles = walk(ROOT);
const allText = contentFiles.map(read).join('\n');

/* ---------- 1. Font teks (Plus Jakarta Sans, variable, subset latin) ---------- */
fs.mkdirSync(path.join(ROOT, 'assets/fonts'), { recursive: true });
fs.copyFileSync(
  nm('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2'),
  path.join(ROOT, 'assets/fonts/plus-jakarta-sans-latin.woff2')
);

// Angka hasil pengukuran font vs Arial -> fallback sementara dengan ukuran sama (mencegah layout bergeser saat font tiba)
const fontCss =
  `@font-face{font-family:"Plus Jakarta Sans";font-style:normal;font-weight:200 800;font-display:swap;` +
  `src:url(../fonts/plus-jakarta-sans-latin.woff2) format("woff2");` +
  `unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}` +
  `@font-face{font-family:"Plus Jakarta Sans Fallback";src:local("Arial"),local("Helvetica"),local("Liberation Sans");` +
  `size-adjust:104.3%;ascent-override:99.5%;descent-override:21.3%;line-gap-override:0%;` +
  // rentang sama dengan font utama: karakter di luar latin (mis. panah) tetap memakai font sistem seperti sebelumnya
  `unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`;

/* ---------- 2. Ikon: hanya glyph yang dipakai ---------- */
const iconMap = JSON.parse(read(nm('bootstrap-icons/font/bootstrap-icons.json'))); // nama -> codepoint
const usedNames = [...new Set([...allText.matchAll(/\bbi-([a-z0-9]+(?:-[a-z0-9]+)*)/g)].map((m) => m[1]))];
const used = usedNames.filter((n) => iconMap[n] !== undefined);
const missing = usedNames.filter((n) => iconMap[n] === undefined && !['fill'].includes(n));
if (missing.length) console.warn('  ! ikon tidak dikenal (diabaikan):', missing.join(', '));

const iconFontSrc = fs.readFileSync(nm('bootstrap-icons/font/fonts/bootstrap-icons.woff2'));
const iconChars = used.map((n) => String.fromCodePoint(iconMap[n])).join('');
const iconWoff2 = await subsetFont(iconFontSrc, iconChars, { targetFormat: 'woff2' });
const iconBase = read(nm('bootstrap-icons/font/bootstrap-icons.css')).match(/(\.bi::before[^{]*\{[^}]*\})/)[1];
const iconCss =
  // Font ikon disisipkan langsung (base64, ± beberapa KB) agar tidak butuh request tambahan & ikon langsung tampil
  `@font-face{font-display:swap;font-family:bootstrap-icons;src:url(data:font/woff2;base64,${Buffer.from(iconWoff2).toString('base64')}) format("woff2")}` +
  iconBase +
  used.map((n) => `.bi-${n}::before{content:"\\${iconMap[n].toString(16)}"}`).join('');

/* ---------- 3. Bootstrap: buang kelas yang tidak dipakai ---------- */
const purged = await new PurgeCSS().purge({
  content: contentFiles.map((f) => ({ raw: read(f), extension: path.extname(f).slice(1) })),
  css: [{ raw: read(nm('bootstrap/dist/css/bootstrap.min.css')) }],
  safelist: {
    standard: [
      /^(show|showing|hide|hiding|fade|collapse|collapsing|collapsed|active|disabled|dropdown-menu-end|modal-open|modal-backdrop|modal-static|was-validated|is-valid|is-invalid)$/,
      /^(modal|offcanvas|tooltip|popover|bs-|data-bs-)/,
    ],
    greedy: [/data-bs-theme/, /data-bs-/],
  },
  variables: false, // variabel --bs-* tetap utuh
  keyframes: true,
  fontFace: false,
});
const bootstrapCss = purged[0].css;

/* ---------- 4. Gabung + minify ---------- */
const siteCss = read(path.join(ROOT, 'assets/css/style.css'));
const bundle = [fontCss, bootstrapCss, iconCss, siteCss].join('\n');
const { css: min } = csso.minify(bundle, { restructure: false }); // restructure:false = urutan aturan tidak diubah
fs.writeFileSync(path.join(ROOT, 'assets/css/site.min.css'), min);

console.log('Build selesai');
console.log('  Ikon dipakai     :', used.length, '(font ikon', kb(iconWoff2.length) + ')');
console.log('  Bootstrap        :', kb(read(nm('bootstrap/dist/css/bootstrap.min.css')).length), '->', kb(bootstrapCss.length));
console.log('  site.min.css     :', kb(min.length));
