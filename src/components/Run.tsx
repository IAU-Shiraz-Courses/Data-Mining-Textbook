import { useState } from "react";
import { useLang } from "../lang";
import { T, runSnippets } from "../i18n";
import { Icon, Reveal, SectionHead, useCopy, hsl } from "./ui";
import { chapters } from "../data/chapters";
import { cn } from "../utils/cn";

const libs = [
  "numpy",
  "pandas",
  "matplotlib",
  "seaborn",
  "scipy",
  "scikit-learn",
  "networkx",
  "mlxtend",
  "gensim",
  "nltk",
  "textblob",
  "shapely",
  "scikit-image",
  "python-louvain",
];

export function Run() {
  const { t, n } = useLang();
  const [tab, setTab] = useState(0);
  const [hoverRow, setHoverRow] = useState<number | null>(null);
  const [hoverCol, setHoverCol] = useState<number | null>(null);
  const { copied, copy } = useCopy();

  const usage = libs.map((l) => chapters.filter((c) => c.deps.includes(l)).length);

  return (
    <section id="run" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.run.kicker)} title={t(T.run.title)} sub={t(T.run.sub)} />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* terminal */}
          <Reveal>
            <div className="gborder overflow-hidden rounded-3xl bg-[#080c18]/90 shadow-2xl shadow-indigo-950/40" dir="ltr">
              <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="mono ms-3 text-[11px] text-slate-500">~/Data-Mining-Textbook</span>
              </div>
              <div className="flex gap-1 overflow-x-auto border-b border-white/[0.05] px-3 pt-3">
                {T.run.tabs.map((tb, i) => (
                  <button
                    key={i}
                    onClick={() => setTab(i)}
                    className={cn(
                      "latin shrink-0 rounded-t-lg px-4 py-2 text-[13px] font-semibold transition",
                      tab === i ? "bg-white/[0.07] text-white" : "text-slate-500 hover:text-slate-300",
                    )}
                  >
                    {tb.en}
                  </button>
                ))}
              </div>
              <div className="relative">
                <pre className="mono code-scroll min-h-[150px] p-5 pe-16 text-[12.5px] leading-7 text-slate-200 sm:text-[13.5px]">
                  {runSnippets[tab].split("\n").map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {line.startsWith("#") ? (
                        <span className="text-slate-500">{line}</span>
                      ) : (
                        <>
                          <span className="select-none text-cyan-400/70">{/^\s/.test(line) ? "  " : "$ "}</span>
                          {line.split("  # ")[0].split("   # ")[0]}
                          {/\s#\s/.test(line) && (
                            <span className="text-slate-500">{"  # " + line.split(/\s#\s/).slice(1).join(" # ")}</span>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </pre>
                <button
                  onClick={() => copy(runSnippets[tab])}
                  className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  <Icon name={copied ? "check" : "copy"} className={cn("h-3.5 w-3.5", copied && "text-emerald-300")} />
                  <span className="latin">{copied ? T.run.copied.en : T.run.copy.en}</span>
                </button>
              </div>
            </div>
            <p className="mt-4 flex items-start gap-2.5 px-1 text-sm leading-7 text-slate-500">
              <Icon name="alert" className="mt-1 h-4 w-4 text-amber-300/80" />
              {t(T.run.note)}
            </p>
          </Reveal>

          {/* python versions */}
          <Reveal delay={120}>
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">{t(T.run.pyTitle)}</h3>
              <div className="latin mt-5 grid grid-cols-3 gap-3" dir="ltr">
                {["3.12.5", "3.13.5", "3.13.7"].map((v) => (
                  <div key={v} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-4 text-center">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Python</div>
                    <div className="mt-1 text-lg font-extrabold text-white sm:text-xl">{v}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">{t(T.run.pyNote)}</p>
              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <div className="mb-3 text-sm font-semibold text-slate-300">
                  {t({ en: "Most used libraries", fa: "پرکاربردترین کتابخانه‌ها" })}
                </div>
                <div className="space-y-2" dir="ltr">
                  {libs
                    .map((l, i) => ({ l, u: usage[i] }))
                    .sort((a, b) => b.u - a.u)
                    .slice(0, 5)
                    .map(({ l, u }) => (
                      <div key={l} className="flex items-center gap-3">
                        <span className="mono w-24 text-[11px] text-slate-400">{l}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" style={{ width: `${(u / 12) * 100}%` }} />
                        </div>
                        <span className="latin w-8 text-end text-[11px] font-semibold text-slate-300">{u}/12</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* matrix */}
        <Reveal className="mt-8">
          <div className="glass rounded-3xl p-4 sm:p-7">
            <h3 className="text-lg font-bold text-white sm:text-xl">{t(T.run.depsTitle)}</h3>
            <p className="mt-1 text-sm text-slate-500">{t(T.run.depsSub)}</p>
            <div className="-mx-4 mt-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" dir="ltr">
              <table className="latin w-full min-w-[640px] border-separate border-spacing-0 text-xs">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-[#0c1222] px-2 pb-3 text-start text-[11px] font-semibold text-slate-500">
                      {t(T.run.ch)}
                    </th>
                    {libs.map((l, ci) => (
                      <th key={l} className="px-0.5 pb-3 align-bottom" onMouseEnter={() => setHoverCol(ci)} onMouseLeave={() => setHoverCol(null)}>
                        <div
                          className={cn(
                            "mono mx-auto h-24 text-[10.5px] font-medium transition-colors [writing-mode:vertical-rl] rotate-180",
                            hoverCol === ci ? "text-white" : "text-slate-400",
                          )}
                        >
                          {l}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {chapters.map((c, ri) => (
                    <tr key={c.id} onMouseEnter={() => setHoverRow(ri)} onMouseLeave={() => setHoverRow(null)}>
                      <td
                        className={cn(
                          "sticky left-0 z-10 px-2 py-1 font-mono text-[11px] font-semibold",
                          hoverRow === ri ? "bg-[#18203a] text-white" : "bg-[#0c1222] text-slate-400",
                        )}
                      >
                        {c.id}
                      </td>
                      {libs.map((l, ci) => {
                        const on = c.deps.includes(l);
                        const hi = hoverRow === ri || hoverCol === ci;
                        return (
                          <td key={l} className={cn("p-0.5 text-center transition-colors", hi && "bg-white/[0.04]")}>
                            <span
                              className={cn("mx-auto block h-3.5 w-3.5 rounded-[5px] transition sm:h-4 sm:w-4", !on && "bg-white/[0.05]")}
                              style={on ? { background: hsl(c.hue, 85, 62), boxShadow: `0 0 12px ${hsl(c.hue, 90, 60, 0.45)}` } : undefined}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <td className="sticky left-0 z-10 bg-[#0c1222] px-2 pt-3 text-[11px] font-semibold text-slate-500">Σ</td>
                    {usage.map((u, i) => (
                      <td key={i} className="pt-3 text-center text-[11px] font-semibold text-slate-400">
                        {u}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-600">{n(libs.length)} libs · {n(chapters.length)} chapters</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
