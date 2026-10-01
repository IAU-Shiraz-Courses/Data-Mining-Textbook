import { useEffect, useRef, useState } from "react";
import { useLang } from "../lang";
import { T } from "../i18n";
import { CountUp, Reveal, SectionHead, hsl } from "./ui";
import { chapters } from "../data/chapters";
import { cn } from "../utils/cn";

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const accent = [
  "from-cyan-400 to-sky-500",
  "from-sky-400 to-indigo-500",
  "from-indigo-400 to-violet-500",
  "from-violet-400 to-fuchsia-500",
  "from-fuchsia-400 to-pink-500",
  "from-pink-400 to-rose-500",
  "from-cyan-300 to-emerald-400",
  "from-emerald-300 to-teal-500",
];

export function Stats() {
  const { t, n } = useLang();
  const pagesChart = useInView<HTMLDivElement>();
  const cellsChart = useInView<HTMLDivElement>();
  const maxPages = Math.max(...chapters.map((c) => c.pages));
  const maxCells = Math.max(...chapters.map((c) => c.cells));
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="overview" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.stats.kicker)} title={t(T.stats.title)} sub={t(T.stats.sub)} />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {T.stats.items.map((s, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-4 sm:p-6">
                <div
                  className={cn(
                    "absolute -end-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition group-hover:opacity-40",
                    accent[i % accent.length],
                  )}
                />
                <div
                  className={cn(
                    "latin relative bg-gradient-to-br bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl",
                    accent[i % accent.length],
                  )}
                >
                  <CountUp to={s.v} format={(x) => n(x)} />
                </div>
                <div className="relative mt-2 text-sm font-medium text-slate-400 sm:text-base">{t(s.l)}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
          {/* pages chart */}
          <Reveal>
            <div className="glass h-full rounded-3xl p-5 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{t(T.stats.chartTitle)}</h3>
                  <p className="mt-1 text-sm text-slate-500">{t(T.stats.chartSub)}</p>
                </div>
                <div className="latin rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-xs text-slate-300" dir="ltr">
                  {hover !== null ? (
                    <>
                      <b className="text-white">Ch {chapters[hover].id}</b> · {chapters[hover].pages}
                    </>
                  ) : (
                    <>Σ 1,559</>
                  )}
                </div>
              </div>
              <div ref={pagesChart.ref} className="mt-6 flex h-56 items-end gap-1 sm:gap-2" dir="ltr">
                {chapters.map((c, i) => (
                  <div
                    key={c.id}
                    className="group flex h-full flex-1 cursor-pointer flex-col justify-end"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setHover(i)}
                  >
                    <div className="latin mb-1 text-center text-[9px] font-semibold text-slate-400 opacity-0 transition group-hover:opacity-100 sm:text-[10px]">
                      {c.pages}
                    </div>
                    <div
                      className="w-full rounded-t-md transition-[height,filter] duration-1000 ease-out group-hover:brightness-125"
                      style={{
                        height: pagesChart.inView ? `${(c.pages / maxPages) * 88}%` : "0%",
                        transitionDelay: `${i * 60}ms`,
                        background: `linear-gradient(180deg, ${hsl(c.hue, 85, 62)}, ${hsl(c.hue + 30, 80, 45, 0.55)})`,
                      }}
                    />
                    <div className="latin mono mt-2 text-center text-[9px] text-slate-500 sm:text-[11px]">{c.id}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* cells chart */}
          <Reveal delay={100}>
            <div className="glass h-full rounded-3xl p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{t(T.stats.cellsTitle)}</h3>
                  <p className="mt-1 text-sm text-slate-500">1,315 total · 992 / 323</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-indigo-400" />
                    {t(T.stats.md)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-cyan-300" />
                    {t(T.stats.code)}
                  </span>
                </div>
              </div>
              <div ref={cellsChart.ref} className="mt-6 space-y-2.5" dir="ltr">
                {chapters.map((c, i) => (
                  <div key={c.id} className="flex items-center gap-3">
                    <span className="latin mono w-5 text-[11px] text-slate-500">{c.id}</span>
                    <div className="flex h-3.5 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                      <div
                        className="flex h-full overflow-hidden rounded-full transition-[width] duration-1000 ease-out"
                        style={{
                          width: cellsChart.inView ? `${(c.cells / maxCells) * 100}%` : "0%",
                          transitionDelay: `${i * 50}ms`,
                        }}
                      >
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400" style={{ width: `${(c.md / c.cells) * 100}%` }} />
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300" style={{ width: `${(c.code / c.cells) * 100}%` }} />
                      </div>
                    </div>
                    <span className="latin w-9 text-end text-[11px] font-semibold text-slate-300">{c.cells}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
