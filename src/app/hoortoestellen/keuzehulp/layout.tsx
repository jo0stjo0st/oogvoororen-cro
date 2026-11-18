import Image from "next/image";
import Link from "next/link";
import { LabBar } from "@/components/lab-bar";
import { GuideAppointment } from "./appointment";
import styles from "./guide.module.css";

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LabBar />
      <header className="cro-appointment-header">
        <div className="wide cro-appointment-header-inner">
          <Link href="/hoortoestellen/keuzehulp" aria-label="Oogvoororen koopgids">
            <Image src="/assets/logo-white.svg" alt="Oogvoororen" width={207} height={50} />
          </Link>
        </div>
      </header>
      <main id="main-content" className={styles.guide}>
        {children}
        <GuideAppointment />
        <footer className={`${styles.wrap} ${styles.footer}`}>
          <Link href="/hoortoestellen/keuzehulp">Koopgids eerste hoortoestellen</Link>
          <a href="tel:+31854863743">085 486 37 43</a>
        </footer>
      </main>
    </>
  );
}
