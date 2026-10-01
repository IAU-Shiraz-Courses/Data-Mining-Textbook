import { useMemo } from "react";
import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon } from "./ui";
import { REPO, repoRaw } from "../data/chapters";

function useClusters() {
  return useMemo(() => {
    let s = 7;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    const gauss = () => {
      const u = rnd() || 0.001;
      const v = rnd();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    };
    const centers = [
      { x: 52, y: 52, c: "#22d3ee" },
      { x: 150, y: 42, c: "#a78bfa" },
      { x: 108, y: 106, c: "#f472b6" },
    ];
    const pts = centers.flatMap((c) =>
      Array.from({ length: 22 }, () => ({
        x: Math.max(8, Math.min(192, c.x + gauss() * 13)),
        y: Math.max(8, Math.min(132, c.y + gauss() * 11)),
        c: c.c,
      })),
    );
    return { centers, pts };
  }, []);
}

function NotebookMock() {
  const { centers, pts } = useClusters();
  return (
    <div dir="ltr" className="latin relative mx-auto w-full max-w-[560px] animate-float-slow">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/25 via-indigo-500/20 to-fuchsia-500/25 blur-3xl" />
      <div className="gborder overflow-hidden rounded-2xl bg-[#0b1020]/90 shadow-2xl shadow-indigo-950/60 backdrop-blur">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="mono ms-3 truncate text-[11px] text-slate-400">08/ch08.ipynb</span>
          <span className="mono ms-auto rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Python 3.13</span>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          {/* markdown cell */}
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5">
            <div className="text-[15px] font-bold text-white sm:text-base">8.2.1 k-Means: a centroid-based technique</div>
            <div className="mono mt-2 text-[12px] text-cyan-300/90 sm:text-[13px]">
              J = Σₖ Σ<sub>x∈Cₖ</sub> ‖x − μₖ‖²
            </div>
          </div>

          {/* code cell */}
          <div className="flex gap-3">
            <span className="mono pt-3 text-[10px] text-indigo-300/70">In [3]:</span>
            <pre className="mono min-w-0 flex-1 overflow-hidden rounded-lg border border-white/[0.06] bg-black/40 p-3 text-[11px] leading-[1.7] text-slate-300 sm:text-[12px]">
              <span className="text-fuchsia-300">from</span> sklearn.cluster <span className="text-fuchsia-300">import</span> KMeans{"\n"}
              km = KMeans(<span className="text-amber-200">n_clusters</span>=<span className="text-cyan-300">3</span>, n_init=<span className="text-cyan-300">10</span>){"\n"}
              labels = km.fit_predict(X){"\n"}
              <span className="text-slate-500"># inertia → cluster quality</span>
            </pre>
          </div>

          {/* output */}
          <div className="flex gap-3">
            <span className="mono pt-3 text-[10px] text-rose-300/70">Out[3]:</span>
            <div className="min-w-0 flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
              <svg viewBox="0 0 200 140" className="h-auto w-full">
                {[...Array(5)].map((_, i) => (
                  <line key={`h${i}`} x1="0" x2="200" y1={i * 35} y2={i * 35} stroke="rgba(255,255,255,.05)" />
                ))}
                {[...Array(6)].map((_, i) => (
                  <line key={`v${i}`} y1="0" y2="140" x1={i * 40} x2={i * 40} stroke="rgba(255,255,255,.05)" />
                ))}
                {centers.map((c, i) => (
                  <circle key={i} cx={c.x} cy={c.y} r="26" fill={c.c} opacity=".07" stroke={c.c} strokeOpacity=".35" strokeDasharray="3 3" />
                ))}
                {pts.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="2.3" fill={p.c} opacity=".9" />
                ))}
                {centers.map((c, i) => (
                  <g key={i} stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <line x1={c.x - 4} y1={c.y - 4} x2={c.x + 4} y2={c.y + 4} />
                    <line x1={c.x + 4} y1={c.y - 4} x2={c.x - 4} y2={c.y + 4} />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="glass absolute -start-3 top-1/3 hidden animate-float items-center gap-2 rounded-xl px-3 py-2 shadow-xl sm:flex">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-rose-500/20 text-rose-300">
          <Icon name="pdf" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <div className="text-xs font-bold text-white">1,559</div>
          <div className="text-[10px] text-slate-400">PDF pages</div>
        </div>
      </div>
      <div className="glass absolute -bottom-5 -end-2 hidden animate-float items-center gap-2 rounded-xl px-3 py-2 shadow-xl [animation-delay:1.5s] sm:flex">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/20 text-emerald-300">
          <Icon name="check" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <div className="text-xs font-bold text-white">323</div>
          <div className="text-[10px] text-slate-400">executable cells</div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 start-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[120px] rtl:translate-x-1/2" />
        <div className="absolute -start-40 top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute -end-40 top-72 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[110px]" />
        <div className="bg-noise absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="text-center lg:text-start">
          <a
            href={`${REPO}/releases`}
            target="_blank"
            rel="noreferrer"
            className="glass mx-auto inline-flex max-w-full items-center gap-2.5 rounded-full py-1.5 pe-4 ps-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10 sm:text-sm lg:mx-0"
          >
            <span className="relative flex h-6 items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-2.5 text-[11px] font-extrabold text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ink/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              <span className="latin">v2</span>
            </span>
            <span className="truncate">{t(T.hero.badge)}</span>
          </a>

          <h1 className="mt-6 text-balance font-black leading-[1.15] tracking-tight text-white">
            <span className="latin block text-[2.6rem] sm:text-6xl lg:text-7xl">{t(T.hero.title1)}</span>
            <span className="text-gradient block pb-2 text-[2.4rem] sm:text-6xl lg:text-7xl">{t(T.hero.title2)}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            {t(T.hero.sub)}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 lg:mx-0">{t(T.hero.uni)}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={repoRaw("Full_version/Data_Mining_Textbook.pdf")}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 px-6 py-4 text-base font-extrabold text-ink shadow-xl shadow-indigo-500/25 transition hover:scale-[1.02] hover:shadow-indigo-500/40 active:scale-[0.99]"
            >
              <Icon name="download" />
              {t(T.hero.ctaPdf)}
            </a>
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              <Icon name="github" />
              {t(T.hero.ctaRepo)}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
            {T.hero.chips.map((c, i) => (
              <span
                key={i}
                className="latin rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
              >
                {t(c)}
              </span>
            ))}
          </div>
        </div>

        <NotebookMock />
      </div>

      {/* chapter marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-4 sm:mt-24" dir="ltr">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />
        <div className="latin flex w-max animate-marquee gap-3 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-slate-300">
              <span className="mono text-[11px] text-cyan-300/80">{m[0]}</span>
              {m[1]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const MARQUEE: [string, string][] = [
  ["01", "Introduction"],
  ["02", "Preprocessing"],
  ["03", "Data Warehousing & OLAP"],
  ["04", "Pattern Mining"],
  ["05", "Advanced Pattern Mining"],
  ["06", "Classification"],
  ["07", "Advanced Classification"],
  ["08", "Cluster Analysis"],
  ["09", "Advanced Clustering"],
  ["10", "Deep Learning"],
  ["11", "Outlier Detection"],
  ["12", "Trends & Frontiers"],
];
