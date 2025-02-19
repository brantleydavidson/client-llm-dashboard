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
              source: "Test Set A: Core Technology Baseline Results.md",
              date: "January 27, 2025",
              context: "Response provided basic conductor properties but lacked detailed specifications for different gauge sizes and applications"
            }
          ]
        }
      }
    }
  };