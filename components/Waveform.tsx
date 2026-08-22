// Komponen "waveform" — elemen visual khas platform ini, dipakai berulang
// sebagai aksen (bukan cuma dekorasi random) karena temanya musik/suara.
export default function Waveform({
  bars = 5,
  size = "sm",
}: {
  bars?: number;
  size?: "sm" | "lg";
}) {
  const heights =
    size === "lg"
      ? [14, 26, 18, 30, 16, 22, 12]
      : [6, 12, 8, 14, 7, 10, 5];

  const values = Array.from({ length: bars }, (_, i) => heights[i % heights.length]);

  return (
    <span className="waveform" aria-hidden="true">
      {values.map((h, i) => (
        <span key={i} style={{ height: h }} />
      ))}
    </span>
  );
}