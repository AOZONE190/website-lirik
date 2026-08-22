export type Comment = {
  user: string;
  time: string;
  text: string;
};

export type Song = {
  slug: string;
  title: string;
  artist: string;
  genre: string;
  tahun: string;
  rating: number;
  gradient: [string, string];
  makna: string[];
  komentar: Comment[];
};

// Semua lagu & artis di bawah ini FIKTIF (rekaan) — dibuat untuk keperluan
// demo/portfolio, bukan lagu asli. Belum ada integrasi API lirik berlisensi.
export const songs: Song[] = [
  {
    slug: "rindu-di-ujung-senja",
    title: "Rindu di Ujung Senja",
    artist: "Larasati",
    genre: "Pop Melankolis",
    tahun: "2024",
    rating: 4.6,
    gradient: ["#B14EFF", "#FF4D8D"],
    makna: [
      "Lagu ini bercerita tentang rasa rindu yang datang justru saat semua terlihat baik-baik saja — di penghujung hari yang tenang, bukan di tengah krisis.",
      "Larasati menulis lagu ini setelah pindah kota untuk kerja, dan liriknya banyak merujuk ke rutinitas kecil yang ternyata paling dirindukan: obrolan singkat, bukan momen besar.",
      "Bagian bridge sering dianggap paling kuat karena pergeseran sudut pandang dari 'aku' ke 'kita', seolah rindu itu akhirnya diakui berdua.",
    ],
    komentar: [
      { user: "senja_kelabu", time: "2 hari lalu", text: "Tiap denger bagian bridge-nya selalu kena banget, entah kenapa." },
      { user: "kopi_pagi", time: "5 hari lalu", text: "Ini lagu yang pas didengerin pas naik motor sore-sore." },
    ],
  },
  {
    slug: "malam-tanpa-bintang",
    title: "Malam Tanpa Bintang",
    artist: "Kirana & The Waves",
    genre: "Indie Folk",
    tahun: "2023",
    rating: 4.8,
    gradient: ["#FF4D8D", "#FFB800"],
    makna: [
      "Ditulis bersama sebagai respons atas malam-malam insomnia, lagu ini menghindari metafora rumit dan memilih gambaran yang sangat konkret: jam dinding, ponsel yang menyala, langit-langit kamar.",
      "Yang membuat lagu ini beda dari lagu galau kebanyakan adalah nada musiknya yang justru riang — kontras sengaja antara musik dan lirik.",
    ],
    komentar: [
      { user: "malam_panjang", time: "1 minggu lalu", text: "Kontras antara musik ceria sama liriknya itu yang bikin unik menurut gua." },
    ],
  },
  {
    slug: "jalan-pulang",
    title: "Jalan Pulang",
    artist: "Denny Kusuma",
    genre: "Akustik",
    tahun: "2022",
    rating: 4.3,
    gradient: ["#22C55E", "#B14EFF"],
    makna: [
      "'Jalan Pulang' bukan tentang pulang ke rumah secara harfiah, tapi tentang proses berdamai dengan diri sendiri setelah masa sulit.",
      "Denny menyebut dalam beberapa wawancara bahwa lagu ini terinspirasi dari perjalanan pribadinya memulihkan hubungan dengan keluarga.",
    ],
    komentar: [
      { user: "pejalan_sunyi", time: "3 hari lalu", text: "Simple tapi dalem liriknya, salah satu favorit gua tahun ini." },
      { user: "anak_gitar", time: "6 hari lalu", text: "Chord-nya juga enak buat dimainin ulang di rumah." },
    ],
  },
  {
    slug: "gemerlap-kota",
    title: "Gemerlap Kota",
    artist: "Nadira",
    genre: "Synth Pop",
    tahun: "2024",
    rating: 4.1,
    gradient: ["#FFB800", "#FF4D8D"],
    makna: [
      "Lagu ini menggambarkan kehidupan kota besar dari sudut pandang orang yang baru pindah — antara kagum dan kewalahan.",
      "Produksinya sengaja dibuat maksimalis dengan banyak lapisan synth untuk mencerminkan 'ramainya' kota yang diceritakan.",
    ],
    komentar: [
      { user: "urban_wanderer", time: "4 hari lalu", text: "Produksinya rame banget tapi tetep enak didenger, salut." },
    ],
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find((s) => s.slug === slug);
}