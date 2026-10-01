import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon, Reveal, SectionHead } from "./ui";
import { INSTRUCTOR_URL, team, teamFa, teamLinks } from "../data/chapters";

const grads = [
  "from-cyan-400 to-sky-500",
  "from-sky-400 to-indigo-500",
  "from-indigo-400 to-violet-500",
  "from-violet-400 to-fuchsia-500",
  "from-fuchsia-400 to-pink-500",
  "from-pink-400 to-rose-500",
  "from-orange-400 to-amber-400",
  "from-emerald-400 to-teal-500",
];

const initials = (s: string) =>
  s
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export function People() {
  const { t, lang } = useLang();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead kicker={t(T.people.kicker)} title={t(T.people.title)} sub={t(T.people.sub)} />

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <Reveal>
              <div className="gborder relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/[0.14] to-white/[0.02] p-6 sm:p-8">
                <div className="absolute -end-12 -top-12 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="relative flex items-center gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-2xl font-black text-ink">
                    <Icon name="user" className="h-8 w-8" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{t(T.people.instructor)}</div>
                    <a
                      href={INSTRUCTOR_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-2 text-xl font-extrabold text-white transition hover:text-cyan-300 sm:text-2xl"
                    >
                      {t(T.people.instructorName)}
                      <Icon name="external" className="h-4 w-4 text-slate-500" />
                    </a>
                    {lang === "fa" && <div className="latin text-sm text-slate-500" dir="ltr">Dr. Amin Eskandari</div>}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass rounded-3xl p-2 sm:p-3">
                {T.people.course.map((r, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 text-sm odd:bg-white/[0.03]">
                    <span className="shrink-0 text-slate-500">{t(r.k)}</span>
                    <span className="text-end font-semibold text-slate-200">{t(r.v)}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="glass h-full rounded-3xl p-5 sm:p-8">
              <h3 className="mb-5 text-lg font-bold text-white">{t(T.people.team)}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {team.map((name, i) => {
                  const href = teamLinks[name];
                  const Tag = href ? "a" : "div";
                  return (
                  <Tag
                    key={name}
                    {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <span
                      className={`latin grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-black text-ink ${grads[i]}`}
                    >
                      {initials(name)}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-[15px] font-bold text-white">{lang === "fa" ? teamFa[i] : name}</div>
                      {lang === "fa" && (
                        <div className="latin truncate text-xs text-slate-500" dir="ltr">
                          {name}
                        </div>
                      )}
                    </div>
                    {href && (
                      <Icon name="external" className="ms-auto h-4 w-4 text-slate-600 transition group-hover:text-cyan-300" />
                    )}
                  </Tag>
                  );
                })}
              </div>
              <p className="mt-5 text-xs leading-6 text-slate-600">
                {t({
                  en: "Names follow the English transliterations used in the repository documentation.",
                  fa: "نام‌ها مطابق نگارش انگلیسی مستندات مخزن آمده است.",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
