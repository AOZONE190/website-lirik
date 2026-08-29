import HeroOrb from "@/components/HeroOrb";
import Waveform from "@/components/Waveform";
import SongCard from "@/components/SongCard";
import { songs } from "@/data/songs";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
  <div className="hero-text">
    <div className="eyebrow">
      <Waveform bars={5} />
      Bukan cuma lirik — ini soal makna di baliknya
    </div>
    <h1>
      Kupas <span className="gradient-text">makna lagu</span>, bukan cuma
      baca liriknya
    </h1>
    <p className="lede">
      Baper.id itu tempat buat ngobrolin arti sebuah lagu, dari mana
      inspirasinya datang, sampai kenapa satu baris liriknya bisa nempel
      banget di kepala. Semua genre, semua bahasa.
    </p>
    <a href="#trending" className="btn btn-solid">
      Jelajahi Lagu
    </a>
  </div>
  <div className="hero-visual">
    <HeroOrb />
  </div>
</section>

      <section className="section" id="trending">
        <div className="section-head">
          <h2>Lagi Rame Dibahas</h2>
          <span className="see-all">Lihat semua</span>
        </div>
        <div className="song-grid">
          {songs.map((song) => (
            <SongCard key={song.slug} song={song} />
          ))}
        </div>
      </section>
    </main>
  );
}