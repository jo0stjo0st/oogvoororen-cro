import { Footer, Header } from "@/components/site-shell";
import { LabBar } from "@/components/lab-bar";
import styles from "./guide.module.css";

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LabBar />
      <Header variant="variant-a" />
      <main id="main-content" className={styles.guide}>{children}</main>
      <Footer />
    </>
  );
}
