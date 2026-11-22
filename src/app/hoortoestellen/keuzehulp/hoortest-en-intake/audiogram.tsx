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

const frenchLabels = {
  tone: {
    title: "Exemple d’audiogramme tonal",
    description: "Seuils fictifs pour une oreille, de 15 dB à 250 Hz à 55 dB à 8 000 Hz.",
    xLabel: "Fréquence (Hz)",
    yLabel: "Seuil auditif (dB HL)",
    caption: "Plus un point est bas sur le graphique, plus le son devait être fort pour être entendu à cette fréquence.",
  },
  speech: {
    title: "Exemple d’audiogramme vocal",
    description: "Scores fictifs pour une oreille, de 0 % de mots compris à 30 dB à 100 % à 80 dB.",
    xLabel: "Niveau sonore (dB)",
    yLabel: "Mots compris (%)",
    caption: "La courbe indique la proportion de mots correctement compris à chaque niveau sonore.",
  },
};

// Indicative positions from familiar-sounds audiograms, not fixed levels for real sounds.
const familiarSounds = [
  { icon: "💧", hz: 320, level: 15, nl: "Druppelende kraan", fr: "Robinet qui goutte" },
  { icon: "🐕", hz: 350, level: 68, nl: "Blaffende hond", fr: "Chien qui aboie" },
  { icon: "💬", hz: 1000, level: 46, nl: "Gesprek dichtbij", fr: "Conversation à proximité" },
  { icon: "🧒", hz: 2000, level: 19, nl: "Kinderstem", fr: "Voix d’enfant" },
  { icon: "🤫", hz: 4000, level: 20, nl: "Fluisteren", fr: "Chuchotement" },
  { icon: "🐦", hz: 7500, level: 9, nl: "Vogelgekwetter", fr: "Chant d’oiseaux" },
];

export function Audiogram({ kind, locale = "nl" }: { kind: keyof typeof charts; locale?: "nl" | "fr" }) {
  const chart = charts[kind];
  const isTone = kind === "tone";
  const fr = locale === "fr";
  const labels = locale === "fr" ? frenchLabels[kind] : chart;
  const left = 72;
  const right = 424;
  const top = 24;
  const bottom = 194;
  const [upper, lower] = chart.bounds;
  const x = (index: number) => left + ((right - left) * index) / (chart.xTicks.length - 1);
  const y = (value: number) => top + ((bottom - top) * (value - upper)) / (lower - upper);

  const curve = chart.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");

  return (
    <figure className={styles.audiogram}>
      <div className={styles.audiogramHeading}><strong>{labels.title}</strong><span>{locale === "fr" ? "Mesure fictive · une oreille" : "Fictieve meting · één oor"}</span></div>
      <svg viewBox="0 0 460 252" role="img" aria-labelledby={`${kind}-title ${kind}-description`}>
        <title id={`${kind}-title`}>{labels.title}</title>
        <desc id={`${kind}-description`}>{labels.description}</desc>
        {isTone && <polygon points={`${left},${top} ${right},${top} ${curve.split(" ").reverse().join(" ")}`} fill="#fce8cf" />}
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
              <text x={x(index)} y={bottom + 20} textAnchor="middle">{locale === "fr" ? label.replace(".", " ") : label}</text>
            </g>
          ))}
          <text x={(left + right) / 2} y="242" textAnchor="middle">{labels.xLabel}</text>
          <text transform="translate(18 109) rotate(-90)" textAnchor="middle">{labels.yLabel}</text>
        </g>
        <path d={`M ${left} ${top} V ${bottom} H ${right}`} fill="none" stroke="currentColor" />
        <polyline points={curve} fill="none" stroke="#007d60" strokeWidth="3" />
        {chart.values.map((value, index) => <circle key={index} cx={x(index)} cy={y(value)} r="4.5" fill="white" stroke="#007d60" strokeWidth="2.5" />)}
        {isTone ? familiarSounds.map(sound => (
          <g key={sound.nl} transform={`translate(${x(Math.log2(sound.hz / 250))} ${y(sound.level)})`} aria-hidden="true">
            <title>{sound[locale]}</title>
            <circle r="12" fill="white" stroke="#53665b" />
            <text textAnchor="middle" dy=".35em" fontSize="15">{sound.icon}</text>
          </g>
        )) : [2, 3, 4].map(index => (
          <g key={index} transform={`translate(${x(index)} ${y(chart.values[index])})`} aria-hidden="true">
            <path d="M0 -5 V-12" stroke="#007d60" />
            <rect x="-25" y="-31" width="50" height="19" rx="5" fill="white" stroke="#007d60" />
            <text textAnchor="middle" y="-17" fontSize="12" fill="#17452e">{chart.values[index]} %</text>
          </g>
        ))}
      </svg>
      <figcaption>
        {labels.caption}
        {isTone && (
          <>
            <ul className={styles.soundLegend} aria-label={fr ? "Exemples de sons" : "Voorbeeldgeluiden"}>
              {familiarSounds.map(sound => (
                <li key={sound.nl}><span aria-hidden="true">{sound.icon}</span> {sound[locale]}</li>
              ))}
            </ul>
            <span>{fr
              ? "Dans cet exemple, les sons dans la zone colorée, au-dessus de la courbe, risquent de passer inaperçus. Il peut aussi être plus difficile de comprendre un enfant. Les positions sont indicatives : un son réel varie selon la distance et la situation."
              : "Geluiden in het gekleurde vlak boven de lijn kunnen in dit voorbeeld onopgemerkt blijven. Ook een kind verstaan kan lastiger worden. De plaats van elk icoon is indicatief: afstand en situatie maken verschil."}</span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
