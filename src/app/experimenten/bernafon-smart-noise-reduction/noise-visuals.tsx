"use client";

import { useState } from "react";
import styles from "../bernafon-smart-directionality/page.module.css";

const wave = "M14 45l8 0 7-12 7 24 9-33 9 40 8-23 8 4 9-16 9 28 7-12 10 0";
const noise = "M14 81l5-6 5 9 5-10 5 12 5-7 5 4 5-11 5 14 5-7 5 10 5-10 5 5 5-3 5 7 5-10 5 6 5-6 6 0";

export function NoiseDiagram({ stage, level = 1 }: { stage: "input" | "analysis" | "output"; level?: number }) {
  const output = stage === "output";
  return (
    <svg className={styles.illustration} viewBox="0 0 250 124" role="img" aria-label={
      output ? "De achtergrond klinkt zachter in de schematische weergave" :
        stage === "input" ? "Spraak en achtergrondgeluid komen tegelijk binnen" : "Het toestel schat in welke delen spraak of achtergrondgeluid bevatten"
    }>
      <text x="14" y="19" fill="#17613e" fontSize="12">Spraak</text>
      <text x="14" y="107" fill="#874423" fontSize="12">{output ? "Zachtere achtergrond" : "Achtergrondgeluid"}</text>
      {stage === "analysis" && <rect x="29" y="23" width="61" height="48" rx="5" fill="#d3efe1" stroke="#69a987" strokeDasharray="3 3" />}
      <path d={wave} fill="none" stroke="#17613e" strokeWidth="2.5" transform="scale(2.05 1)" />
      <path d={noise} fill="none" stroke="#a85431" strokeWidth="2" opacity={output ? .6 : 1}
        transform={`translate(0 ${81 * (1 - (output ? level * .42 : level))}) scale(2.05 ${output ? level * .42 : level})`} />
    </svg>
  );
}

const scenes = [
  { label: "Thuis", title: "Praten terwijl de afzuigkap aanstaat", description: "Een gelijkmatig geluid op de achtergrond kan minder op de voorgrond komen. Daardoor kan luisteren rustiger aanvoelen.", level: .7 },
  { label: "In een café", title: "Een gesprek tussen andere tafels", description: "Tussen geroezemoes en uw gesprekspartner kan de verwerking meer contrast proberen te maken. Directionele microfoons kunnen meehelpen als stemmen en rumoer uit verschillende richtingen komen.", level: 1 },
  { label: "Aan een drukke tafel", title: "Meerdere stemmen door elkaar", description: "Andere stemmen lijken op de stem die u wilt volgen. Als mensen tegelijk praten of de ruimte galmt, kan het lastig blijven om iedereen te verstaan.", level: 1.3 },
];

export function NoiseScenes() {
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected];

  return (
    <figure className={styles.demo}>
      <div role="group" aria-label="Kies een luistersituatie" className={styles.sceneControls}>
        {scenes.map(({ label }, index) => (
          <button type="button" key={label} aria-pressed={index === selected} onClick={() => setSelected(index)}>{label}</button>
        ))}
      </div>
      <div className={styles.sceneBody}>
        <div>
          <NoiseDiagram stage="input" level={scene.level} />
          <NoiseDiagram stage="output" level={scene.level} />
        </div>
        <div aria-live="polite"><h3>{scene.title}</h3><p>{scene.description}</p></div>
      </div>
      <figcaption>De golven tonen het principe. Het zijn schematische voorbeelden zonder geluid, meetwaarden of voorspelling van uw resultaat.</figcaption>
    </figure>
  );
}
