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
        <div className="grid gap-3 p-3 sm:p-4">
          <div className="flex flex-wrap gap-2">
            {["Dashboard", "Jobs", "Interviews"].map((item, idx) => (
              <span key={item} className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] sm:px-3 ${idx === 0 ? "border-accent/50 text-accent" : "border-line text-mist"}`}>
                {item}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Profile", "87%", "complete"],
              ["Matches", "12", "4 new"]
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-xl border border-line bg-[#2C3450] p-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-mist">{label}</div>
                <div className="mt-1 text-2xl font-medium tracking-tight sm:text-3xl">{value}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent">{delta}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-line bg-[#2C3450] p-4">
            <div className="flex justify-between text-xs text-mist">
              <span>Application velocity</span>
              <span className="font-mono text-[9px] uppercase tracking-widest">30d</span>
            </div>
            <svg className="mt-4 h-28 w-full" viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
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
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-mist">
                  <span>{stage}</span><span className="text-accent">{count}</span>
                </div>
                <div className="mt-2 rounded-md border border-line bg-[#364065] p-2 text-xs">{company}</div>
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
