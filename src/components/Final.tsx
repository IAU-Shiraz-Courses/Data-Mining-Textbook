import { useState } from "react";
import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon, Reveal, SectionHead } from "./ui";
import { REPO, repoRaw } from "../data/chapters";
import { cn } from "../utils/cn";

export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.faq.kicker)} title={t(T.faq.title)} />
        <div className="space-y-3">
          {T.faq.items.map((it, i) => {
            const o = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div className={cn("glass overflow-hidden rounded-2xl transition", o && "border-cyan-400/25 bg-white/[0.06]")}>
                  <button
                    onClick={() => setOpen(o ? null : i)}
                    aria-expanded={o}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6 sm:py-5"
                  >
                    <span className="text-[15px] font-bold leading-7 text-white sm:text-base">{t(it.q)}</span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition",
                        o ? "rotate-180 bg-cyan-400 text-ink" : "bg-white/[0.04] text-slate-300",
                      )}
                    >
                      <Icon name="chevron" className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={cn("acc", o && "open")}>
                    <div>
                      <p className="px-5 pb-5 text-[15px] leading-8 text-slate-400 sm:px-6">{t(it.a)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="glass flex flex-col items-center gap-4 rounded-3xl p-6 text-center sm:flex-row sm:text-start">
            <div className="flex-1">
              <div className="font-bold text-white">{t(T.faq.report)}</div>
              <p className="mt-1 text-sm leading-7 text-slate-400">{t(T.faq.reportD)}</p>
            </div>
            <a
              href={`${REPO}/issues`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-cyan-100"
            >
              <Icon name="github" className="h-4 w-4" />
              {t(T.faq.reportCta)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { t } = useLang();
  return (
    <section className="relative px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="gborder relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600/30 via-ink-2 to-fuchsia-600/25 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
          <div className="absolute -top-24 start-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-[90px] rtl:translate-x-1/2" />
          <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-5xl">{t(T.cta.title)}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{t(T.cta.sub)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={repoRaw("Full_version/Data_Mining_Textbook.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-7 py-4 text-base font-extrabold text-ink shadow-xl transition hover:scale-[1.02] hover:bg-cyan-100"
            >
              <Icon name="download" />
              {t(T.hero.ctaPdf)}
            </a>
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              <Icon name="github" />
              {t(T.hero.ctaRepo)}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/[0.07] bg-ink-2/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-start">
          <div>
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500">
                <Icon name="layers" className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-extrabold text-white">{t(T.footer.line)}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{t(T.footer.uni)}</p>
            <p className="mt-1 text-sm text-slate-500">{t(T.footer.term)}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <a href={REPO} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
              <Icon name="github" className="h-4 w-4" /> GitHub
            </a>
            <a href={`${REPO}/issues`} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
              Issues
            </a>
            <a href="#top" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
              <Icon name="up" className="h-4 w-4" /> {t(T.footer.top)}
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs leading-6 text-slate-600">{t(T.footer.copy)}</div>
      </div>
    </footer>
  );
}
