import Link from "next/link";
import Waveform from "./Waveform";
import type { Song } from "@/data/songs";

export default function SongCard({ song }: { song: Song }) {
  const [from, to] = song.gradient;

  return (
    <Link href={`/lagu/${song.slug}`} className="song-card">
      <div
        className="cover"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <Waveform bars={7} />
      </div>
      <div className="body">
        <div className="title">{song.title}</div>
        <div className="artist">{song.artist}</div>
        <div className="rating">★ {song.rating.toFixed(1)}</div>
      </div>
    </Link>
  );
}