import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/hoortoestellen/keuzehulp/guide.module.css";

export const metadata: Metadata = {
  title: "Prendre rendez-vous avec un audiologue | Oogvoororen",
  description: "Demander un bilan auditif et un conseil personnalisé sans engagement.",
};

export default function Page() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>
        <p><Link href="/fr/guide-auditif">← Guide des premiers appareils auditifs</Link></p>
        <h1>Prenez rendez-vous sans engagement</h1>
        <p>Parlez-nous des situations dans lesquelles vous souhaitez mieux entendre. Votre audiologue vous propose un bilan et des conseils adaptés, à domicile ou dans un de nos centres auditifs aux Pays-Bas.</p>
        <a className={styles.action} href="#afspraak">Accéder au formulaire →</a>
      </div>
    </section>
  );
}
