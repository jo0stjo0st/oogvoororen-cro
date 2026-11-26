import styles from "./page.module.css";

const descriptions = {
  1: "Geluid komt van voren en opzij bij de microfoons binnen.",
  2: "De stem voor u krijgt meer nadruk dan het geroezemoes opzij.",
  3: "Als u zich naar een andere spreker draait, kan Smart Sensor de luisterrichting helpen aanpassen.",
};

function Person({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="#17613e">
      <circle cy="-4" r="7" />
      <path d="M-10 14a10 10 0 0 1 20 0Z" />
    </g>
  );
}

export function DirectionalityIllustration({ step }: { step: 1 | 2 | 3 }) {
  return (
    <svg className={styles.illustration} viewBox="0 0 260 150" role="img" aria-label={descriptions[step]}>
      {step === 1 && (
        <g fill="none" stroke="#69a987" strokeWidth="2">
          <path d="M52 54 95 97m-10-3 10 3-3-10M208 54l-43 43m3-10-3 10 10-3M130 47v34m-5-6 5 6 5-6" />
        </g>
      )}
      {step === 2 && (
        <path d="M130 119 99 22Q130 8 161 22Z" fill="#d3efe1" stroke="#69a987" strokeDasharray="4 3" />
      )}
      {step === 3 && (
        <>
          <path d="M130 119 101 22Q130 8 159 22Z" fill="none" stroke="#69a987" strokeDasharray="4 3" />
          <path d="M130 119 184 29Q209 35 224 65Z" fill="#d3efe1" stroke="#69a987" />
          <path d="M132 89q19-2 28 13m-8-2 8 2-1-8" fill="none" stroke="#17613e" strokeWidth="2" />
        </>
      )}
      <Person x={130} y={29} />
      {step !== 2 && <Person x={216} y={45} />}
      {step === 1 && <Person x={44} y={45} />}
      {step === 2 && (
        <g fill="#a85431">
          <circle cx="47" cy="75" r="4" /><circle cx="60" cy="66" r="3" /><circle cx="33" cy="66" r="3" />
          <circle cx="213" cy="75" r="4" /><circle cx="226" cy="66" r="3" /><circle cx="200" cy="66" r="3" />
        </g>
      )}
      <circle cx="130" cy="113" r="12" fill="#1c3549" />
      <circle cx="115" cy="112" r="3" fill="#69a987" />
      <circle cx="145" cy="112" r="3" fill="#69a987" />
      <text x="130" y="142" textAnchor="middle" fill="#1c3549" fontSize="13">U</text>
    </svg>
  );
}
