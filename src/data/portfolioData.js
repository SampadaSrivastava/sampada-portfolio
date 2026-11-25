// ALL content lives here. Edit this file only.
export const config = {
  name: "Sampada Srivastava",
  email: "", // <-- put your email here, e.g. "you@example.com". Email links stay hidden until set.
  github: "https://github.com/SampadaSrivastava",
  linkedin: "https://linkedin.com/in/sampadasrivastava06/",
  cv: "/assets/Sampada-Srivastava-CV.pdf",
  photo: "/assets/profile.jpg",
  location: "Lucknow, Uttar Pradesh, India",
};

export const nav = [
  ["home", "Home"], ["about", "About"], ["experience", "Experience"], ["bring", "What I Bring"],
  ["skills", "Skills"], ["projects", "Projects"], ["beyond", "Beyond Academics"], ["education", "Education"], ["contact", "Contact"],
];


export const hero = {
  eyebrow: "Hello, I'm Sampada.",
  title: "Turning data into insights. Ideas into intelligent solutions.",
  text: "I’m a Computer Science undergraduate passionate about building intelligent solutions with AI, Machine Learning and Generative AI. From transforming raw data into meaningful insights to developing AI-powered applications, I enjoy turning ideas into practical solutions that make a difference.",
  labels: ["AI/ML Enthusiast", "Generative AI", "Data Analytics", "Business Analysis"],
  status: "Open to internship & entry-level opportunities",
};


export const about = {
  heading: "More than just code.",
  paras: [
    "I'm a Computer Science undergraduate at Jaypee University of Engineering and Technology. My interests sit where Artificial Intelligence, Machine Learning, Data Analytics and Business Analysis meet.",
    "I like seeing how data reveals patterns, how machine learning can solve a problem, and how technology helps people decide better.",
    "Through academic projects, internships and independent development I have worked on machine learning workflows, natural language processing, document intelligence, Generative AI and analytical dashboards.",
    "Technology matters most when it solves a real problem. So I try to understand the problem first, explore the data, evaluate the results and explain the outcome clearly.",
    "Away from the keyboard, I enjoy creative work, coordinating events, working in teams and learning new things.",
  ],
  facts: [["Name", "Sampada Srivastava"], ["Degree", "B.Tech CSE"], ["University", "JUET"], ["Graduation", "2027"], ["Location", "Lucknow, India"], ["Interests", "AI/ML, Analytics, Business Analysis"]],
};

export const bring = [
  { icon: "Cpu", tag: "Technical thinking", title: "Building practical AI solutions", text: "I enjoy understanding technical problems and developing practical solutions with Python, Machine Learning, NLP and Generative AI.",
    items: ["Python-based problem solving", "Machine learning fundamentals", "Data preprocessing and feature engineering", "NLP and text classification", "LLM and RAG application development", "Experimentation and model evaluation"] },
  { icon: "BarChart3", tag: "Data-driven thinking", title: "Finding meaning in data", text: "I enjoy exploring datasets, spotting patterns, analysing trends and presenting findings that support better decisions.",
    items: ["Data cleaning and preprocessing", "Exploratory Data Analysis", "SQL-based data querying", "Data visualization", "Power BI dashboards", "Interpreting data patterns"] },
  { icon: "Compass", tag: "Business mindset (developing)", title: "Connecting technology with business needs", text: "I'm interested in the problem behind a requirement, what information matters, and how to turn findings into actions. These are interests and growing skills, not professional analyst experience.",
    items: ["Requirement understanding", "Problem identification", "Structured thinking", "Research and analysis", "Documentation and presentation", "Linking technical findings to practical objectives"] },
  { icon: "Users", tag: "Collaboration and ownership", title: "Creative thinking meets teamwork", text: "Extracurricular work and collaborative technical projects have helped me build coordination, communication, adaptability and responsibility.",
    items: ["Team collaboration", "Event coordination", "Creative thinking", "Communication", "Adaptability", "Taking responsibility for assigned tasks"] },
];

export const experience = [
  { org: "BBAU", role: "Summer Research Internship", when: "May 2026 – July 2026",
    points: ["Worked with 20,000+ text records", "Cleaned and preprocessed text data", "Used TF-IDF for feature extraction", "Trained Logistic Regression models for text classification", "Evaluated model performance and generalization", "Built a Flask interface for model predictions"] },
  { org: "Engineers World", role: "Machine Learning Intern", when: "June 2025 – July 2025",
    points: ["Worked with Python and Scikit-learn", "Explored data preprocessing and feature engineering", "Performed exploratory data analysis", "Experimented with machine learning algorithms", "Evaluated models with performance metrics"] },
  { org: "Jaypee University of Engineering and Technology", role: "Art & Event Club Coordinator", when: "",
    points: ["Planned and coordinated events", "Collaborated with the team and communicated with participants", "Handled creative execution", "Managed responsibilities during college activities"] },
];

export const skills = [
  ["Programming", ["Python", "Java", "SQL", "C++", "JavaScript"]],
  ["AI and Machine Learning", ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering", "Exploratory Data Analysis", "TF-IDF", "NLP", "Model Evaluation"]],
  ["Generative AI", ["Large Language Models", "Prompt Engineering", "Retrieval-Augmented Generation", "LangChain", "Hugging Face Transformers", "Gemini API", "Sentence Transformers", "ChromaDB"]],
  ["Data Analytics", ["SQL", "Power BI", "Data Cleaning", "Data Visualization", "DAX", "Dashboard Development", "Data Interpretation", "Exploratory Data Analysis"]],
  ["Development and Tools", ["Flask", "Streamlit", "REST APIs", "MySQL", "SQLite", "Git", "GitHub", "VS Code"]],
];

// repo/demo: leave "" until you have a real URL. Buttons only appear when a URL is set.
export const projects = [
  { id: "documind", title: "DocuMind AI", sub: "RAG document question-answering system", cats: ["genai"], kind: "Generative AI / RAG",
    problem: "Finding answers inside long PDFs is slow. This app lets you ask questions in plain language.",
    solution: "A document intelligence app: upload PDFs, ask questions, get answers grounded in the source text.",
    tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "Gemini", "Sentence Transformers", "PyMuPDF"],
    impl: ["PDF ingestion and text extraction", "Text chunking", "MiniLM embeddings", "ChromaDB vector storage", "Top-k similarity search", "Gemini-powered response generation", "Source-grounded answers with citations"],
     },
  { id: "omnigen", title: "OmniGen AI", sub: "Multimodal content studio", cats: ["genai"], kind: "Generative AI",
    problem: "Summaries, images and audio usually need separate tools.",
    solution: "One multimodal app combining text summarization, text-to-image generation and text-to-speech.",
    tech: ["Python", "Streamlit", "Hugging Face Transformers", "Diffusers", "SpeechT5", "PyMuPDF"],
    impl: ["Document summarization", "PDF and TXT processing", "Image generation", "Text-to-speech", "Modular architecture", "Automated tests"], repo: "", demo: "" },
  { id: "resume", title: "Smart Resume Keyword Matcher", sub: "Resume vs job description analysis", cats: ["ai"], kind: "AI / ML / NLP",
    problem: "It is hard to see how well a resume lines up with a job description.",
    solution: "An app that compares resume content with job descriptions to surface relevant skills and keyword matches.",
    tech: ["Python", "Flask", "NLP", "TF-IDF", "Scikit-learn", "Logistic Regression"],
    impl: ["Resume text extraction", "Text preprocessing", "Keyword comparison", "TF-IDF-based text processing", "Matching analysis"], repo: "", demo: "" },
  { id: "er", title: "Hospital Emergency Room Dashboard", sub: "Interactive operations dashboard", cats: ["data"], kind: "Data Analytics / BI",
    problem: "Emergency room operations produce a lot of data that needs a clear view.",
    solution: "An interactive Power BI dashboard exploring emergency room operations and key performance indicators.",
    tech: ["Power BI", "SQL", "DAX", "Data Modeling"],
    impl: ["Data transformation", "SQL analysis", "Date dimension", "Data relationships", "DAX measures", "KPI visualization", "Interactive reports"], repo: "", demo: "" },
  { id: "inventory", title: "Inventory Optimization Using Machine Learning", sub: "Data-driven stock management", cats: ["ai", "data"], kind: "ML / Data Analytics",
    problem: "Stock management benefits from understanding inventory patterns.",
    solution: "A machine learning project exploring inventory patterns to support better stock decisions.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"], impl: [], repo: "", demo: "" },
  { id: "frost", title: "Frost Prediction", sub: "Collaborative predictive modelling", cats: ["ai"], kind: "Machine Learning",
    problem: "Predicting frost calls for models that handle weather-driven data.",
    solution: "A team project exploring frost prediction with machine learning and optimization techniques.",
    tech: ["Python", "XGBoost", "CNN", "Particle Swarm Optimization"], impl: [], repo: "", demo: "" },
];
export const filters = [["all", "All"], ["ai", "AI / Machine Learning"], ["genai", "Generative AI"], ["data", "Data Analytics"], ["other", "Other"]];

export const flow = {
  heading: "From data to decisions.",
  intro: "My interest in analytics and business analysis comes down to one habit: start with the question, end with something someone can act on.",
  steps: [["Understand the problem", "What decision is this meant to support?"], ["Collect and explore data", "SQL and Python to find what is there."], ["Analyze and identify patterns", "Ask focused questions of the data."], ["Interpret findings", "Separate signal from noise."], ["Communicate insights", "Dashboards and clear writing."]],
  interests: ["Understanding business problems", "Exploring datasets", "Asking meaningful analytical questions", "Using SQL to retrieve information", "Using Python for processing and analysis", "Building Power BI dashboards", "Presenting information clearly", "Connecting analysis to decisions"],
  featured: "er",
};

export const beyond = {
  heading: "Beyond the screen.", sub: "Creativity, collaboration and experiences that shape who I am.",
  items: [
    ["Art & Event Club Coordinator", "Event planning, team coordination, communication and creative execution, with responsibility for what I take on.", "lg"],
    ["Dance", "An expression of creativity, confidence and energy.", "sm"],
    ["Reading", "Curiosity and a habit of continuous learning.", "sm"],
    ["Writing", "A way to put thoughts in order and share ideas.", "sm"],
    ["Painting and art", "My creative side and an appreciation for visual expression.", "md"],
    ["Team collaboration", "Working on academic and technical projects with others has shown me different perspectives and taught me to share responsibility.", "md"],
  ],
};
export const education = {
  school: "Jaypee University of Engineering and Technology",
  degree: "Bachelor of Technology, Computer Science and Engineering",
  years: "2023 – 2027",
  text: "My coursework and projects keep pulling me toward AI, Machine Learning, Data Analytics and the software that puts them to work.",
};
// link: "" until you have a verified certificate URL
export const certs = [
  { name: "Python Programming", link: "" }, { name: "Machine Learning with Scikit-learn", link: "" },
  { name: "SQL for Data Science", link: "" }, { name: "Power BI Fundamentals", link: "" },
];

export const approach = [
  ["Curiosity", "I enjoy exploring unfamiliar concepts and understanding how things work."],
  ["Analytical thinking", "I break complex problems into manageable parts and look for patterns."],
  ["Creativity", "I look at problems from different perspectives and try alternative solutions."],
  ["Continuous learning", "Technical growth comes from experimentation, practice and consistency."],
  ["Collaboration", "I value teamwork, communication and learning from others."],
  ["Ownership", "I take responsibility, learn from mistakes and improve my work."],
];

export const contact = {
  heading: "Let's create something meaningful.",
  text: "Whether it's an opportunity in AI/ML, Data Analytics, Business Analysis or an interesting technical collaboration, I'd love to connect.",
};
