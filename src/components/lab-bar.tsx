import Link from "next/link";
import { variants, type Variant } from "@/features/products/data";
export function LabBar({ active }: { active?: Variant }) {
  return (
    <nav className="lab-bar" aria-label="CRO Lab">
      <div className="wide">
        <Link href="/" className="lab-brand">
          CRO Lab
        </Link>
        <div className="lab-links">
          {variants.map((v) => (
            <Link
              key={v.id}
              href={`/${v.id}`}
              aria-current={active === v.id ? "page" : undefined}
            >
              {v.id === "original"
                ? "Original"
                : v.id === "variant-a"
                  ? "Variant A"
                  : "Variant B"}
            </Link>
          ))}
          <Link href="/compare">Vergelijken</Link>
        </div>
        <span className="demo-label">Demo · geen echte aanvragen</span>
      </div>
    </nav>
  );
}
