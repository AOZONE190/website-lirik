import Link from "next/link";
import Waveform from "./Waveform";

export default function Navbar() {
  return (
    <header className="nav">
      <Link href="/" className="brand display" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Waveform bars={4} />
        <span className="gradient-text">Baper.id</span>
      </Link>
      <nav className="nav-links">
        <Link href="/">Beranda</Link>
        <Link href="/cari">Cari Lagu</Link>
        <Link href="/tentang">Tentang</Link>
      </nav>
    </header>
  );
}