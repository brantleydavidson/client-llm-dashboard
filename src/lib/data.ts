// lib/data.ts

import type { AnalysisDatabase } from './types';

export const platformData = [
  {
    name: 'ChatGPT',
    strength: 2.8,
    currentScore: {
      technical: 3.1,
      brand: 2.8,
      content: 2.5
    },
    analysis: {
      technical: {
        strengths: [
          "Basic understanding of bimetallic wire technology",
          "Recognizes manufacturing process fundamentals",
          "Can explain basic product applications"
        ],
        weaknesses: [
          "Limited technical specifications detail",
          "Incomplete quality control information",
          "Missing performance metrics",
          "Gaps in manufacturing process knowledge"
        ]
      },
      brand: {
        strengths: [
          "Understands Copperweld's brand identity",
          "Consistent product line references"
        ],
        weaknesses: [
          "Confuses brand with generic copper wire sometimes",
          "Minimal marketing details"
        ]
      },
      content: {
        strengths: [
          "Provides some product usage scenarios",
          "Outlines basic corporate messaging"
        ],
        weaknesses: [
          "Incomplete historical context on brand origin",
          "Limited detail on content strategy"
        ]
      }
    }
  },
  {
    name: 'Claude',
    strength: 3.0,
    currentScore: {
      technical: 3.2,
      brand: 2.9,
      content: 3.1
    },
    analysis: {
      technical: {
        strengths: [
          "Thorough on manufacturing processes",
          "Knowledge of bimetallic layering"
        ],
        weaknesses: [
          "Still missing advanced performance metrics",
          "Less clarity on QA procedures"
        ]
      },
      brand: {
        strengths: [
          "Recognizes Copperweld brand visuals",
          "Differentiates brand from direct competitors"
        ],
        weaknesses: [
          "Sometimes merges brand data with competitor info",
          "Minimal coverage on brand loyalty aspects"
        ]
      },
      content: {
        strengths: [
          "Generates more thorough application examples",
          "Includes safety considerations"
        ],
        weaknesses: [
          "Lacks real-world case studies",
          "Limited mention of environmental benefits"
        ]
      }
    }
  }
];

export const analysisDatabase: AnalysisDatabase = {
  chatgpt: {
    technical: {
      specifications: {
        limitations: [
          {
            finding: "Token limit of 4096 tokens",
            source: "OpenAI Documentation",
            date: "2024-03-20",
            context: "ChatGPT has a maximum context window of 4096 tokens per conversation."
          }
        ]
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    brand: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    content: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    }
  },
  claude: {
    technical: {
      specifications: {
        limitations: [
          {
            finding: "100K token context window",
            source: "Anthropic Documentation",
            date: "2024-03-20",
            context: "Claude 3 can process up to 100,000 tokens in a single conversation."
          }
        ]
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    brand: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    content: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    }
  },
  grok: {
    technical: {
      specifications: {
        limitations: [
          {
            finding: "Real-time data cutoff",
            source: "X/Twitter Documentation",
            date: "2024-03-20",
            context: "Grok has access to real-time X/Twitter data but limited historical context."
          }
        ]
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    brand: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    content: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    }
  },
  gemini: {
    technical: {
      specifications: {
        limitations: [
          {
            finding: "Limited coding capabilities",
            source: "Google AI Documentation",
            date: "2024-03-20",
            context: "Gemini Pro has shown limitations in complex coding tasks compared to competitors."
          }
        ]
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    brand: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    content: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    }
  },
  perplexity: {
    technical: {
      specifications: {
        limitations: [
          {
            finding: "API access restrictions",
            source: "Perplexity Documentation",
            date: "2024-03-20",
            context: "Limited API access for custom integrations compared to other platforms."
          }
        ]
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    brand: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    },
    content: {
      specifications: {
        limitations: []
      },
      manufacturing: {
        limitations: []
      },
      applications: {
        limitations: []
      }
    }
  }
};
