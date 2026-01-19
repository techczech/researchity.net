import { ResearchRole } from '../types';

export const understandingAiContent = {
  title: "Understanding AI",
  description: "Before diving into specific tools, it is crucial to understand what AI represents in a research context. It is not merely an automated search engine or a plagiarism machine; it is a probabilistic engine capable of semantic understanding and creative synthesis.",
  sections: [
    {
      title: "Generative vs. Search",
      icon: "Cpu",
      color: "indigo",
      content: "Traditional research tools retrieve information that already exists. Generative AI creates new information based on patterns it has learned. This distinction is vital: AI can \"hallucinate\" facts, but it can also generate novel hypotheses, synthesize disparate ideas, and format data in ways no search engine can."
    },
    {
      title: "Large Language Models (LLMs)",
      icon: "Network",
      color: "rose",
      content: "LLMs work by predicting the next token in a sequence. This probabilistic nature makes them excellent at understanding context, tone, and structure, which are often the hardest parts of qualitative analysis and academic writing. They act as \"reasoning engines\" rather than just knowledge bases."
    },
    {
      title: "The \"Human in the Loop\"",
      icon: "Lightbulb",
      color: "amber",
      content: "Researchity emphasizes that AI should not replace the researcher. Instead, it amplifies human capability. The researcher provides the critical thinking, the ethical framework, and the final judgment; the AI provides speed, scale, and pattern recognition."
    }
  ]
};

export const rolesContent = {
  title: "Three Roles AI Can Play",
  description: "Dominik Lukes identifies three distinct modalities for interacting with AI in a research context. Understanding which role you need at any given moment is key to effective usage.",
  items: [
    {
      role: ResearchRole.ASSISTANT,
      title: "The tireless administrative aid",
      icon: "Brain",
      color: "blue",
      description: "As an Assistant, AI helps clear the clutter. It takes on the repetitive, cognitive drudgery that slows research down. It doesn't necessarily generate new knowledge, but it organizes existing workflows.",
      tasks: [
        "Drafting emails to participants or collaborators",
        "Formatting bibliographies and citations",
        "Summarizing meeting notes into action items",
        "Scheduling and project management"
      ],
      promptExample: "\"Here are my rough notes from the lab meeting. Please summarize the key decisions made regarding the sample size and create a to-do list for the graduate students.\""
    },
    {
      role: ResearchRole.ANALYST,
      title: "The pattern seeker",
      icon: "Search",
      color: "purple",
      description: "As an Analyst, AI acts as a sounding board and a second pair of eyes. It can process vast amounts of text to find themes, contradictions, or gaps that a human might miss due to fatigue.",
      tasks: [
        "Coding qualitative data (interviews, survey responses)",
        "Identifying logical fallacies in arguments",
        "Suggesting statistical approaches for datasets",
        "Comparing and contrasting theoretical frameworks"
      ],
      promptExample: "\"I am pasting three abstracts from recent papers on cognitive load theory. Identify the conflicting definitions of 'intrinsic load' across these three texts.\""
    },
    {
      role: ResearchRole.TOOLMAKER,
      title: "The technical enabler",
      icon: "Hammer",
      color: "teal",
      description: "The most transformative role. You no longer need to be a master programmer to create custom software. AI can write the code you need to solve specific, one-off research problems.",
      tasks: [
        "Writing Python scripts to scrape public data",
        "Creating Regex patterns for text cleaning",
        "Generating R code for specific visualizations",
        "Debugging Excel formulas or SQL queries"
      ],
      promptExample: "\"Write a Python script using Beautiful Soup to extract all table data from a list of URLs in a CSV file and save the results as a new JSON file.\""
    }
  ]
};

export const usesContent = {
  title: "Uses for AI in Research",
  items: [
    {
      title: "1. Literature Reviews",
      icon: "BookOpen",
      color: "blue",
      content: "AI can rapidly synthesize hundreds of abstracts, map citation networks, and suggest relevant papers that might be missed by keyword searches alone. It helps in creating the 'state of the art' overview much faster."
    },
    {
      title: "2. Peer Reviews",
      icon: "Users",
      color: "indigo",
      content: "While AI should not replace human judgment, it can be used to check for clarity, consistency, and missing references in manuscripts before they are submitted. It acts as a friendly 'Reviewer #2' to improve quality."
    },
    {
      title: "3. Research Dissemination",
      icon: "Share2",
      color: "green",
      content: "Turning a complex academic paper into a blog post, a tweet thread, or a presentation script is a perfect task for AI. It helps translate academic jargon into accessible language for wider audiences."
    },
    {
      title: "4. Research Tools",
      icon: "Wrench",
      color: "amber",
      content: "Beyond using existing tools, AI can help build them. From simple survey generators to complex data scrapers, AI lowers the barrier to entry for technical research methods."
    },
    {
      title: "5. Qualitative Data Analysis",
      icon: "FileText",
      color: "rose",
      content: "Coding interview transcripts is time-consuming. AI can suggest initial codes, identify themes, and perform sentiment analysis on large qualitative datasets, giving the researcher a head start."
    }
  ]
};

export const toolsContent = {
  examplesTitle: "Examples of Research Tools",
  examplesDescription: "When acting as a Toolmaker, AI can help you build specific utilities for these domains.",
  categories: [
    {
      category: "Research Dissemination",
      icon: "Globe",
      description: "Tools to spread your work.",
      items: ["Blog Post Generators", "Tweet Thread Composers", "Plain Language Summarizers"]
    },
    {
      category: "Data Collection",
      icon: "RefreshCcw",
      description: "Tools to gather information.",
      items: ["Web Scrapers (Python/Selenium)", "Survey Form Generators", "API Connectors"]
    },
    {
      category: "Text Analysis",
      icon: "FileText",
      description: "Tools to understand data.",
      items: ["Sentiment Analyzers", "Thematic Coders", "Entity Extractors"]
    }
  ],
  featuredProjects: [
    {
      title: "Semantic Text Unweaver",
      description: "Demo tool for text analysis on Semantic Text Unweaver.",
      url: "https://unweaver.researchity.net/",
      type: "Tool Demo"
    },
    {
      title: "View From History",
      description: "Example of research project using LLMs as analysis.",
      url: "https://viewfromhistory.semanticmachines.fyi/",
      type: "Research Project"
    },
    {
      title: "MPI Explorer Example",
      description: "Example of research dissemination build using Google AI Studio.",
      url: "https://mpiexplorer-example.researchity.net/",
      type: "Dissemination"
    }
  ]
};

export const aboutContent = {
  companionSites: [
    {
      name: "edutools.fyi",
      url: "https://edutools.fyi",
      description: "A comprehensive directory of AI tools for education. While edutools.fyi catalogues the tools, Researchity explores the methodology."
    },
    {
      name: "semanticmachines.fyi",
      url: "https://semanticmachines.fyi",
      description: "Exploring the intersection of semantic technologies and AI."
    }
  ]
};