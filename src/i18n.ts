export type Lang = "fa" | "en";

type Pair = { en: string; fa: string };

const p = (en: string, fa: string): Pair => ({ en, fa });

export const T = {
  nav: {
    overview: p("Overview", "معرفی"),
    formats: p("Formats", "فرمت‌ها"),
    chapters: p("Chapters", "فصل‌ها"),
    run: p("Run", "اجرا"),
    license: p("License", "مجوز"),
    faq: p("FAQ", "سوالات"),
    download: p("Download", "دانلود"),
    menu: p("Menu", "منو"),
  },
  hero: {
    badge: p("Release · Version 2 · Fall 2026", "انتشار · نسخه ۲ · پاییز ۲۰۲۶"),
    title1: p("Data Mining", "Data Mining"),
    title2: p("Textbook", "جزوه داده‌کاوی"),
    sub: p(
      "A comprehensive, Persian-language course textbook — 12 chapters, 1,559 pages, 323 executable code cells. Interactive Jupyter Notebooks and stable PDFs, in one open repository.",
      "جزوه‌ای جامع و فارسی برای درس داده‌کاوی — ۱۲ فصل، ۱٬۵۵۹ صفحه و ۳۲۳ سلول کد اجرایی. نوت‌بوک‌های تعاملی ژوپیتر و PDF‌های پایدار، در یک مخزن باز.",
    ),
    uni: p(
      "Islamic Azad University, Shiraz Branch · Faculty of Computer Engineering",
      "دانشگاه آزاد اسلامی واحد شیراز · دانشکده مهندسی کامپیوتر",
    ),
    ctaPdf: p("Download Full PDF", "دانلود نسخه کامل PDF"),
    ctaRepo: p("View on GitHub", "مشاهده در گیت‌هاب"),
    ctaChapters: p("Browse chapters", "مرور فصل‌ها"),
    chips: [
      p("CC BY-NC-ND 4.0", "CC BY-NC-ND 4.0"),
      p("Persian + English terms", "فارسی + اصطلاحات انگلیسی"),
      p("Python 3.12 / 3.13", "Python 3.12 / 3.13"),
      p("Git LFS", "Git LFS"),
    ],
    latest: p("Latest release", "آخرین انتشار"),
    status: p("All 12 chapters published", "هر ۱۲ فصل منتشر شده است"),
  },
  stats: {
    kicker: p("By the numbers", "در یک نگاه"),
    title: p("A textbook at serious scale", "جزوه‌ای در مقیاس جدی"),
    sub: p(
      "Statistics of the current public release.",
      "آمار نسخه عمومی فعلی.",
    ),
    items: [
      { v: 12, l: p("Published chapters", "فصل منتشرشده") },
      { v: 1559, l: p("PDF pages", "صفحه PDF") },
      { v: 1315, l: p("Notebook cells", "سلول نوت‌بوک") },
      { v: 992, l: p("Markdown cells", "سلول Markdown") },
      { v: 323, l: p("Code cells", "سلول کد") },
      { v: 62669, l: p("Lines of code", "خط کد") },
      { v: 227, l: p("Local images", "تصویر محلی") },
      { v: 13, l: p("PDF files", "فایل PDF") },
    ],
    chartTitle: p("Pages per chapter", "تعداد صفحات هر فصل"),
    chartSub: p("Chapter-level PDF length", "حجم PDF هر فصل"),
    cellsTitle: p("Markdown vs. code cells", "سلول‌های Markdown در برابر کد"),
    md: p("Markdown", "Markdown"),
    code: p("Code", "کد"),
    pages: p("pages", "صفحه"),
  },
  formats: {
    kicker: p("Three ways to read", "سه راه برای مطالعه"),
    title: p("One textbook, three formats", "یک جزوه، سه فرمت"),
    sub: p(
      "Notebooks are the primary interactive source; PDFs are stable reading-oriented representations.",
      "نوت‌بوک‌ها منبع تعاملی اصلی هستند و PDF‌ها نسخه‌های پایدار و مناسب مطالعه‌اند.",
    ),
    cards: [
      {
        tag: p("Interactive", "تعاملی"),
        title: p("Jupyter Notebooks", "نوت‌بوک‌های ژوپیتر"),
        desc: p(
          "Math notation, executable Python cells, visualizations, diagrams and examples — all in one place. Run locally or read on GitHub.",
          "نمادهای ریاضی، سلول‌های اجرایی پایتون، نمودارها، دیاگرام‌ها و مثال‌ها در یک‌جا. به‌صورت محلی اجرا کنید یا در گیت‌هاب بخوانید.",
        ),
        points: [
          p("12 × .ipynb files", "۱۲ فایل ipynb"),
          p("323 executable code cells", "۳۲۳ سلول کد اجرایی"),
          p("227 local images", "۲۲۷ تصویر محلی"),
        ],
        cta: p("Open chapters", "مشاهده فصل‌ها"),
      },
      {
        tag: p("Stable", "پایدار"),
        title: p("Chapter PDFs", "PDF هر فصل"),
        desc: p(
          "Linear reading, printing, annotation and offline study — chapter by chapter with smaller file sizes.",
          "مطالعه خطی، چاپ، حاشیه‌نویسی و مطالعه آفلاین — فصل به فصل و با حجم کمتر.",
        ),
        points: [
          p("12 × .pdf files", "۱۲ فایل pdf"),
          p("1,559 pages in total", "مجموعاً ۱٬۵۵۹ صفحه"),
          p("Print-ready layout", "آماده چاپ"),
        ],
        cta: p("Pick a chapter", "انتخاب فصل"),
      },
      {
        tag: p("Complete", "کامل"),
        title: p("Full Textbook PDF", "PDF کامل جزوه"),
        desc: p(
          "The entire published textbook as a single document for continuous reading, archiving and printing. Stored with Git LFS.",
          "کل جزوه منتشرشده در یک سند واحد برای مطالعه پیوسته، بایگانی و چاپ. ذخیره‌شده با Git LFS.",
        ),
        points: [
          p("All 12 chapters", "هر ۱۲ فصل"),
          p("Single file", "یک فایل واحد"),
          p("Full_version/Data_Mining_Textbook.pdf", "Full_version/Data_Mining_Textbook.pdf"),
        ],
        cta: p("Download PDF", "دانلود PDF"),
      },
    ],
  },
  chapters: {
    kicker: p("Table of contents", "فهرست مطالب"),
    title: p("12 chapters, from fundamentals to frontiers", "۱۲ فصل، از مبانی تا مرزهای دانش"),
    sub: p(
      "Open a chapter to see its sections, then jump straight to the notebook or PDF.",
      "فصل را باز کنید تا سرفصل‌ها را ببینید و مستقیم به نوت‌بوک یا PDF بروید.",
    ),
    search: p("Search chapters or topics…", "جستجوی فصل یا موضوع…"),
    none: p("No chapter matches your search.", "فصلی با این جستجو پیدا نشد."),
    chapter: p("Chapter", "فصل"),
    sections: p("Sections", "سرفصل‌ها"),
    show: p("Show sections", "نمایش سرفصل‌ها"),
    hide: p("Hide sections", "پنهان کردن"),
    notebook: p("Notebook", "نوت‌بوک"),
    pdf: p("PDF", "PDF"),
    pages: p("pages", "صفحه"),
    cells: p("cells", "سلول"),
    deps: p("Dependencies", "وابستگی‌ها"),
    groups: [
      { n: p("Foundations", "مبانی"), r: [0, 3] },
      { n: p("Patterns", "الگوها"), r: [3, 5] },
      { n: p("Classification", "طبقه‌بندی"), r: [5, 7] },
      { n: p("Clustering", "خوشه‌بندی"), r: [7, 9] },
      { n: p("Deep & Outliers", "عمیق و پرت‌ها"), r: [9, 11] },
      { n: p("Frontiers", "مرزها"), r: [11, 12] },
    ],
    all: p("All", "همه"),
  },
  approach: {
    kicker: p("Learning approach", "رویکرد آموزشی"),
    title: p("Six layers, one learning flow", "شش لایه، یک مسیر یادگیری"),
    sub: p(
      "Each topic moves from concept to computation — never an isolated list of definitions.",
      "هر مبحث از مفهوم تا محاسبه پیش می‌رود — نه فهرستی از تعاریف جدا از هم.",
    ),
    steps: [
      { t: p("Conceptual understanding", "درک مفهومی"), d: p("Core ideas presented in context, not as isolated definitions.", "مفاهیم اصلی در بستر خود، نه به‌صورت تعاریف جداگانه.") },
      { t: p("Intuition", "شهود"), d: p("Explanatory descriptions and practical interpretations.", "توضیحات شهودی و تفسیرهای کاربردی.") },
      { t: p("Mathematical formulation", "فرمول‌بندی ریاضی"), d: p("Equations and formal notation where structure matters.", "معادلات و نمادگذاری دقیق در جاهایی که ساختار ریاضی مهم است.") },
      { t: p("Visualization", "بصری‌سازی"), d: p("Charts, diagrams and figures throughout the material.", "نمودار، دیاگرام و شکل در سراسر متن.") },
      { t: p("Implementation", "پیاده‌سازی"), d: p("Executable Python examples that link theory to computation.", "مثال‌های اجرایی پایتون که نظریه را به محاسبه پیوند می‌دهند.") },
      { t: p("Application context", "بستر کاربردی"), d: p("Scenarios that connect algorithms to real data-mining settings.", "سناریوهایی که الگوریتم‌ها را به مسائل واقعی داده‌کاوی وصل می‌کنند.") },
    ],
  },
  lineage: {
    kicker: p("Project lineage", "پیشینه پروژه"),
    title: p("Version 2 is not a patch — it is a rewrite", "نسخه ۲ یک اصلاح جزئی نیست، بازنویسی کامل است"),
    sub: p(
      "Large portions of the material were revisited from the ground up: explanations, mathematical treatment, examples, visuals, notebook organization and demonstrations.",
      "بخش‌های بزرگی از مطالب از پایه بازنگری شده‌اند: نحوه توضیح، فرمول‌بندی ریاضی، مثال‌ها، عناصر بصری، ساختار نوت‌بوک‌ها و دمو‌ها.",
    ),
    v1: p("Version 1", "نسخه ۱"),
    v1d: p("The conceptual predecessor — an earlier Data Mining course textbook project.", "پیشین مفهومی پروژه — نخستین جزوه درس داده‌کاوی."),
    mid: p("Restructure · Rewrite · Expand · Redesign", "بازساختار · بازنویسی · گسترش · بازطراحی"),
    v2: p("Version 2", "نسخه ۲"),
    v2d: p("The current release — a new, substantially reworked edition for Fall 2026.", "انتشار فعلی — ویرایشی جدید و به‌طور اساسی بازکار‌شده برای پاییز ۲۰۲۶."),
    pillars: [
      p("Structure of explanations", "ساختار توضیحات"),
      p("Mathematical treatment", "فرمول‌بندی ریاضی"),
      p("Examples & visuals", "مثال‌ها و تصاویر"),
      p("Notebook organization", "سازمان‌دهی نوت‌بوک"),
      p("Practical demonstrations", "دموهای عملی"),
    ],
  },
  run: {
    kicker: p("Get started", "شروع کنید"),
    title: p("Read it, clone it, run it", "بخوانید، کلون کنید، اجرا کنید"),
    sub: p(
      "No Python needed for the PDFs. For executing notebooks, install the dependencies of the chapter you study.",
      "برای خواندن PDF‌ها به پایتون نیازی نیست. برای اجرای نوت‌بوک‌ها وابستگی‌های همان فصل را نصب کنید.",
    ),
    tabs: [p("Clone", "کلون"), p("Jupyter", "ژوپیتر"), p("Install", "نصب"), p("Git LFS", "Git LFS")],
    copy: p("Copy", "کپی"),
    copied: p("Copied!", "کپی شد!"),
    note: p(
      "GitHub renders .ipynb files for reading, but running cells requires local Jupyter or a compatible notebook service.",
      "گیت‌هاب فایل‌های ipynb را برای مطالعه نمایش می‌دهد، اما اجرای سلول‌ها به ژوپیتر محلی یا یک سرویس نوت‌بوک سازگار نیاز دارد.",
    ),
    depsTitle: p("Dependency matrix", "ماتریس وابستگی‌ها"),
    depsSub: p("Which libraries each chapter uses. No single locked requirements.txt is provided.", "هر فصل از کدام کتابخانه‌ها استفاده می‌کند. فایل requirements.txt واحدی ارائه نشده است."),
    ch: p("Ch", "فصل"),
    pyTitle: p("Python versions seen in notebook metadata", "نسخه‌های پایتون در متادیتای نوت‌بوک‌ها"),
    pyNote: p("Treat the repository as course material, not a software project with one pinned interpreter.", "این مخزن را مواد درسی بدانید، نه یک پروژه نرم‌افزاری با نسخه ثابت مفسر."),
  },
  people: {
    kicker: p("People", "افراد"),
    title: p("Made by a collaborative team", "حاصل کار یک تیم همکار"),
    sub: p("Under the supervision of the course instructor.", "با نظارت استاد درس."),
    instructor: p("Course Instructor", "استاد درس"),
    instructorName: p("Dr. Amin Eskandari", "دکتر امین اسکندری"),
    team: p("Design Team", "تیم طراحی"),
    course: [
      { k: p("Course", "درس"), v: p("Data Mining", "داده‌کاوی") },
      { k: p("University", "دانشگاه"), v: p("Islamic Azad University, Shiraz Branch", "دانشگاه آزاد اسلامی واحد شیراز") },
      { k: p("Faculty", "دانشکده"), v: p("Computer Engineering", "مهندسی کامپیوتر") },
      { k: p("Semester", "نیم‌سال"), v: p("Fall 2026", "پاییز ۲۰۲۶") },
      { k: p("Academic year", "سال تحصیلی"), v: p("2026–2027", "۲۰۲۶–۲۰۲۷") },
      { k: p("Language", "زبان"), v: p("Persian + English terminology", "فارسی + اصطلاحات انگلیسی") },
      { k: p("Edition", "ویرایش"), v: p("Version 2", "نسخه ۲") },
    ],
  },
  license: {
    kicker: p("License", "مجوز"),
    title: p("Open to read. Protected to preserve.", "آزاد برای مطالعه، محافظت‌شده برای حفظ اصالت"),
    sub: p("Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International.", "مجوز Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International."),
    badges: [
      { c: "BY", t: p("Attribution", "ذکر نام"), d: p("Appropriate credit must be retained.", "ذکر نام نویسندگان الزامی است.") },
      { c: "NC", t: p("NonCommercial", "غیرتجاری"), d: p("Commercial use is not permitted.", "استفاده تجاری مجاز نیست.") },
      { c: "ND", t: p("NoDerivatives", "بدون اقتباس"), d: p("Adapted material may not be distributed.", "توزیع نسخه‌های اقتباسی مجاز نیست.") },
    ],
    can: p("You may", "مجاز است"),
    cannot: p("You may not", "مجاز نیست"),
    canList: [
      p("Read and download the material", "مطالعه و دانلود مطالب"),
      p("Share the original in non-commercial contexts", "اشتراک‌گذاری نسخه اصلی در بسترهای غیرتجاری"),
      p("Cite it in projects, papers and lectures", "ارجاع در پروژه‌ها، مقالات و سخنرانی‌ها"),
    ],
    cannotList: [
      p("Use it commercially", "استفاده تجاری"),
      p("Distribute modified or adapted versions", "توزیع نسخه‌های تغییریافته یا اقتباسی"),
      p("Remove author attribution", "حذف نام نویسندگان"),
    ],
    third: p("Third-party material", "مطالب شخص ثالث"),
    thirdD: p(
      "A local image is not automatically proof of original authorship. Third-party assets keep their own copyright and licensing, and the repository license does not relicense them.",
      "وجود یک تصویر در مخزن به‌معنی اثبات تولید آن توسط نویسندگان نیست. مطالب شخص ثالث تابع حق نشر و مجوز خودشان هستند و مجوز مخزن آن‌ها را بازمجوزدهی نمی‌کند.",
    ),
    legal: p("The legal text in LICENSE is authoritative.", "متن حقوقی فایل LICENSE مرجع نهایی است."),
    view: p("Official license page", "صفحه رسمی مجوز"),
  },
  cite: {
    kicker: p("Citation", "ارجاع"),
    title: p("Cite this textbook", "به این جزوه ارجاع دهید"),
    sub: p("Using it in a project, report, paper or lecture? Please cite the authors and link the repository.", "در پروژه، گزارش، مقاله یا ارائه از آن استفاده می‌کنید؟ لطفاً به نویسندگان ارجاع دهید و لینک مخزن را بدهید."),
    tabs: [p("Plain text", "متن ساده"), p("BibTeX", "BibTeX")],
  },
  faq: {
    kicker: p("FAQ", "سوالات متداول"),
    title: p("Frequently asked questions", "پرسش‌های پرتکرار"),
    items: [
      { q: p("What semester is this release for?", "این انتشار برای کدام نیم‌سال است؟"), a: p("Fall 2026, within the 2026–2027 academic year.", "پاییز ۲۰۲۶، در سال تحصیلی ۲۰۲۶–۲۰۲۷.") },
      { q: p("Is Version 2 just an edited copy of Version 1?", "آیا نسخه ۲ فقط ویرایش نسخه ۱ است؟"), a: p("No. It is a major restructuring and rework of content organization, explanations, presentation, mathematical treatment, visuals and implementation material.", "خیر. این نسخه بازساختار و بازکاری اساسی در سازمان محتوا، توضیحات، ارائه، فرمول‌بندی ریاضی، عناصر بصری و پیاده‌سازی‌هاست.") },
      { q: p("Which chapters are public?", "کدام فصل‌ها عمومی هستند؟"), a: p("Chapters 1–12 are all published, each as a Notebook and a PDF.", "همه فصل‌های ۱ تا ۱۲ منتشر شده‌اند؛ هر فصل در قالب نوت‌بوک و PDF.") },
      { q: p("Do I need Python to read the textbook?", "برای خواندن جزوه به پایتون نیاز دارم؟"), a: p("No. PDFs need no Python. Python and Jupyter are only required to execute notebook cells.", "خیر. PDF‌ها به پایتون نیاز ندارند. پایتون و ژوپیتر فقط برای اجرای سلول‌های نوت‌بوک لازم‌اند.") },
      { q: p("Why is the full PDF stored with Git LFS?", "چرا PDF کامل با Git LFS ذخیره شده است؟"), a: p("It is much larger than a typical Git file. If you clone the repo, install Git LFS to fetch it automatically; downloading directly from GitHub needs nothing extra.", "حجم آن از فایل‌های معمول گیت بسیار بیشتر است. اگر مخزن را کلون می‌کنید Git LFS را نصب کنید؛ دانلود مستقیم از گیت‌هاب نیاز به چیز اضافه‌ای ندارد.") },
      { q: p("Can I run the notebooks directly on GitHub?", "می‌توانم نوت‌بوک‌ها را مستقیم در گیت‌هاب اجرا کنم؟"), a: p("GitHub renders notebooks for reading only. Use local Jupyter or a compatible notebook service to execute cells.", "گیت‌هاب نوت‌بوک‌ها را فقط برای مطالعه نمایش می‌دهد. برای اجرا از ژوپیتر محلی یا سرویس سازگار استفاده کنید.") },
      { q: p("Does the license cover every file?", "آیا مجوز همه فایل‌ها را پوشش می‌دهد؟"), a: p("No. Only material the authors have rights to. Third-party material remains under its own terms.", "خیر. فقط مطالبی که نویسندگان حق آن را دارند. مطالب شخص ثالث تابع شرایط خودشان هستند.") },
    ],
    report: p("Found a mistake?", "اشکالی پیدا کردید؟"),
    reportD: p("Typos, broken links, missing images or code issues — report them on GitHub Issues with chapter, file, section and environment.", "غلط تایپی، لینک خراب، تصویر گم‌شده یا مشکل کد — با ذکر فصل، فایل، بخش و محیط اجرا در GitHub Issues گزارش دهید."),
    reportCta: p("Open an issue", "ثبت Issue"),
  },
  cta: {
    title: p("Start learning data mining today", "از امروز داده‌کاوی را یاد بگیرید"),
    sub: p("Free to read, built with care by students and faculty.", "رایگان برای مطالعه، ساخته‌شده با دقت توسط دانشجویان و استاد."),
  },
  footer: {
    line: p("Data Mining Textbook — Version 2", "جزوه داده‌کاوی — نسخه ۲"),
    uni: p("Islamic Azad University, Shiraz Branch · Faculty of Computer Engineering", "دانشگاه آزاد اسلامی واحد شیراز · دانشکده مهندسی کامپیوتر"),
    term: p("Fall 2026 · Academic Year 2026–2027", "پاییز ۲۰۲۶ · سال تحصیلی ۲۰۲۶–۲۰۲۷"),
    copy: p("Copyright © 2026 — the authors. Third-party material remains subject to its own rights.", "کپی‌رایت © ۲۰۲۶ — نویسندگان. مطالب شخص ثالث تابع حقوق خودشان هستند."),
    top: p("Back to top", "بازگشت به بالا"),
  },
};

export const citationText =
  "Hamid Namjoo; Amir Hossein Hemmati; Amir Mohammad Asadjoo; Ali Nikvan; Reza Liaqat; Alireza Moghaddas; Golnoush Hosseinpour; Elham Izadi. Data Mining Textbook, Version 2. Islamic Azad University, Shiraz Branch, Faculty of Computer Engineering, Fall 2026, Academic Year 2026–2027. GitHub: https://github.com/IAU-Shiraz-Courses/Data-Mining-Textbook";

export const bibtex = `@misc{data_mining_textbook_v2_2026,
  title  = {Data Mining Textbook, Version 2},
  author = {Namjoo, Hamid and
            Hemmati, Amir Hossein and
            Asadjoo, Amir Mohammad and
            Nikvan, Ali and
            Liaqat, Reza and
            Moghaddas, Alireza and
            Hosseinpour, Golnoush and
            Izadi, Elham},
  year   = {2026},
  note   = {Islamic Azad University, Shiraz Branch,
            Faculty of Computer Engineering,
            Fall 2026, Academic Year 2026--2027},
  url    = {https://github.com/IAU-Shiraz-Courses/Data-Mining-Textbook}
}`;

export const runSnippets = [
  `git clone https://github.com/IAU-Shiraz-Courses/Data-Mining-Textbook.git
cd Data-Mining-Textbook`,
  `jupyter lab
# or
jupyter notebook`,
  `pip install numpy pandas matplotlib seaborn scipy \\
            scikit-learn networkx mlxtend gensim nltk \\
            textblob shapely scikit-image python-louvain`,
  `git lfs install
git lfs pull   # fetch Full_version/Data_Mining_Textbook.pdf`,
];

export const toFa = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
