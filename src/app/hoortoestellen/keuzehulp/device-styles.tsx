import Image from "next/image";
import styles from "./guide.module.css";

const cdn = "https://cdn.signia.net/-/media/signia/global/images/products/signia-ix/";

const devices = [
  {
    src: cdn + "silk-chargego-ix/silk-charge-go-ix_black_pair_shadow_1920x1080.jpg?extension=webp&h=1080&hash=89948E418445C8A7BE22A1CDCBD6A12B&rev=fa9eaa3aacae44fcbc80445919affb8a&w=1920",
    model: "Signia Silk Charge&Go IX", nl: "Ready-fit CIC", fr: "CIC prêt à porter",
    nlDetail: "Standaardmodel in de gehoorgang", frDetail: "Modèle standard dans le conduit",
  },
  {
    src: cdn + "insio-ix/insio-ix_iic_black_pair_side_1920x1080.jpg?extension=webp&hash=D3BCA12702B52B8C4DC9E09B2680DFB6&rev=b5eb2cc5e56c4a098305261e65ac6f66",
    model: "Signia Insio IIC IX", nl: "Maatwerk IIC", fr: "IIC sur mesure",
    nlDetail: "Op maat, diep in de gehoorgang", frDetail: "Sur mesure, au fond du conduit",
  },
  {
    src: "/assets/phonak-i90.webp",
    model: "Phonak Audéo Infinio", nl: "LIHO", fr: "Écouteur déporté (RIC)",
    nlDetail: "Luidspreker in het oor", frDetail: "Écouteur dans l’oreille",
  },
  {
    src: cdn + "motion-chargego-ix/motion-charge-go-ix_family_1920x1080.jpg?extension=webp&h=1080&hash=05E012A4A1591A6B0B978DAD5BBF7A22&rev=971686b5651c4585819f026d205a8ff3&w=1920",
    model: "Signia Motion Charge&Go IX", nl: "AHO", fr: "Contour d’oreille (BTE)",
    nlDetail: "Achter het oor, met slangetje", frDetail: "Derrière l’oreille, avec un tube",
  },
  {
    src: cdn + "styletto-ix/styletto-ix_black_silver_double_1920x1080.jpg?extension=webp&h=1080&hash=C294986214E7D716AA9249610904AFC3&rev=83f6994bb6d14c699633afac36ff36ce&w=1920",
    model: "Signia Styletto IX", nl: "Design-LIHO", fr: "RIC au design fin",
    nlDetail: "Slanke variant van een LIHO", frDetail: "Version plus fine d’un RIC",
  },
];

export function DeviceStyles({ locale = "nl" }: { locale?: "nl" | "fr" }) {
  const fr = locale === "fr";
  return (
    <figure className={styles.deviceStyles}>
      <ol aria-label={fr ? "Cinq exemples de formes" : "Vijf voorbeelden van draagvormen"}>
        {devices.map(device => (
          <li key={device.model}>
            <Image unoptimized src={device.src} alt="" width={320} height={180} />
            <strong>{device[locale]}</strong>
            <span>{fr ? device.frDetail : device.nlDetail}</span>
            <small>{device.model}</small>
          </li>
        ))}
      </ol>
      <figcaption>{fr ? "Exemples de modèles. Les photos ne sont pas à la même échelle." : "Voorbeeldmodellen. De foto’s staan niet op dezelfde schaal."}</figcaption>
    </figure>
  );
}
