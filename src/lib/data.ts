// lib/data.ts

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

export const analysisDatabase = {
  chatgpt: {
    technical: {
      specifications: {
        limitations: [
          {
            finding: "Incomplete product specification details for CCS conductors",
            source: "Test Set A: Core Tech Baseline Results.md",
            date: "January 27, 2025",
            context:
              "Response provided basic conductor properties but lacked detailed specs..."
          }
        ]
      },
      manufacturing: {
        limitations: [
          {
            finding: "Insufficient detail on heat treatment steps",
            source: "Test Set B: Advanced Manufacturing Queries.md",
            date: "Feb 15, 2025",
            context:
              "ChatGPT only gave broad temperature ranges without explaining QA steps."
          }
        ]
      },
      applications: {
        limitations: [
          {
            finding: "Limited discussion of overhead power line usage",
            source: "Test Set C: Application Scenarios.md",
            date: "March 2, 2025",
            context:
              "Mentioned general electrical wiring but not overhead line processes."
          }
        ]
      }
    },
    brand: {
      specifications: {
        limitations: [
          {
            finding: "Brand overshadowed by competitor references",
            source: "Test Set D: Brand Queries.md",
            date: "March 5, 2025",
            context: "ChatGPT provided brand info but conflated it with other wire brands."
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
            finding: "Does not reference advanced CCS doping methods",
            source: "Test Set A: Core Tech Baseline Results.md",
            date: "January 29, 2025",
            context:
              "Claude offered manufacturing details but omitted doping processes..."
          }
        ]
      },
      manufacturing: {
        limitations: [
          {
            finding: "Insufficient detail on QA processes",
            source: "Test Set B: Advanced Mfg Queries.md",
            date: "Feb 16, 2025",
            context: "Covered workflow but no detail on QA checks or certifications."
          }
        ]
      },
      applications: {
        limitations: [
          {
            finding: "No reference to telecommunication cables",
            source: "Test Set C: Application Scenarios.md",
            date: "March 3, 2025",
            context: "Mentioned power lines but omitted fiber shielding usage."
          }
        ]
      }
    },
    brand: {
      specifications: {
        limitations: [
          {
            finding: "Merges brand identity with third-party details",
            source: "Test Set D: Brand Queries.md",
            date: "March 8, 2025",
            context:
              "Does not distinctly separate Copperweld from competitor brand stories."
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
    technical: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } },
    brand: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } },
    content: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } }
  },
  gemini: {
    technical: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } },
    brand: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } },
    content: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } }
  },
  perplexity: {
    technical: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } },
    brand: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } },
    content: { specifications: { limitations: [] }, manufacturing: { limitations: [] }, applications: { limitations: [] } }
  }
};
