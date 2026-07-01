# CIS Company Profile

Website company profile untuk PT Collaborative Integrated Solutions yang dibangun dengan React, Vite, Tailwind CSS, Framer Motion, dan Lucide React.

## Menjalankan project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Setup Form Email Untuk Hostinger

Form `Schedule Consultation` sudah disiapkan untuk mengirim ke `support@ciscorp.co.id` melalui endpoint PHP di `public/api/contact.php`.

Langkah setup di Hostinger:

```bash
cd public/api
composer install
```

Lalu:

1. Copy `public/api/config.example.php` menjadi `public/api/config.php`
2. Isi credential SMTP Hostinger untuk mailbox `support@ciscorp.co.id`
3. Pastikan file `vendor/` dari Composer ikut ada di server

SMTP Hostinger yang dipakai:

- Host: `smtp.hostinger.com`
- Port SSL: `465`
- Username: email penuh, mis. `support@ciscorp.co.id`
- Password: password mailbox email

Catatan:

- `public/api/config.php` di-ignore dari git agar credential tidak ikut tersimpan
- Jika endpoint belum dikonfigurasi di server, form akan gagal mengirim dan menampilkan pesan error
