export function LabIntro() {
  return (
    <section aria-labelledby="lab-title" className="w-full max-w-3xl rounded-3xl border border-green-900/10 bg-white p-8 shadow-sm sm:p-14">
      <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-green-700">Testomgeving</p>
      <h1 id="lab-title" className="text-4xl font-bold tracking-tight sm:text-5xl">Oogvoororen CRO Lab</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
        Hier bouwen en optimaliseren we Oogvoororen.be. Een centrale plek voor nieuwe pagina’s, CRO-varianten en experimenten die de klantervaring verbeteren.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {["Pagina’s nabouwen", "Varianten vergelijken", "Conversie verbeteren"].map((label) => (
          <p key={label} className="rounded-xl bg-green-50 px-4 py-5 text-sm font-medium text-green-900">{label}</p>
        ))}
      </div>
    </section>
  );
}
