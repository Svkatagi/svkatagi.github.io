import { Code, Cloud, Database, Brain, Zap, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML Frameworks",
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost",
        "Hugging Face", "OpenAI API", "Gemini API", "Anthropic Claude",
        "LangChain", "LangGraph", "MLflow", "Weights & Biases", "ClearML"
      ]
    },
    {
      icon: Code,
      title: "Programming & Development",
      skills: [
        "Python", "Java", "C++", "TypeScript", "Go", "Rust",
        "FastAPI", "Django", "Flask", "Spring Boot", "REST APIs", 
        "GraphQL", "gRPC", "WebSocket", "Microservices"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform",
        "Apache Airflow", "Databricks", "Apache Spark", "Kafka", 
        "Redis", "Elasticsearch", "Prometheus", "Grafana"
      ]
    },
    {
      icon: Database,
      title: "Data & Storage",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "ClickHouse",
        "Redis", "Pinecone", "Weaviate", "ChromaDB", "FAISS",
        "Snowflake", "BigQuery", "Delta Lake", "Apache Iceberg"
      ]
    },
    {
      icon: Zap,
      title: "AI Specializations",
      skills: [
        "RAG", "Vector Embeddings", "Semantic Search", "LLM Fine-tuning",
        "Prompt Engineering", "Agent Orchestration", "Computer Vision",
        "NLP", "Speech Recognition", "Real-Time Streaming", "MLOps"
      ]
    },
    {
      icon: Settings,
      title: "Analytics & Visualization",
      skills: [
        "Power BI", "Tableau", "Looker", "Streamlit", "Plotly",
        "D3.js", "A/B Testing", "Statistical Modeling", 
        "Time Series Analysis", "Causal Inference"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;