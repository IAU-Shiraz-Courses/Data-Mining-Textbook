import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon, Reveal, SectionHead } from "./ui";
import { repoBlob, repoRaw } from "../data/chapters";
import { cn } from "../utils/cn";

const styles = [
  { icon: "notebook", grad: "from-amber-400 to-orange-500", glow: "bg-orange-500/20", ring: "text-orange-300", href: "#chapters" },
  { icon: "pdf", grad: "from-rose-400 to-pink-500", glow: "bg-rose-500/20", ring: "text-rose-300", href: "#chapters" },
  { icon: "book", grad: "from-cyan-400 to-indigo-500", glow: "bg-cyan-500/20", ring: "text-cyan-300", href: repoRaw("Full_version/Data_Mining_Textbook.pdf") },
];

export function Formats() {
  const { t } = useLang();
  return (
    <section id="formats" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.formats.kicker)} title={t(T.formats.title)} sub={t(T.formats.sub)} />
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {T.formats.cards.map((c, i) => {
            const s = styles[i];
            const featured = i === 2;
            return (
              <Reveal key={i} delay={i * 100} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 sm:p-8",
                    featured ? "gborder bg-gradient-to-b from-indigo-500/[0.12] to-white/[0.02]" : "glass",
                  )}
                >
                  <div className={cn("absolute -end-10 -top-10 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125", s.glow)} />
                  <div className="relative flex items-center justify-between">
                    <span className={cn("grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg", s.grad)}>
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className={cn("rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold", s.ring)}>
                      {t(c.tag)}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-extrabold text-white">{t(c.title)}</h3>
                  <p className="relative mt-3 text-[15px] leading-8 text-slate-400">{t(c.desc)}</p>
                  <ul className="relative mt-5 space-y-2.5">
                    {c.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Icon name="check" className={cn("mt-0.5 h-4 w-4", s.ring)} />
                        <span className={i === 2 && j === 2 ? "latin mono break-all text-xs" : ""} dir={i === 2 && j === 2 ? "ltr" : undefined}>
                          {t(pt)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto pt-7">
                    <a
                      href={s.href}
                      target={featured ? "_blank" : undefined}
                      rel="noreferrer"
                      className={cn(
                        "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition",
                        featured
                          ? "bg-white text-ink hover:bg-cyan-100"
                          : "border border-white/10 bg-white/[0.05] text-white hover:bg-white/10",
                      )}
                    >
                      {t(c.cta)}
                      <Icon name={featured ? "download" : "arrow"} className={cn("h-4 w-4", !featured && "rtl:rotate-180")} />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <a
            href={repoBlob("Full_version/Data_Mining_Textbook.pdf")}
            target="_blank"
            rel="noreferrer"
            className="glass mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center text-sm text-slate-400 transition hover:text-white"
          >
            <Icon name="alert" className="h-4 w-4 text-amber-300" />
            <span>
              {t({
                en: "The complete PDF is large and managed with Git LFS — view it directly on GitHub.",
                fa: "PDF کامل حجم زیادی دارد و با Git LFS مدیریت می‌شود — آن را مستقیم در گیت‌هاب ببینید.",
              })}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
