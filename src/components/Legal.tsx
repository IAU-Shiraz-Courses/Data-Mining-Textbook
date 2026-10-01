import { useState } from "react";
import { useLang } from "../lang";
import { T, bibtex, citationText } from "../i18n";
import { Icon, Reveal, SectionHead, useCopy } from "./ui";
import { cn } from "../utils/cn";

export function License() {
  const { t } = useLang();
  return (
    <section id="license" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.license.kicker)} title={t(T.license.title)} sub={t(T.license.sub)} />

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {T.license.badges.map((b, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="glass flex h-full items-center gap-4 rounded-3xl p-5 sm:flex-col sm:p-7 sm:text-center">
                <span className="latin grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-transparent text-2xl font-black tracking-tight text-white sm:h-20 sm:w-20 sm:text-3xl">
                  {b.c}
                </span>
                <div>
                  <div className="text-lg font-extrabold text-white">{t(b.t)}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{t(b.d)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl border-emerald-400/10 p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-emerald-300">
                <Icon name="check" className="h-4 w-4" />
                {t(T.license.can)}
              </div>
              <ul className="space-y-3">
                {T.license.canList.map((x, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-7 text-slate-300">
                    <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {t(x)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass h-full rounded-3xl p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-rose-300">
                <Icon name="x" className="h-4 w-4" />
                {t(T.license.cannot)}
              </div>
              <ul className="space-y-3">
                {T.license.cannotList.map((x, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-7 text-slate-300">
                    <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-400/15 text-rose-300">
                      <Icon name="x" className="h-3 w-3" />
                    </span>
                    {t(x)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5">
          <div className="flex flex-col gap-5 rounded-3xl border border-amber-300/15 bg-amber-300/[0.04] p-6 sm:flex-row sm:items-center sm:p-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
              <Icon name="alert" className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="font-bold text-amber-200">{t(T.license.third)}</div>
              <p className="mt-1 text-sm leading-7 text-slate-400">{t(T.license.thirdD)}</p>
            </div>
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {t(T.license.view)}
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-slate-600">{t(T.license.legal)}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Cite() {
  const { t } = useLang();
  const [tab, setTab] = useState(0);
  const { copied, copy } = useCopy();
  const text = tab === 0 ? citationText : bibtex;
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.cite.kicker)} title={t(T.cite.title)} sub={t(T.cite.sub)} />
        <Reveal>
          <div className="gborder overflow-hidden rounded-3xl bg-[#080c18]/90" dir="ltr">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] bg-white/[0.03] px-3 py-2.5 sm:px-4">
              <div className="flex gap-1">
                {T.cite.tabs.map((tb, i) => (
                  <button
                    key={i}
                    onClick={() => setTab(i)}
                    className={cn(
                      "latin rounded-lg px-3.5 py-1.5 text-[13px] font-semibold transition",
                      tab === i ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300",
                    )}
                  >
                    {tb.en}
                  </button>
                ))}
              </div>
              <button
                onClick={() => copy(text)}
                className="latin inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <Icon name={copied ? "check" : "copy"} className={cn("h-3.5 w-3.5", copied && "text-emerald-300")} />
                {copied ? T.run.copied.en : T.run.copy.en}
              </button>
            </div>
            <pre className="mono code-scroll p-5 text-[12px] leading-7 text-slate-300 sm:p-6 sm:text-[13px]">
              <code className={cn(tab === 0 && "whitespace-pre-wrap break-words")}>{text}</code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
