# Baper.id

Platform diskusi & analisis makna lagu — bukan situs lirik. Fokusnya ngobrolin
arti sebuah lagu, konteks di baliknya, dan diskusi pendengar. Semua genre,
semua bahasa, gaya bahasa santai & lokal.

## Kenapa Project Ini Ada

Awalnya ide project ini terinspirasi dari Genius.com. Tapi Genius bisa
nampilin lirik lengkap karena mereka punya **lisensi resmi** dari label musik
(lewat LyricFind/Musixmatch). Baper.id belum punya lisensi itu, jadi sengaja
**tidak menampilkan lirik lengkap** — fokusnya di analisis makna & diskusi.

Kalau nanti mau nambah cuplikan lirik, opsi resmi yang ada:
- **Musixmatch API tier gratis** → cuma boleh nampilin 30% awal lirik
  (preview), bukan lirik penuh. Lirik penuh & auto-translate butuh
  **lisensi komersial berbayar**.
- Jangan pernah pakai wrapper/scraper yang "membypass" batasan itu — itu
  pelanggaran, bukan celah legal.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- Styling: CSS biasa di `app/globals.css` (belum pakai Tailwind/library CSS)
- Data: masih **dummy/fiktif** semua (lagu, artis, komentar) — belum ada
  database atau backend beneran

## Struktur Folder

```
app/
├── page.tsx              → Beranda (/)
├── layout.tsx            → Layout utama (Navbar + footer nempel di semua halaman)
├── globals.css           → Semua styling
├── cari/
│   └── page.tsx          → Halaman Cari Lagu (/cari) — client component, ada search filter
├── tentang/
│   └── page.tsx          → Halaman Tentang (/tentang)
└── lagu/
    └── [slug]/
        └── page.tsx      → Halaman detail lagu (/lagu/apapun) — dynamic route

components/
├── Navbar.tsx
├── SongCard.tsx           → Kartu lagu buat grid (dipakai di Beranda & Cari)
├── Waveform.tsx           → Elemen visual khas (garis-garis suara), dipakai berulang
└── HeroOrb.tsx             → Ilustrasi bola cahaya di hero Beranda

data/
└── songs.ts                → Data lagu fiktif (title, artist, rating, makna, komentar)
```

**Penting soal `page.tsx`:** namanya selalu sama di semua folder, tapi
foldernya yang nentuin alamat URL-nya. Kalau mau bikin halaman baru, bikin
folder baru di `app/` sesuai nama alamat yang diinginkan, baru taro
`page.tsx` di dalamnya.

## Fitur yang Udah Jalan

- [x] Beranda dengan hero + grid lagu trending
- [x] Halaman detail lagu (dynamic route `[slug]`) — makna/konteks + komentar dummy
- [x] Halaman Cari Lagu — filter real-time by judul/artis (client-side, belum ada backend)
- [x] Halaman Tentang — jelasin filosofi & alasan gak ada lirik lengkap

## Belum Dikerjain / Next Steps

- [ ] Halaman 404 custom (masih tampilan default putih Next.js, belum sesuai tema dark)
- [ ] Interaksi di halaman detail lagu (like/upvote komentar, form kirim komentar baru)
- [ ] Data lagu masih hardcoded di `data/songs.ts` — belum ada database
- [ ] Belum di-deploy/push final ke GitHub secara rutin

## Cara Jalanin di Lokal

```bash
npm run dev
```

**PENTING:** buka selalu lewat `http://localhost:3000`, JANGAN pakai alamat
IP jaringan (`10.x.x.x:3000`). Kalau pakai IP jaringan, fitur interaktif
(kayak search) bisa nggak jalan sama sekali karena Next.js mem-block resource
dev dari origin yang nggak dikenal (`allowedDevOrigins`). Kalau IP jaringan
laptop berubah (pindah WiFi) dan maksa pakai IP, itu next.config.ts perlu
diupdate manual tiap kali — makanya `localhost` jauh lebih simpel.

## Catatan Gotcha yang Pernah Kejadian

- **Next.js 15 mengubah `params` jadi Promise** — kalau bikin halaman dynamic
  baru, function-nya harus `async` dan pakai `const { slug } = await params;`
  bukan langsung `params.slug`.
- **`next.config.ts` butuh restart server penuh** (Ctrl+C, `npm run dev`
  lagi) — beda dari file lain yang auto-reload.