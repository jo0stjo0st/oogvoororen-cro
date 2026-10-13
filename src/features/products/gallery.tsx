"use client";
import { useState } from "react";
import Image from "next/image";
import { product } from "./data";
export function ProductGallery({ original = false }: { original?: boolean }) {
  const [zoom, setZoom] = useState(false);
  return (
    <div className={`gallery ${original ? "original-gallery" : ""}`}>
      <div className="gallery-image">
        <span className="included">Inclusief lader</span>
        <button
          className="image-button"
          onClick={() => setZoom(!zoom)}
          aria-label={zoom ? "Verklein productfoto" : "Vergroot productfoto"}
          aria-pressed={zoom}
        >
          <Image
            src={product.image}
            width={800}
            height={800}
            alt={product.name + " in Graphite Gray"}
            priority
            className={zoom ? "product-image zoom" : "product-image"}
            sizes="(max-width: 760px) 90vw, 50vw"
          />
        </button>
      </div>
      <div className="gallery-bottom">
        <button
          className="thumbnail"
          aria-label="Toon productfoto"
          onClick={() => setZoom(false)}
        >
          <Image src={product.image} alt="" width={48} height={48} />
        </button>
        <span>
          {original ? "Graphite Gray" : "Oplaadbaar · Graphite Gray"}
          <br />
          <span className="small">Klik op de foto om te vergroten</span>
        </span>
      </div>
    </div>
  );
}
