import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/hoortoestellen/keuzehulp/guide.module.css";

export const metadata: Metadata = {
  title: "Remboursement des appareils auditifs aux Pays-Bas | Oogvoororen",
  description: "Comprendre le remboursement, la participation légale et la franchise annuelle aux Pays-Bas.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p><Link href="/fr/guide-auditif/choisir-ses-appareils#prix">← Retour aux prix dans le guide</Link></p>
          <h1>Remboursement des appareils auditifs aux Pays-Bas</h1>
          <p>Oogvoororen a des accords avec tous les assureurs maladie néerlandais. Lors du rendez-vous, nous examinons avec vous quels appareils vous conviennent et ce que vous paierez.</p>
          <a className={styles.action} href="#afspraak">Prendre rendez-vous sans engagement →</a>
        </div>
      </section>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Sommaire des remboursements">
          <strong>Sur cette page</strong>
          <ol>
            <li><a href="#assurance-de-base">Assurance de base</a></li>
            <li><a href="#reste-a-charge">Participation et franchise</a></li>
            <li><a href="#autres-options">Assurance complémentaire et autres modèles</a></li>
          </ol>
        </nav>
        <article>
          <section className={styles.section} id="assurance-de-base">
            <h2>Quand êtes-vous éligible au remboursement ?</h2>
            <p>Votre audiologue examine les résultats de votre bilan et les situations que vous souhaitez améliorer. Le protocole auditif néerlandais permet de déterminer la catégorie adaptée. Sous certaines conditions, l’assurance de base couvre un appareil de cette catégorie.</p>
          </section>
          <section className={styles.section} id="reste-a-charge">
            <h2>Que reste-t-il à votre charge ?</h2>
            <p>Pour les adultes, l’assurance de base rembourse généralement 75 % du tarif convenu. Votre participation légale est de 25 %. Si vous n’avez pas encore épuisé votre franchise annuelle, celle-ci peut aussi s’appliquer à la part couverte par l’assurance.</p>
            <p>Pour un tarif convenu de 625 € par appareil, la participation est de 156,25 € et le montant pris en charge de 468,75 €, avant application de la franchise éventuelle.</p>
          </section>
          <section className={styles.section} id="autres-options">
            <h2>Assurance complémentaire et appareils hors remboursement</h2>
            <p>Une assurance complémentaire peut couvrir une partie de votre participation. Si vous choisissez un appareil en dehors de l’offre remboursée, la prise en charge peut être différente. Apportez les informations de votre contrat au rendez-vous pour que nous puissions examiner votre situation.</p>
          </section>
        </article>
      </div>
    </>
  );
}
