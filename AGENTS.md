# AGENTS.md

Panduan kerja untuk agent di proyek `cis`.

## Ringkasan Proyek

- `ciscorp.online/` adalah salinan instalasi WordPress CIS dan dipakai sebagai referensi.
- `web/` adalah area kerja utama untuk corporate website baru.
- `CIS COMPRO REV-3.pdf` adalah sumber utama konten, logo, layout, dan arah visual.

## Aturan Utama

- Jangan menghapus, mereset, commit, push, deploy, atau menjalankan migrasi tanpa instruksi eksplisit.
- Perlakukan `ciscorp.online/` sebagai referensi saja. Jangan edit folder ini kecuali diminta langsung.
- Untuk corporate website CIS, prioritaskan perubahan di `web/`.
- Untuk file di `web/` yang layak di-upload ke Git, prioritaskan source file dan konfigurasi proyek seperti `src/`, `public/`, `assets/`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `postcss.config.js`, `README.md`, `styles.css`, dan file kerja relevan lain yang memang menjadi bagian source project.
- Jangan upload artifact atau file lokal hasil generate dari `web/` seperti `node_modules/`, `dist/`, `.vite-dev.log`, dan `.vite-dev.err.log`.
- Hindari mengubah file core WordPress seperti `wp-admin/`, `wp-includes/`, dan file root `wp-*.php` kecuali memang diminta.
- Jika perubahan menyentuh WordPress, prioritaskan `wp-content/themes/`, `wp-content/plugins/`, atau aset di `wp-content/uploads/` sesuai kebutuhan.
- Jangan menampilkan nilai kredensial jika ditemukan pada file konfigurasi.

## Arah Visual Website CIS

- Website harus terasa seperti versi web dari `CIS COMPRO REV-3.pdf`, bukan tempelan halaman PDF mentah.
- Gunakan compro sebagai sumber arah visual, warna, ikon, ilustrasi, dan struktur konten, lalu adaptasikan menjadi layout web yang rapi dan responsif.
- Pertahankan nuansa visual: navy, cyan/soft blue, aksen emas, card putih, grid tipis, radius kecil, dan kesan korporat premium.

## Aturan Slice Asset dari PDF

- Prioritaskan slice/crop elemen yang relevan lalu olah menjadi aset web.
- Jika cocok, bersihkan background putih/grid PDF menjadi transparan agar menyatu dengan section web.
- Slice tidak boleh terasa seperti screenshot PDF yang dipotong asal.
- Pertahankan framing asli elemen: satu card utuh, satu ilustrasi utuh, atau satu diagram utuh yang masih terbaca komposisinya.
- Untuk card dari compro, default-nya ambil card utuh beserta radius, image/header area, icon, judul, deskripsi, dan spacing internalnya.
- Jangan memotong teks penting, icon utama, batas card, atau alignment visual.
- Jika user memberi contoh crop yang benar, ikuti contoh itu secara ketat. "Mirip" tidak cukup.
- Jika ragu hasil slice sudah cukup bersih, anggap belum lolos dan lakukan re-slice.
- Jika elemen lebih tepat dibangun ulang dengan HTML/CSS, gunakan slice hanya sebagai referensi visual.

## Contoh Slice

### Benar

- Card industri seperti `Manufacturing`, `Healthcare`, atau `Logistics & Supply Chain` diambil sebagai card utuh yang tetap terbaca sebagai satu objek desain.
- Ilustrasi besar seperti robotik atau human capital diambil visual utamanya, lalu teks dan layout pendamping dibangun ulang dengan HTML/CSS.
- Diagram atau flow hanya dipakai jika komposisinya masih utuh dan tidak terpotong di bagian penting.

### Salah

- Hanya memotong foto isi card lalu memakainya sebagai pengganti seluruh card.
- Crop yang masih menyisakan header section lain, card sebelah, footer, atau elemen halaman yang tidak relevan.
- Potongan yang masih terasa seperti halaman PDF yang dipangkas, bukan aset yang memang disiapkan untuk web.
- Memakai satu halaman compro hampir penuh sebagai image utama, padahal kontennya bisa dipisah menjadi visual pendukung dan layout web-native.

## Aturan Keputusan Cepat

- Jika card asli sudah rapi dan cocok dipakai langsung, slice card utuh.
- Jika user memberi contoh framing yang benar, ikuti contoh itu secara literal.
- Jika yang dibutuhkan hanya nuansa visual, slice elemen visualnya lalu bangun ulang konten dengan HTML/CSS.
- Jika hasil akhir masih terlihat seperti potongan PDF, ulangi sampai terlihat seperti aset web yang disengaja.

## Standar dan Audit Visual Terakhir

- Section `Training / Human Capital` adalah standar acuan: visual compro di-slice, dibuat transparan, lalu dirangkai ulang sebagai komposisi web-native dengan HTML/CSS.
- Section yang relatif aman: `Hero/Cover`, `CIS Core Values`, `Rekayasa Operasional Kritis`, `CRM`, `Training / Human Capital`, dan `Closing/Contact`.
- Section yang masih terlalu dekat ke "tempel PDF mentah" dan perlu diubah menjadi web-native:
  - `Executive Overview`
  - `Executive Diagnostic`
  - `Ekosistem Otomasi & Tipe Robot`
  - `Smart Warehouse`
  - `Digital Enterprise & Retail Robotics`
  - `Dampak Organisasi & Langkah Implementasi`
  - `Skema Kerjasama Strategis`
- Prioritas perbaikan berikutnya: ambil visual penting dari section yang masih memakai image compro besar, buat transparansi jika relevan, lalu bangun ulang teks, cards, flow, timeline, dan CTA dengan HTML/CSS.

## Cara Eksplorasi

- Gunakan `rg` atau `rg --files` untuk pencarian file dan teks.
- Abaikan direktori vendor/cache/generated bila tidak relevan, terutama:
  - `wp-content/plugins/*/vendor/`
  - `wp-content/uploads/`
  - `wp-content/cache/`
  - `wp-content/backuply/`
- Sebelum mengedit, pahami pola file sekitar dan hindari membuat abstraksi baru jika pola lokal sudah cukup.

## Verifikasi

- Untuk PHP, jalankan `php -l path\to\file.php` pada file yang diubah bila memungkinkan.
- Untuk frontend statis, buka halaman terkait di browser lokal jika entry point/server tersedia.
- Jika tidak ada test runner atau server lokal yang jelas, laporkan verifikasi yang berhasil dilakukan beserta batasannya.

## Gaya Implementasi

- Jaga perubahan tetap kecil, fokus, dan langsung terkait permintaan.
- Gunakan komentar kode hanya jika membantu menjelaskan logika yang tidak langsung jelas.
- Pertahankan gaya bahasa, naming, dan struktur file yang sudah ada di sekitar perubahan.
- Untuk konten situs CIS, gunakan nada profesional, jelas, dan korporat.
- Untuk copy website corporate, utamakan teks yang ringkas, business-facing, dan langsung ke nilai/isi utama. Hindari teks meta atau penjelasan proses kerja internal seperti "halaman ini mengikuti pola", "relevansi materi", "aset diadaptasi dari", atau narasi lain yang terasa overthinking dan tidak relevan bagi pengunjung akhir.
- Jika visual sudah cukup menjelaskan, jangan menambah paragraf penjelas yang hanya mengulang atau menjelaskan maksud desain. Lebih baik pakai judul yang kuat, points singkat, dan CTA yang jelas.
- Untuk section seperti Robotics dan Digital Transformation yang mengikuti pola PPT, halaman utama harus tetap ringkas: tampilkan judul, icon, dan titik masuk utama saja. Penjelasan rinci dipisah ke halaman detail.
- Untuk knowledge yang dibutuhkan agent/chatbot, simpan detail penjelasan di `KNOWLEDGE.md` dan mapping link publik di folder `hermes/`, bukan ditumpuk di UI halaman utama.
- Jika item di halaman utama bisa diklik ke detail, prioritaskan pola image-led sederhana pada halaman detail dan hindari menambah blok teks panjang yang tidak diminta.

## Goal Codex

Peran kerja:

- Senior frontend engineer
- UI/UX designer

Target:

- Bangun website company profile modern, premium, animated untuk `PT Collaborative Integrated Solutions (CIS)`.
- Posisi brand: `Transformasi Organisasi Berbasis Konsultasi Terintegrasi`.
- Tagline utama: `Menavigasi Masa Depan Bisnis Anda Melalui Sinergi Teknologi, Desain Operasional, & Pengembangan Manusia.`
- Referensi website: `www.ciscorp.co.id`

Karakter website:

- Modern corporate consulting website
- Premium, elegant, clean, professional
- Dominan navy blue, white, gold accent, dan soft blue
- Animasi halus, scroll reveal, floating cards, subtle gradients
- Responsif untuk desktop, tablet, dan mobile
- Bahasa Indonesia untuk seluruh konten
- Profesional korporat, bukan gaya startup yang playful

Tech stack:

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Struktur komponen reusable
- Code bersih dan mudah dirawat

Section minimum yang harus tersedia:

1. Navbar
2. Hero
3. Executive Overview
4. Core Values
5. Expertise
6. Why CIS
7. Ecosystem
8. Proven Experience
9. Services
10. CTA + contact form
11. Footer

Kebutuhan implementasi:

- Simpan konten data dalam array agar mudah diperbarui.
- Gunakan komponen reusable seperti `Navbar.jsx`, `Hero.jsx`, `ExecutiveOverview.jsx`, `CoreValues.jsx`, `Expertise.jsx`, `WhyCIS.jsx`, `Ecosystem.jsx`, `Experience.jsx`, `Services.jsx`, `CTA.jsx`, dan `Footer.jsx`.
- Contact form belum perlu backend; cukup `alert` atau `console.log` saat submit.
- Pastikan `npm install` dan `npm run dev` berjalan tanpa error.
- Sertakan `package.json` dan instruksi instalasi di `README.md`.

## Next Codex Goal

Lakukan review UI dan tingkatkan kualitas visual website agar terasa lebih premium dan enterprise-grade dengan fokus pada:

- spacing yang lebih baik
- hierarchy visual yang lebih kuat
- hero section yang lebih elegan
- responsivitas mobile yang lebih baik
- nuansa consulting website yang premium
- animasi halus tanpa berlebihan
- CTA yang lebih jelas
- palet warna yang konsisten: navy, white, gold, soft blue
- penggantian layout generik menjadi komposisi korporat yang lebih polished

Konten yang ada tidak boleh dihapus. Refactor hanya jika memang diperlukan.
