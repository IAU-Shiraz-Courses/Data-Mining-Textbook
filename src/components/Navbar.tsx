import { useEffect, useState } from "react";
import { useLang } from "../lang";
import { T } from "../i18n";
import { Icon } from "./ui";
import { cn } from "../utils/cn";
import { repoRaw } from "../data/chapters";

const links = [
  { id: "overview", k: "overview" },
  { id: "formats", k: "formats" },
  { id: "chapters", k: "chapters" },
  { id: "run", k: "run" },
  { id: "license", k: "license" },
  { id: "faq", k: "faq" },
] as const;

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 rtl:origin-right"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
            <Icon name="layers" className="h-5 w-5 text-white" />
          </span>
          <span className="latin flex flex-col leading-none" dir="ltr">
            <span className="text-[15px] font-extrabold tracking-tight text-white">DataMining</span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Textbook v2</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                active === l.id ? "bg-white/[0.07] text-white" : "text-slate-400 hover:text-white",
              )}
            >
              {t(T.nav[l.k])}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            className="glass inline-flex h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            aria-label="Switch language"
          >
            <Icon name="globe" className="h-4 w-4" />
            <span className={lang === "fa" ? "latin" : ""}>{lang === "fa" ? "EN" : "فارسی"}</span>
          </button>
          <a
            href={repoRaw("Full_version/Data_Mining_Textbook.pdf")}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-ink transition hover:bg-cyan-100 sm:inline-flex"
          >
            <Icon name="download" className="h-4 w-4" />
            {t(T.nav.download)}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="glass grid h-10 w-10 place-items-center rounded-xl text-white lg:hidden"
            aria-label={t(T.nav.menu)}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold",
                active === l.id ? "bg-white/[0.07] text-white" : "text-slate-300 active:bg-white/5",
              )}
            >
              {t(T.nav[l.k])}
              <Icon name="arrow" className="h-4 w-4 opacity-50 rtl:rotate-180" />
            </a>
          ))}
          <a
            href={repoRaw("Full_version/Data_Mining_Textbook.pdf")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-3.5 font-bold text-ink"
          >
            <Icon name="download" />
            {t(T.hero.ctaPdf)}
          </a>
        </div>
      </div>
    </header>
  );
}
