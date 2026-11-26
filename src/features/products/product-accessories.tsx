import Image from "next/image";

type Accessory = { name: string; href: string; photo: string; note: string; priceLabel?: string };

export function ProductAccessories({title, items, maintenance, guidance, videoLink, videoLabel}: {
  title: string;
  items: Accessory[];
  maintenance: {name: string; href: string}[];
  guidance: string;
  videoLink: string;
  videoLabel: string;
}) {
  return (
    <section className="cro-complete-section" id="accessoires">
      <h2>{title}</h2>
      <div className="cro-complete-accessories">
        {items.map(({name, href, photo, note, priceLabel}) => (
          <article key={name}>
            <a href={href} className="encanta-accessory-link">
              <Image unoptimized src={photo} alt="" width={180} height={140} />
              <h3>{name}</h3>
            </a>
            <p>{note}</p>
            <strong>{priceLabel}</strong>
          </article>
        ))}
      </div>
      <details>
        <summary>Onderhoud en vervangende onderdelen</summary>
        <h3>Bestellen in de webshop</h3>
        <p>{guidance}</p>
        <ul className="encanta-maintenance">
          {maintenance.map(({name, href}) => <li key={name}><a href={href}>{name} →</a></li>)}
        </ul>
        <h3>Instructievideo’s</h3>
        <p><a href={videoLink}>{videoLabel} →</a></p>
      </details>
    </section>
  );
}
