import Waveform from "@/components/Waveform";

export default function TentangPage() {
  return (
    <main>
        <div className="page-glow" aria-hidden="true" />
      <section className="section" style={{ paddingTop: "8vh" }}>
        <div className="kicker">Tentang Kami</div>
        <h1
          className="display gradient-text"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: 24 }}
        >
          Kenapa Baper.id Ada
        </h1>
        <p style={{ maxWidth: "60ch", color: "var(--text-soft)", fontSize: "1.1rem" }}>
          Kami percaya, hal paling menarik dari sebuah lagu bukan cuma
          liriknya — tapi cerita di baliknya. Kenapa satu baris bisa nempel
          banget di kepala, dari mana inspirasinya datang, dan kenapa lagu
          yang sama bisa punya arti berbeda buat tiap orang.
        </p>
      </section>

      <section className="section">
        <div className="makna-box" style={{ margin: 0 }}>
          <h2>
            <Waveform bars={4} />
            Kenapa Nggak Ada Lirik Lengkap?
          </h2>
          <p>
            Lirik lagu itu karya berhak cipta milik penulis dan labelnya.
            Menampilkan lirik lengkap tanpa lisensi resmi — sekalipun gratis
            dan niatnya baik — tetap melanggar hak cipta.
          </p>
          <p>
            Karena itu, Baper.id sengaja fokus ke analisis makna dan diskusi,
            bukan menyalin lirik. Kalau suatu saat kami menambahkan cuplikan
            lirik, itu akan lewat kerja sama resmi dengan penyedia yang
            berlisensi — bukan tempelan asal comot.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="makna-box" style={{ margin: 0 }}>
          <h2>
            <Waveform bars={4} />
            Semua Genre, Semua Bahasa
          </h2>
          <p>
            Baper.id nggak membatasi diri ke satu genre atau bahasa tertentu.
            Pop, indie, dangdut, hip-hop, lagu daerah — semua punya cerita
            yang layak dibahas, dengan gaya bahasa yang santai dan apa
            adanya, bukan kaku ala ensiklopedia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="makna-box" style={{ margin: 0 }}>
          <h2>
            <Waveform bars={4} />
            Ada Masukan?
          </h2>
          <p>
            Baper.id masih tahap awal banget. Kalau ada ide fitur, masukan,
            atau nemu sesuatu yang aneh di sini, kabarin aja lewat kontak yang
            tertera di footer.
          </p>
        </div>
      </section>
    </main>
  );
}