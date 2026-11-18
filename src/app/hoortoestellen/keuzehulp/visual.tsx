import Image from "next/image";
import styles from "./guide.module.css";

export const guidePhotos = {
  consult: "/assets/audicien.webp",
  test: "https://cdn.oogvoororen.nl/MFFSwTgW7xbsf2gcxH0UokxMywsFI72s4Mx9KKSB-800.webp",
  device: "/assets/phonak-i90.webp",
  trial: "/images/homepage-hero.png",
  followup: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
};

export function GuideVisual({ src, hero = false }: { src: string; hero?: boolean }) {
  return (
    <div className={hero ? styles.heroVisual : styles.chapterVisual}>
      <Image src={src} alt="" fill unoptimized={src.startsWith("https://")} sizes={hero ? "(max-width: 730px) 100vw, 500px" : "(max-width: 480px) 100vw, 160px"} loading={hero ? "eager" : "lazy"} />
    </div>
  );
}
