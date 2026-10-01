import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

const stepColors = [
  "from-cyan-400 to-sky-500",
  "from-sky-400 to-indigo-500",
  "from-indigo-400 to-violet-500",
  "from-violet-400 to-fuchsia-500",
  "from-fuchsia-400 to-pink-500",
  "from-pink-400 to-orange-400",
];

export function Approach() {
  const { t, n } = useLang();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.approach.kicker)} title={t(T.approach.title)} sub={t(T.approach.sub)} />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {T.approach.steps.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="h-full">
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "latin grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-lg font-black text-ink shadow-lg",
                      stepColors[i],
                    )}
                  >
                    {n(i + 1)}
                  </span>
                  <h3 className="text-lg font-bold text-white">{t(s.t)}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-8 text-slate-400">{t(s.d)}</p>
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right",
                    stepColors[i],
                  )}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* flow */}
        <Reveal className="mt-8">
          <div
            dir="ltr"
            className="latin glass flex flex-wrap items-center justify-center gap-x-2 gap-y-3 rounded-2xl px-4 py-5 text-xs font-semibold text-slate-300 sm:text-sm"
          >
            {["Concept", "Explanation", "Math", "Example", "Python", "Visualization"].map((x, i, a) => (
              <span key={x} className="inline-flex items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">{x}</span>
                {i < a.length - 1 && <Icon name="arrow" className="h-3.5 w-3.5 text-slate-500" />}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Lineage() {
  const { t } = useLang();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.lineage.kicker)} title={t(T.lineage.title)} sub={t(T.lineage.sub)} />

        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.1fr] md:gap-6">
          <Reveal className="h-full">
            <div className="glass h-full rounded-3xl p-6 opacity-80 sm:p-8">
              <div className="latin inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">
                <Icon name="tag" className="h-3.5 w-3.5" />
                {t(T.lineage.v1)}
              </div>
              <p className="mt-5 text-[15px] leading-8 text-slate-400">{t(T.lineage.v1d)}</p>
            </div>
          </Reveal>

          <Reveal className="flex items-center justify-center" delay={120}>
            <div className="flex w-full flex-row items-center justify-center gap-3 md:w-40 md:flex-col">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/60 md:h-14 md:w-px md:flex-none md:bg-gradient-to-b rtl:rotate-180 md:rtl:rotate-0" />
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2 text-center text-[11px] font-bold leading-5 text-cyan-300 sm:text-xs">
                {t(T.lineage.mid)}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent md:h-14 md:w-px md:flex-none md:bg-gradient-to-b rtl:rotate-180 md:rtl:rotate-0" />
            </div>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <div className="gborder relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/[0.14] via-white/[0.02] to-fuchsia-500/[0.12] p-6 sm:p-8">
              <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />
              <div className="latin relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-3 py-1 text-xs font-extrabold text-ink">
                <Icon name="sparkle" className="h-3.5 w-3.5" />
                {t(T.lineage.v2)}
              </div>
              <p className="relative mt-5 text-[15px] leading-8 text-slate-200">{t(T.lineage.v2d)}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-2.5" delay={150}>
          {T.lineage.pillars.map((p, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300">
              <Icon name="check" className="h-3.5 w-3.5 text-cyan-300" />
              {t(p)}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
