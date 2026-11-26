"use client";

import { useState } from "react";
import styles from "./page.module.css";

const scenes = [
  {
    label: "Rustig gesprek",
    title: "Aan tafel thuis",
    description: "Als het rustig is, blijft omgevingsgeluid relevant. U wilt de persoon tegenover u verstaan en ook horen dat iemand naast u iets zegt.",
    speakers: [{ x: 150, y: 43 }, { x: 58, y: 109 }, { x: 242, y: 109 }],
    focus: "M150 160 L30 53 Q150 -12 270 53 Z",
    noise: false,
  },
  {
    label: "Gesprek in rumoer",
    title: "Eén gesprek in een druk café",
    description: "De persoon voor u praat terwijl andere tafels geroezemoes maken. Directionaliteit kan helpen om geluid vanuit andere richtingen minder nadruk te geven.",
    speakers: [{ x: 150, y: 43 }],
    focus: "M150 160 L103 35 Q150 8 197 35 Z",
    noise: true,
  },
  {
    label: "Groepsgesprek",
    title: "Verschillende mensen nemen het woord",
    description: "In een groep wisselt de spreker. Op de Encanta 300 en 400 kan Smart Sensor beweging gebruiken om de richting en de rumoeronderdrukking automatisch bij te stellen.",
    speakers: [{ x: 150, y: 43 }, { x: 69, y: 83 }, { x: 231, y: 83 }],
    focus: "M150 160 L40 55 Q150 -8 260 55 Z",
    noise: true,
  },
];

export function ListeningScenes() {
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected];

  return (
    <figure className={styles.demo}>
      <div className={styles.sceneControls} role="group" aria-label="Kies een luistersituatie">
        {scenes.map(({ label }, index) => (
          <button type="button" key={label} aria-pressed={selected === index} onClick={() => setSelected(index)}>
            {label}
          </button>
        ))}
      </div>
      <div className={styles.sceneBody}>
        <svg viewBox="0 0 300 210" role="img" aria-label={`Schematisch beeld van: ${scene.title}`}>
          <path d={scene.focus} fill="#d3efe1" stroke="#69a987" strokeDasharray="4 3" />
          {scene.noise && [[29, 135], [271, 135], [75, 178], [225, 178]].map(([x, y]) => (
            <g key={x} fill="#a85431" opacity=".65">
              <circle cx={x} cy={y} r="4" />
              <circle cx={x + 11} cy={y - 5} r="3" />
              <circle cx={x - 10} cy={y - 8} r="3" />
            </g>
          ))}
          {scene.speakers.map(({ x, y }) => (
            <g key={x} fill="#17613e" transform={`translate(${x} ${y})`}>
              <circle r="9" />
              <path d="M-13 19a13 13 0 0 1 26 0Z" />
            </g>
          ))}
          <circle cx="150" cy="160" r="12" fill="#1c3549" />
          <path d="M132 186a18 18 0 0 1 36 0Z" fill="#1c3549" />
          <text x="150" y="206" textAnchor="middle" fill="#1c3549" fontSize="13">U</text>
        </svg>
        <div aria-live="polite">
          <h3>{scene.title}</h3>
          <p>{scene.description}</p>
          <ul className={styles.legend}>
            <li><span className={styles.speaker} /> Gesprekspartner</li>
            <li><span className={styles.noise} /> Achtergrondgeluid</li>
            <li><span className={styles.focus} /> Gebied met meer nadruk</li>
          </ul>
        </div>
      </div>
      <figcaption>Vereenvoudigde illustratie. De groene zone toont het principe en geeft geen gemeten microfoonpatroon weer.</figcaption>
    </figure>
  );
}
