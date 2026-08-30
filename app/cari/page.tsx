"use client";

import { useState } from "react";
import SongCard from "@/components/SongCard";
import { songs } from "@/data/songs";

export default function CariPage() {
  const [query, setQuery] = useState("");

  const hasil = songs.filter((song) => {
    const target = `${song.title} ${song.artist}`.toLowerCase();
    return target.includes(query.toLowerCase());
  });

  return (
    <main>
        <div className="page-glow" aria-hidden="true" />
      <section className="section" style={{ paddingTop: "8vh" }}>
        <h1 className="display" style={{ fontSize: "2rem", marginBottom: 24 }}>
          Cari Lagu
        </h1>
        <input
          type="text"
          className="search-input"
          placeholder="Ketik judul lagu atau nama artis..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        {hasil.length === 0 ? (
          <p className="search-empty">
            Nggak ketemu lagu yang cocok. Coba kata kunci lain.
          </p>
        ) : (
          <div className="song-grid" style={{ marginTop: 32 }}>
            {hasil.map((song) => (
              <SongCard key={song.slug} song={song} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}