// src/data.js
export const profile = {
  name: "Pusapati Geetanjali",
  role: "Aspiring AI Engineer | Agentic AI Specialist", 
  email: "pusapatigeetanjali2000@gmail.com", 
  phone: "+91 9000936571", 
  location: "Hyderabad, India", 
  linkedin: "https://www.linkedin.com/in/pusapati-geetanjali/",
  github: "https://github.com/pusapatigeetanjali2000-lab",
  about: "B.Tech CSE graduate from GITAM University (8.0 CGPA)  with a strong foundation in Python, statistics, and machine learning. Specialized in building Advanced RAG systems, AI Agents with CrewAI, and predictive models.",
  
  // Categorized all skills from your resume
  skillCategories: [
    {
      title: "AI & Machine Learning",
      list: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "RAG", "LLMops", "MLops","Mlflow"] 
    },
    {
      title: "Agentic AI & Automation",
      list: ["CrewAI", "LangChain", "LangGraph", "AI Agents", "n8n", "Zapier"] 
    },
    {
      title: "Full-Stack & Data",
      list: ["FastAPI", "Flask", "PHP", "HTML5", "CSS3","React.js", "SQL", "MySQL", "Docker"] 
    }
  ]
};

export const projects = [
  {
    title: "AI Startup Idea Validator", 
    date: "May 2026",
    desc: "Built a multi-agent AI startup validation platform using CrewAI, LangGraph, and GPT-4o for automated research and competitor intelligence.",
    tech: ["CrewAI", "LangGraph", "GPT-4o", "Tavily"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=400"
  },
  {
    title: "Multi Disease Prediction", 
    date: "May 2026",
    desc: "Predictive screening system bridging medical datasets and user accessibility using pre-trained ML models for blood pressure, glucose, and heart rate.",
    tech: ["Python", "Streamlit", "Scikit-learn", "SQL"],
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd99625?q=80&w=400"
  },
  {
    title: "Advanced Enterprise RAG", 
    date: "April 2026",
    desc: "Knowledge intelligence tool using LlamaIndex and ChromaDB for multi-source PDF-based Q&A with a Streamlit interface.",
    tech: ["Python", "RAG", "ChromaDB", "LlamaIndex"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=400"
  },
  {
    title: "Job Application Agent", 
    date: "April 2026",
    desc: "AI agent system that evaluates resumes against job posts and creates corrected, tailored versions to match specific job requirements.",
    tech: ["CrewAI", "Agents", "Python"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400"
  },
  {
    title: "Loan Approval Prediction", 
    date: "March 2024",
    desc: "Machine learning system for predicting loan eligibility using Support Vector Machines, XGBoost, and Random Forests.",
    tech: ["XGBoost", "SVM", "Random Forests"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400"
  },
  {
    title: "5G Smart Diabetes Diagnosis", 
    date: "Dec 2023",
    desc: "AI application for Type 2 diabetes detection using healthcare big data systems and personalized recommendations for exercise and diet.",
    tech: ["Python", "Big Data", "Cloud"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400"
  },
  {
    title: "Student Grade Prediction", 
    date: "Aug 2023",
    desc: "ML model developed to predict student grades based on past exam data and performance metrics.",
    tech: ["Python", "SQL", "ML Models"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400"
  }
];
