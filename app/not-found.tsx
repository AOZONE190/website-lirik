import Link from "next/link";
import Waveform from "@/components/Waveform";

export default function NotFound() {
  return (
    <main>
      <div className="page-glow" aria-hidden="true" />
      <section
        className="section"
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Waveform bars={7} size="lg" />
        <h1
          className="display gradient-text"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", margin: "24px 0 12px" }}
        >
          404
        </h1>
        <p style={{ color: "var(--text-soft)", fontSize: "1.1rem", marginBottom: 32, maxWidth: "40ch" }}>
          Lagunya nggak ketemu, atau mungkin halamannya emang belum ada.
        </p>
        <Link href="/" className="btn btn-solid">
          Balik ke Beranda
        </Link>
      </section>
    </main>
  );
}