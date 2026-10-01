import { LangProvider } from "./lang";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Formats } from "./components/Formats";
import { Chapters } from "./components/Chapters";
import { Approach, Lineage } from "./components/Story";
import { Run } from "./components/Run";
import { People } from "./components/People";
import { License, Cite } from "./components/Legal";
import { Faq, FinalCta, Footer } from "./components/Final";

export default function App() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-ink font-sans text-slate-200">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Formats />
          <Chapters />
          <Approach />
          <Lineage />
          <Run />
          <People />
          <License />
          <Cite />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
