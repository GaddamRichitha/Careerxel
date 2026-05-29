export function ProductMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-glow">
        <div className="flex h-8 items-center gap-1.5 border-b border-line bg-[#2C3450] px-3">
          <span className="h-2 w-2 rounded-full bg-[#364065]" />
          <span className="h-2 w-2 rounded-full bg-[#364065]" />
          <span className="h-2 w-2 rounded-full bg-[#364065]" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-mist">candidate.os</span>
        </div>
        <div className="grid gap-2 p-2 sm:gap-3 sm:p-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {["Dashboard", "Jobs", "Interviews"].map((item, idx) => (
              <span key={item} className={`rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] sm:px-2.5 sm:py-1 sm:text-[9px] ${idx === 0 ? "border-accent/50 text-accent" : "border-line text-mist"}`}>
                {item}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {[
              ["Profile", "87%", "complete"],
              ["Matches", "12", "4 new"]
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-xl border border-line bg-[#2C3450] p-2 sm:p-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-mist">{label}</div>
                <div className="mt-0.5 text-xl font-medium tracking-tight sm:mt-1 sm:text-3xl">{value}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-accent sm:text-[10px]">{delta}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-line bg-[#2C3450] p-3 sm:p-4">
            <div className="flex justify-between text-[10px] text-mist sm:text-xs">
              <span>Application velocity</span>
              <span className="font-mono text-[8px] uppercase tracking-widest sm:text-[9px]">30d</span>
            </div>
            <svg className="mt-2 h-24 w-full sm:mt-4 sm:h-28" viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 90 L35 70 L70 78 L105 48 L140 56 L175 32 L210 42 L245 20 L300 26 L300 120 L0 120 Z" fill="rgba(74,139,255,0.18)" />
              <path d="M0 90 L35 70 L70 78 L105 48 L140 56 L175 32 L210 42 L245 20 L300 26" stroke="#4A8BFF" strokeWidth="3" fill="none" />
            </svg>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              ["Applied", "8", "Linear"],
              ["Interview", "3", "Vercel"],
              ["Offer", "1", "Figma"]
            ].map(([stage, count, company]) => (
              <div key={stage} className="rounded-lg border border-line bg-[#2C3450] p-2">
                <div className="flex justify-between font-mono text-[8px] uppercase tracking-widest text-mist sm:text-[9px]">
                  <span>{stage}</span><span className="text-accent">{count}</span>
                </div>
                <div className="mt-1 rounded-md border border-line bg-[#364065] p-2 text-[10px] sm:mt-2 sm:text-xs">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -left-3 top-10 hidden rounded-xl border border-white/10 bg-panel/70 p-3 text-xs shadow-2xl backdrop-blur sm:block sm:-left-8">
        <div className="font-mono uppercase tracking-widest text-accent">Advisor</div>
        <div className="mt-1 text-white">Review your week</div>
      </div>
      <div className="absolute -right-3 bottom-8 hidden rounded-xl border border-white/10 bg-panel/70 p-3 text-xs shadow-2xl backdrop-blur sm:block sm:-right-6">
        <div className="font-mono uppercase tracking-widest text-mist">Profile</div>
        <div className="mt-1 text-white">87% complete</div>
      </div>
    </div>
  );
}
