"use client";

import { useState } from "react";
import type { Diagram } from "@/features/products/bernafon-feature-content";
import styles from "../../bernafon-smart-directionality/page.module.css";

const green = "#17613e";
const orange = "#a85431";
const blue = "#1c3549";
const names: Record<Diagram, string> = {
  focus: "Nadruk op één spreker", turn: "U draait naar een andere spreker", group: "Bredere aandacht voor een groepsgesprek",
  peak: "Korte geluidspiek", detect: "Herkenning van de geluidspiek", soften: "De geluidspiek wordt zachter",
  notes: "Verschillende muzikale lagen", music: "Het Music Experience-programma", stream: "Muziek via uw hoorapparaten",
  ring: "Oorsuizen valt op in stilte", support: "Een ingesteld achtergrondgeluid", balance: "Oorsuizen en toegevoegd geluid naast elkaar",
};

function Person({ x, y, fill = green }: { x: number; y: number; fill?: string }) {
  return <g transform={`translate(${x} ${y})`} fill={fill}><circle cy="-5" r="8" /><path d="M-12 15a12 12 0 0 1 24 0Z" /></g>;
}

export function FeatureVisual({ diagram }: { diagram: Diagram }) {
  const directional = ["focus", "turn", "group"].includes(diagram);
  const transient = ["peak", "detect", "soften"].includes(diagram);
  const music = ["notes", "music", "stream"].includes(diagram);

  return (
    <svg className={styles.illustration} viewBox="0 0 260 145" role="img" aria-label={names[diagram]}>
      {directional ? (
        <>
          <path d={diagram === "group" ? "M130 105 47 44Q130 0 213 44Z" : diagram === "turn" ? "M130 105 174 31Q198 36 218 58Z" : "M130 105 106 27Q130 12 154 27Z"} fill="#d3efe1" stroke="#69a987" strokeDasharray="4 3" />
          <Person x={130} y={35} /><Person x={198} y={49} /><Person x={62} y={49} /><Person x={130} y={108} fill={blue} />
          {diagram === "turn" && <path d="M136 84q18-6 31 2m-8-7 8 7-10 3" fill="none" stroke={green} strokeWidth="2" />}
          <text x="130" y="137" textAnchor="middle" fill={blue} fontSize="12">U</text>
        </>
      ) : transient ? (
        <>
          {diagram === "detect" && <rect x="113" y="22" width="34" height="79" rx="5" fill="#fce8cf" stroke={orange} strokeDasharray="4 3" />}
          <path d="M16 99H244" stroke="#9cafa3" />
          <path d={`M16 91l20-4 14 6 18-5 15 3 23-4 13 3 10 ${diagram === "soften" ? "-24" : "-65"} 10 ${diagram === "soften" ? "24" : "65"} 20 1 21-5 25 5 18-4 21 4`} fill="none" stroke={orange} strokeWidth="2.5" />
          <text x="130" y="126" textAnchor="middle" fill={blue} fontSize="13">{names[diagram]}</text>
        </>
      ) : music ? (
        <>
          {diagram === "music" && <rect x="34" y="24" width="192" height="81" rx="10" fill="#d3efe1" stroke="#69a987" />}
          {[green, blue, orange].map((color, i) => <path key={color} d={`M49 ${43+i*22}q13-12 27 0t27 0t27 0t27 0t27 0t27 0`} fill="none" stroke={color} strokeWidth={2+i*.4} strokeDasharray={diagram === "stream" && i === 2 ? "4 3" : undefined} />)}
          <text x="130" y="126" textAnchor="middle" fill={blue} fontSize="13">{names[diagram]}</text>
        </>
      ) : (
        <>
          <path d="M26 63l15-5 10 8 11-8 11 5 10-8 12 11 11-8 12 5 12-8 12 11 12-8 12 5 12-8 12 11 12-8 12 5 12-8 12 6" fill="none" stroke={orange} strokeWidth="2" />
          {diagram !== "ring" && <path d="M26 87q13-15 26 0t26 0t26 0t26 0t26 0t26 0t26 0t26 0" fill="none" stroke={green} strokeWidth={diagram === "support" ? 3 : 2} />}
          <text x="130" y="126" textAnchor="middle" fill={blue} fontSize="12">{names[diagram]}</text>
        </>
      )}
    </svg>
  );
}

export function FeatureScenes({ scenes }: { scenes: { title: string; text: string; diagram: Diagram }[] }) {
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected];
  return (
    <figure className={styles.demo}>
      <div className={styles.sceneControls} role="group" aria-label="Kies een voorbeeld">
        {scenes.map(({ title }, i) => <button key={title} type="button" aria-pressed={i === selected} onClick={() => setSelected(i)}>{title}</button>)}
      </div>
      <div className={styles.sceneBody} aria-live="polite">
        <FeatureVisual diagram={scene.diagram} />
        <div><h3>{scene.title}</h3><p>{scene.text}</p></div>
      </div>
      <figcaption>Schematische illustratie, zonder audio of meetwaarden.</figcaption>
    </figure>
  );
}
