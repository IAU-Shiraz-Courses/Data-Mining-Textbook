export type Chapter = {
  id: string;
  title: { en: string; fa: string };
  focus: { en: string; fa: string };
  pages: number;
  cells: number;
  md: number;
  code: number;
  deps: string[];
  sections: string[];
  hue: number;
};

export const chapters: Chapter[] = [
  {
    id: "01",
    title: { en: "Introduction", fa: "مقدمه" },
    focus: {
      en: "Establishes the conceptual foundation of data mining: its role in knowledge discovery, major data types and mining tasks, and its relation to statistics, machine learning, databases and data science.",
      fa: "پایه‌های مفهومی داده‌کاوی: جایگاه آن در کشف دانش، انواع داده و وظایف داده‌کاوی و ارتباط آن با آمار، یادگیری ماشین، پایگاه داده و علم داده.",
    },
    pages: 97,
    cells: 104,
    md: 81,
    code: 23,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scipy", "scikit-learn", "networkx", "mlxtend"],
    sections: [
      "1.1 What is Data Mining?",
      "1.2 Data Mining: An Essential Step in Knowledge Discovery",
      "1.3 Diversity of Data Types for Data Mining",
      "1.4 Mining Various Kinds of Knowledge",
      "1.5 Data Mining: Confluence of Multiple Disciplines",
      "1.6 Data Mining and Applications",
      "1.7 Data Mining and Society",
    ],
    hue: 190,
  },
  {
    id: "02",
    title: { en: "Data, Measurements, and Data Preprocessing", fa: "داده، اندازه‌گیری و پیش‌پردازش داده" },
    focus: {
      en: "From attribute types and descriptive statistics to similarity measures, data cleaning, integration, transformation, sampling and dimensionality reduction.",
      fa: "از انواع ویژگی و آمار توصیفی تا معیارهای شباهت، پاک‌سازی، یکپارچه‌سازی، تبدیل و نمونه‌برداری داده و کاهش ابعاد.",
    },
    pages: 163,
    cells: 208,
    md: 162,
    code: 46,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scipy", "scikit-learn", "gensim"],
    sections: [
      "2.1 Data Types",
      "2.2 Statistics of Data",
      "2.3 Similarity and Distance Measures",
      "2.4 Data Quality, Data Cleaning, and Data Integration",
      "2.5 Data Transformation",
      "2.6 Dimensionality Reduction",
    ],
    hue: 205,
  },
  {
    id: "03",
    title: { en: "Data Warehousing and Online Analytical Processing", fa: "انبار داده و پردازش تحلیلی برخط (OLAP)" },
    focus: {
      en: "Data warehouses, marts and lakes, multidimensional models, data cubes, concept hierarchies, OLAP operations, indexing, storage and data cube computation.",
      fa: "انبار داده، Data Mart و Data Lake، مدل‌های چندبعدی، مکعب داده، سلسله‌مراتب مفهومی، عملیات OLAP، ایندکس‌گذاری و محاسبه مکعب داده.",
    },
    pages: 116,
    cells: 117,
    md: 95,
    code: 22,
    deps: ["numpy", "pandas", "matplotlib", "seaborn"],
    sections: [
      "3.1 Data Warehouse",
      "3.2 Data Warehouse Modeling: Schema and Measures",
      "3.3 OLAP Operations",
      "3.4 Data Cube Computation",
      "3.5 Data Cube Computation Methods",
    ],
    hue: 222,
  },
  {
    id: "04",
    title: { en: "Pattern Mining: Basic Concepts and Methods", fa: "کاوش الگو: مفاهیم و روش‌های پایه" },
    focus: {
      en: "Frequent-pattern mining and association analysis: market baskets, Apriori, pattern growth, vertical formats, closed/max patterns and evaluation measures.",
      fa: "کاوش الگوهای مکرر و قواعد انجمنی: سبد خرید، Apriori، رشد الگو، قالب عمودی، الگوهای بسته و بیشینه و معیارهای ارزیابی.",
    },
    pages: 86,
    cells: 84,
    md: 70,
    code: 14,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "mlxtend"],
    sections: [
      "4.1 Basic Concepts",
      "4.2 Frequent Itemset Mining Methods",
      "4.3 Which Patterns Are Interesting? Pattern Evaluation Methods",
    ],
    hue: 245,
  },
  {
    id: "05",
    title: { en: "Advanced Pattern Mining", fa: "کاوش الگوی پیشرفته" },
    focus: {
      en: "Multilevel, multidimensional, quantitative, rare and negative patterns; compressed and top-k patterns; constraint-based, sequential and subgraph mining.",
      fa: "الگوهای چندسطحی، چندبعدی، کمّی، نادر و منفی؛ الگوهای فشرده و top-k؛ کاوش مبتنی بر محدودیت، الگوهای دنباله‌ای و زیرگراف.",
    },
    pages: 119,
    cells: 74,
    md: 53,
    code: 21,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "gensim", "nltk"],
    sections: [
      "5.1 Mining Various Kinds of Patterns",
      "5.2 Mining Compressed or Approximate Patterns",
      "5.3 Constraint-Based Pattern Mining",
      "5.4 Mining Sequential Patterns",
      "5.5 Mining Subgraph Patterns",
      "5.6 Pattern Mining: Application Examples",
    ],
    hue: 265,
  },
  {
    id: "06",
    title: { en: "Classification: Basic Concepts and Techniques", fa: "طبقه‌بندی: مفاهیم و تکنیک‌های پایه" },
    focus: {
      en: "Supervised classification from decision trees, Bayes, k-NN and linear models to model evaluation, cross-validation, ROC analysis and ensembles.",
      fa: "طبقه‌بندی نظارت‌شده؛ از درخت تصمیم، بیز، k-NN و مدل‌های خطی تا ارزیابی مدل، اعتبارسنجی متقابل، منحنی ROC و روش‌های ترکیبی.",
    },
    pages: 186,
    cells: 118,
    md: 82,
    code: 36,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scikit-learn"],
    sections: [
      "6.1 Basic Concepts",
      "6.2 Decision Tree Induction",
      "6.3 Bayes Classification Methods",
      "6.4 Lazy Learners",
      "6.5 Linear Classifiers",
      "6.6 Model Evaluation and Selection",
      "6.7 Techniques to Improve Classification Accuracy",
    ],
    hue: 285,
  },
  {
    id: "07",
    title: { en: "Classification: Advanced Methods", fa: "طبقه‌بندی: روش‌های پیشرفته" },
    focus: {
      en: "Feature selection, Bayesian belief networks, SVMs, rule-based classification, weak supervision, rich data types, interpretability and reinforcement learning.",
      fa: "انتخاب ویژگی، شبکه‌های باور بیزی، SVM، طبقه‌بندی قاعده‌محور، نظارت ضعیف، انواع داده غنی، تفسیرپذیری و یادگیری تقویتی.",
    },
    pages: 183,
    cells: 121,
    md: 92,
    code: 29,
    deps: ["numpy", "pandas", "matplotlib", "seaborn"],
    sections: [
      "7.1 Feature Selection and Engineering",
      "7.2 Bayesian Belief Networks",
      "7.3 Support Vector Machines",
      "7.4 Rule-Based and Pattern-Based Classification",
      "7.5 Classification with Weak Supervision",
      "7.6 Classification with Rich Data Types",
      "7.7 Potpourri: Other Related Techniques",
    ],
    hue: 305,
  },
  {
    id: "08",
    title: { en: "Cluster Analysis", fa: "تحلیل خوشه‌ای" },
    focus: {
      en: "Clustering as unsupervised learning: partitioning, hierarchical, density-based and grid-based methods, plus tendency, cluster count and quality evaluation.",
      fa: "خوشه‌بندی به‌عنوان یادگیری بدون نظارت: روش‌های افرازی، سلسله‌مراتبی، مبتنی بر چگالی و شبکه‌ای و ارزیابی کیفیت خوشه‌ها.",
    },
    pages: 115,
    cells: 79,
    md: 56,
    code: 23,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scipy", "scikit-learn"],
    sections: [
      "8.1 Cluster Analysis",
      "8.2 Partitioning Methods",
      "8.3 Hierarchical Methods",
      "8.4 Density-Based and Grid-Based Methods",
      "8.5 Evaluation of Clustering",
    ],
    hue: 325,
  },
  {
    id: "09",
    title: { en: "Advanced Cluster Analysis", fa: "تحلیل خوشه‌ای پیشرفته" },
    focus: {
      en: "Fuzzy and probabilistic clustering, EM, high-dimensional data, biclustering, spectral clustering, graph clustering and semisupervised clustering.",
      fa: "خوشه‌بندی فازی و احتمالاتی، الگوریتم EM، داده‌های با بُعد بالا، Biclustering، خوشه‌بندی طیفی، خوشه‌بندی گراف و نیمه‌نظارتی.",
    },
    pages: 125,
    cells: 101,
    md: 72,
    code: 29,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scikit-learn", "networkx", "python-louvain"],
    sections: [
      "9.1 Probabilistic Model-Based Clustering",
      "9.2 Clustering High-Dimensional Data",
      "9.3 Biclustering",
      "9.4 Dimensionality Reduction for Clustering",
      "9.5 Clustering Graph and Network Data",
      "9.6 Semisupervised Clustering",
    ],
    hue: 345,
  },
  {
    id: "10",
    title: { en: "Deep Learning", fa: "یادگیری عمیق" },
    focus: {
      en: "Neural-network fundamentals to modern architectures: backpropagation, activation functions, dropout, autoencoders, CNNs, RNNs and GNNs.",
      fa: "از مبانی شبکه عصبی تا معماری‌های مدرن: پس‌انتشار خطا، توابع فعال‌سازی، Dropout، Autoencoder، CNN، RNN و GNN.",
    },
    pages: 108,
    cells: 83,
    md: 65,
    code: 18,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scikit-learn"],
    sections: [
      "10.1 Basic Concepts",
      "10.2 Improve Training of Deep Learning Models",
      "10.3 Convolutional Neural Networks",
      "10.4 Recurrent Neural Networks",
      "10.5 Graph Neural Networks",
    ],
    hue: 10,
  },
  {
    id: "11",
    title: { en: "Outlier Detection", fa: "تشخیص داده‌های پرت" },
    focus: {
      en: "Statistical, proximity-, reconstruction-, clustering- and classification-based detection; contextual, collective and high-dimensional outliers.",
      fa: "روش‌های آماری، مبتنی بر مجاورت، بازسازی، خوشه‌بندی و طبقه‌بندی؛ پرت‌های زمینه‌ای، جمعی و داده‌های با بُعد بالا.",
    },
    pages: 141,
    cells: 119,
    md: 88,
    code: 31,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scipy", "scikit-learn", "networkx"],
    sections: [
      "11.1 Basic Concepts",
      "11.2 Statistical Approaches",
      "11.3 Proximity-Based Approaches",
      "11.4 Reconstruction-Based Approaches",
      "11.5 Clustering- vs. Classification-Based Approaches",
      "11.6 Mining Contextual and Collective Outliers",
      "11.7 Outlier Detection in High-Dimensional Data",
    ],
    hue: 28,
  },
  {
    id: "12",
    title: { en: "Data Mining Trends and Research Frontiers", fa: "روندها و مرزهای پژوهشی داده‌کاوی" },
    focus: {
      en: "Rich data types, sentiment and truth discovery, causality, AutoML, privacy-preserving mining, fairness, interpretability and data mining for social good.",
      fa: "داده‌های غنی، تحلیل احساسات و کشف حقیقت، علّیت، AutoML، داده‌کاوی حافظ حریم خصوصی، انصاف، تفسیرپذیری و داده‌کاوی برای خیر اجتماعی.",
    },
    pages: 120,
    cells: 107,
    md: 76,
    code: 31,
    deps: ["numpy", "pandas", "matplotlib", "seaborn", "scipy", "scikit-learn", "networkx", "shapely", "scikit-image", "textblob"],
    sections: [
      "12.1 Mining Rich Data Types",
      "12.2 Data Mining Applications",
      "12.3 Data Mining Methodologies and Systems",
      "12.4 Data Mining, People, and Society",
    ],
    hue: 48,
  },
];

export const team = [
  "Hamid Namjoo",
  "Amir Hossein Hemmati",
  "Amir Mohammad Asadjoo",
  "Ali Nikvan",
  "Reza Liaqat",
  "Alireza Moghaddas",
  "Golnoush Hosseinpour",
  "Elham Izadi",
];

export const teamFa = [
  "حمید نامجو",
  "امیرحسین همتی",
  "امیرمحمد اسدجو",
  "علی نیک‌وند",
  "رضا لیاقت",
  "علیرضا مقدس",
  "گلنوش حسین‌پور",
  "الهام ایزدی",
];

export const INSTRUCTOR_URL = "https://ir.linkedin.com/in/amin-eskandari-1756a73b";

export const teamLinks: Record<string, string> = {
  "Hamid Namjoo": "https://hamidnamjoo.com/",
  "Amir Hossein Hemmati": "https://github.com/AmirHosseinHemati",
  "Amir Mohammad Asadjoo": "https://github.com/Amir-Mohammd-Asadjoo",
};

export const REPO ="https://github.com/IAU-Shiraz-Courses/Data-Mining-Textbook";
export const repoBlob = (p: string) => `${REPO}/blob/main/${p}`;
export const repoRaw = (p: string) => `${REPO}/raw/main/${p}`;
