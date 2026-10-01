import { useMemo, useState } from "react";
import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon, Reveal, SectionHead, hsl } from "./ui";
import { chapters, repoBlob, type Chapter } from "../data/chapters";
import { cn } from "../utils/cn";

function ChapterCard({ c, index }: { c: Chapter; index: number }) {
  const { t, n, lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(index % 3) * 80} className="h-full">
      <article
        className="chapter-card glass relative flex h-full flex-col overflow-hidden rounded-3xl p-5 sm:p-6"
        style={{ ["--h" as string]: c.hue }}
      >
        <div
          className="pointer-events-none absolute -end-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
          style={{ background: hsl(c.hue, 90, 55) }}
        />
        <div
          className="latin pointer-events-none absolute -bottom-6 end-3 select-none text-[7rem] font-black leading-none opacity-[0.05]"
          dir="ltr"
        >
          {c.id}
        </div>

        <div className="relative flex items-center justify-between gap-3">
          <span
            className="latin inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold"
            style={{ background: hsl(c.hue, 80, 60, 0.12), color: hsl(c.hue, 90, 72) }}
            dir="ltr"
          >
            <span className="mono">{c.id}</span>
            <span className="h-1 w-1 rounded-full bg-current opacity-60" />
            {lang === "fa" ? "Chapter" : "Chapter"}
          </span>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Icon name="pdf" className="h-3.5 w-3.5" />
              {n(c.pages)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="notebook" className="h-3.5 w-3.5" />
              {n(c.cells)}
            </span>
          </div>
        </div>

        <h3 className="relative mt-4 text-xl font-extrabold leading-snug text-white">{t(c.title)}</h3>
        {lang === "fa" && (
          <div className="latin relative mt-1 text-[13px] font-medium text-slate-500" dir="ltr">
            {c.title.en}
          </div>
        )}
        <p className="relative mt-3 text-sm leading-7 text-slate-400">{t(c.focus)}</p>

        {/* cell ratio */}
        <div className="relative mt-4" dir="ltr">
          <div className="flex h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div style={{ width: `${(c.md / c.cells) * 100}%`, background: hsl(c.hue, 80, 60, 0.9) }} />
            <div style={{ width: `${(c.code / c.cells) * 100}%`, background: hsl(c.hue + 60, 90, 75) }} />
          </div>
          <div className="latin mt-1.5 flex justify-between text-[10px] text-slate-500">
            <span>{c.md} md</span>
            <span>{c.code} code</span>
          </div>
        </div>

        {/* sections accordion */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="relative mt-4 flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]"
        >
          <span>
            {open ? t(T.chapters.hide) : t(T.chapters.show)} <span className="text-slate-500">({n(c.sections.length)})</span>
          </span>
          <Icon name="chevron" className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>
        <div className={cn("acc relative", open && "open")}>
          <div>
            <ol className="latin space-y-1 pt-3" dir="ltr">
              {c.sections.map((s) => (
                <li key={s} className="flex gap-2 rounded-lg px-2 py-1.5 text-[13px] leading-6 text-slate-300 hover:bg-white/[0.04]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: hsl(c.hue, 90, 65) }} />
                  {s}
                </li>
              ))}
            </ol>
            <div className="latin mt-3 flex flex-wrap gap-1.5 pb-1" dir="ltr">
              {c.deps.map((d) => (
                <span key={d} className="mono rounded-md border border-white/[0.07] bg-black/30 px-2 py-0.5 text-[10.5px] text-slate-400">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-auto grid grid-cols-2 gap-2.5 pt-5">
          <a
            href={repoBlob(`${c.id}/ch${c.id}.ipynb`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold text-ink transition hover:brightness-110"
            style={{ background: `linear-gradient(120deg, ${hsl(c.hue, 90, 65)}, ${hsl(c.hue + 40, 90, 68)})` }}
          >
            <Icon name="notebook" className="h-4 w-4" />
            {t(T.chapters.notebook)}
          </a>
          <a
            href={repoBlob(`${c.id}/ch${c.id}.pdf`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Icon name="pdf" className="h-4 w-4" />
            {t(T.chapters.pdf)}
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Chapters() {
  const { t } = useLang();
  const [q, setQ] = useState("");
  const [group, setGroup] = useState(-1);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return chapters.filter((c, i) => {
      if (group >= 0) {
        const [a, b] = T.chapters.groups[group].r;
        if (i < a || i >= b) return false;
      }
      if (!s) return true;
      const hay = [c.id, c.title.en, c.title.fa, c.focus.en, c.focus.fa, ...c.sections, ...c.deps].join(" ").toLowerCase();
      return hay.includes(s);
    });
  }, [q, group]);

  return (
    <section id="chapters" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.chapters.kicker)} title={t(T.chapters.title)} sub={t(T.chapters.sub)} />

        <Reveal className="mb-8 space-y-4">
          <div className="relative mx-auto max-w-xl">
            <Icon name="search" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t(T.chapters.search)}
              className="glass w-full rounded-2xl py-3.5 pe-12 ps-12 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
              inputMode="search"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute end-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20"
                aria-label="clear"
              >
                <Icon name="close" className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {[{ n: T.chapters.all, i: -1 }, ...T.chapters.groups.map((g, i) => ({ n: g.n, i }))].map((g) => (
              <button
                key={g.i}
                onClick={() => setGroup(g.i)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                  group === g.i
                    ? "border-transparent bg-white text-ink"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08]",
                )}
              >
                {t(g.n)}
              </button>
            ))}
          </div>
        </Reveal>

        {list.length ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {list.map((c, i) => (
              <ChapterCard key={c.id} c={c} index={i} />
            ))}
          </div>
        ) : (
          <div className="glass mx-auto max-w-md rounded-2xl p-10 text-center text-slate-400">{t(T.chapters.none)}</div>
        )}
      </div>
    </section>
  );
}
