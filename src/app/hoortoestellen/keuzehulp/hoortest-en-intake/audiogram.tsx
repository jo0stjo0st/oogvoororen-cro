import styles from "../guide.module.css";

const charts = {
  tone: {
    title: "Voorbeeld van een toonaudiogram",
    description: "Fictieve gehoordrempels van één oor. De drempel loopt op van 15 dB bij 250 Hz tot 55 dB bij 8.000 Hz.",
    xLabel: "Toonhoogte (Hz)",
    yLabel: "Gehoordrempel (dB HL)",
    xTicks: ["250", "500", "1.000", "2.000", "4.000", "8.000"],
    yTicks: [0, 20, 40, 60, 80, 100],
    bounds: [0, 100],
    values: [15, 20, 30, 35, 50, 55],
    caption: "Hoe lager een punt op de grafiek staat, hoe luider de toon op die toonhoogte moest zijn om gehoord te worden.",
  },
  speech: {
    title: "Voorbeeld van een spraakaudiogram",
    description: "Fictieve woordjesscores van één oor, van 0 procent bij 30 dB tot 100 procent bij 80 dB.",
    xLabel: "Geluidsniveau (dB)",
    yLabel: "Woorden goed (%)",
    xTicks: ["30", "40", "50", "60", "70", "80"],
    yTicks: [100, 80, 60, 40, 20, 0],
    bounds: [100, 0],
    values: [0, 10, 35, 65, 90, 100],
    caption: "De lijn laat zien welk deel van de woorden bij elk geluidsniveau goed is verstaan.",
  },
};

export function Audiogram({ kind }: { kind: keyof typeof charts }) {
  const chart = charts[kind];
  const left = 72;
  const right = 424;
  const top = 24;
  const bottom = 194;
  const [upper, lower] = chart.bounds;
  const x = (index: number) => left + ((right - left) * index) / (chart.xTicks.length - 1);
  const y = (value: number) => top + ((bottom - top) * (value - upper)) / (lower - upper);

  return (
    <figure className={styles.audiogram}>
      <div className={styles.audiogramHeading}><strong>{chart.title}</strong><span>Fictieve meting · één oor</span></div>
      <svg viewBox="0 0 460 252" role="img" aria-labelledby={`${kind}-title ${kind}-description`}>
        <title id={`${kind}-title`}>{chart.title}</title>
        <desc id={`${kind}-description`}>{chart.description}</desc>
        <g fill="currentColor" fontSize="14">
          {chart.yTicks.map(value => (
            <g key={value}>
              <line x1={left} x2={right} y1={y(value)} y2={y(value)} stroke="#ceddd6" />
              <text x={left - 9} y={y(value)} dy=".35em" textAnchor="end">{value}</text>
            </g>
          ))}
          {chart.xTicks.map((label, index) => (
            <g key={label}>
              <line x1={x(index)} x2={x(index)} y1={top} y2={bottom} stroke="#ceddd6" />
              <text x={x(index)} y={bottom + 20} textAnchor="middle">{label}</text>
            </g>
          ))}
          <text x={(left + right) / 2} y="242" textAnchor="middle">{chart.xLabel}</text>
          <text transform="translate(18 109) rotate(-90)" textAnchor="middle">{chart.yLabel}</text>
        </g>
        <path d={`M ${left} ${top} V ${bottom} H ${right}`} fill="none" stroke="currentColor" />
        <polyline points={chart.values.map((value, index) => `${x(index)},${y(value)}`).join(" ")} fill="none" stroke="#007d60" strokeWidth="3" />
        {chart.values.map((value, index) => <circle key={index} cx={x(index)} cy={y(value)} r="4.5" fill="white" stroke="#007d60" strokeWidth="2.5" />)}
      </svg>
      <figcaption>{chart.caption}</figcaption>
    </figure>
  );
}
