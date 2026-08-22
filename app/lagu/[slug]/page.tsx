import { notFound } from "next/navigation";
import Waveform from "@/components/Waveform";
import { songs, getSongBySlug } from "@/data/songs";

// Next.js butuh tau slug apa aja yang valid di-generate sebagai halaman statis
export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export default function SongDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const song = getSongBySlug(params.slug);
  if (!song) return notFound();

  const [from, to] = song.gradient;

  return (
    <main>
      <div className="song-hero">
        <div
          className="cover-big"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <Waveform bars={9} size="lg" />
        </div>
        <div>
          <div className="kind">{song.genre}</div>
          <h1>{song.title}</h1>
          <div className="artist-line">{song.artist}</div>
          <div className="meta-row">
            <span>
              Rilis <strong>{song.tahun}</strong>
            </span>
            <span>
              Rating <strong>★ {song.rating.toFixed(1)}</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="makna-box">
        <h2>
          <Waveform bars={4} />
          Makna & Konteks
        </h2>
        {song.makna.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <h2>Obrolan Pendengar</h2>
        </div>
        <div className="discussion-list">
          {song.komentar.map((c, i) => (
            <div className="discussion-item" key={i}>
              <div className="head">
                <span className="user">{c.user}</span>
                <span className="time">{c.time}</span>
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}