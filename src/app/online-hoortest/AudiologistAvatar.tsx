"use client";
import Image from "next/image";
type Pose="intro"|"goals"|"setup"|"tones"|"results";
const accessories:Record<Pose,string>={intro:"👋",goals:"📝",setup:"🎧",tones:"♫",results:"✓"};
export default function AudiologistAvatar({pose="intro",speaking=false}:{pose?:Pose;speaking?:boolean}){
 return <div className={`ht-avatar-figure ht-avatar-${pose}${speaking?" is-speaking":""}`} role="img" aria-label="Vriendelijke 3D-cartoon audicien met donker haar en witte Oogvoororen-polo">
  <Image src="/images/audicien-3d.svg" alt="" width={150} height={230} unoptimized priority className="ht-avatar-portrait"/>
  <span className="ht-avatar-accessory" aria-hidden="true">{accessories[pose]}</span>
 </div>;
}
