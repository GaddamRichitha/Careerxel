export function SectionRibbon({ index, name, note, light = false }: { index: string; name: string; note: string; light?: boolean }) {
  return (
    <div className={`section-ribbon mb-10 flex flex-wrap justify-between gap-3 pt-5 font-mono text-[11px] uppercase tracking-[0.12em] sm:mb-14 ${light ? "text-ink/55" : "text-mist"}`}>
      <span>
        {index}
        <span className="text-accent"> / {name}</span>
      </span>
      <span className="hidden sm:inline">{note}</span>
    </div>
  );
}
