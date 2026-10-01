import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "./i18n";

type Pair = { en: string; fa: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (p: Pair) => string;
  n: (v: number | string) => string;
  rtl: boolean;
};

const LangCtx = createContext<Ctx | null>(null);

const faDigits = (s: string) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem("dm-lang");
      if (s === "en" || s === "fa") return s;
    } catch {
      /* ignore */
    }
    return "fa";
  });

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "fa" ? "rtl" : "ltr";
    try {
      localStorage.setItem("dm-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      rtl: lang === "fa",
      t: (p) => p[lang],
      n: (v) => {
        const s = typeof v === "number" ? v.toLocaleString("en-US") : v;
        return lang === "fa" ? faDigits(s).replace(/,/g, "٬") : s;
      },
    }),
    [lang],
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang outside provider");
  return c;
}
