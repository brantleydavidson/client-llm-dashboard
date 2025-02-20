interface Finding {
  finding: string;
  source: string;
  date: string;
  context: string;
}

interface Subcategory {
  limitations: Finding[];
}

interface Category {
  specifications: Subcategory;
  manufacturing: Subcategory;
  applications: Subcategory;
}

interface Platform {
  technical: Category;
  brand: Category;
  content: Category;
}

export interface AnalysisDatabase {
  chatgpt: Platform;
  claude: Platform;
  grok: Platform;
  gemini: Platform;
  perplexity: Platform;
}
