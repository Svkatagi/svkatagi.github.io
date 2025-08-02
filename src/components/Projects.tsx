import { useState } from 'react';
import { ExternalLink, Github, Bot, MessageSquare, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Bot,
      title: "Zoom Whisper AI Agent",
      description: "Enterprise-grade virtual meeting assistant with real-time transcription and AI coaching",
      longDescription: "Developed an advanced AI meeting agent for Zoom, leveraging Whisper API for real-time audio transcription and Gemini API for sophisticated sentiment analysis and LLM-powered sales coaching. Orchestrated complex workflows using LangChain and LangGraph, enabling dynamic, real-time feedback during client interactions with multi-threading support for concurrent sessions.",
      technologies: [
        "Zoom SDK", "Whisper API", "Gemini API", "LangChain", "LangGraph", 
        "Python", "FastAPI", "Redis", "WebRTC", "AsyncIO", "PostgreSQL", 
        "Docker", "GCP Cloud Run", "Prometheus", "WebSocket"
      ],
      highlights: [
        "Real-time audio transcription with 95% accuracy using optimized Whisper models",
        "Multi-agent sentiment analysis and coaching insights with sub-200ms latency",
        "Automated meeting summaries with action item extraction and priority scoring",
        "Scalable architecture supporting 50+ concurrent meetings with load balancing",
        "Advanced speaker diarization and conversation flow analysis",
        "Integration with CRM systems (Salesforce, HubSpot) for automated lead scoring"
      ],
      metrics: {
        accuracy: "95%",
        latency: "<200ms",
        concurrent: "50+",
        uptime: "99.9%"
      }
    },
    {
      icon: MessageSquare,
      title: "Slack AI Sales Assistant",
      description: "Multi-agent RAG-powered Slack bot with enterprise orchestration capabilities",
      longDescription: "Engineered a real-time Slack AI assistant utilizing Gemini API, LangGraph, and Retrieval-Augmented Generation (RAG) for intelligent meeting summarization and context-aware sales prompt generation. Implemented robust multi-user orchestration and state management with Redis and deployed on GCP, ensuring scalable and responsive team collaboration with advanced memory management.",
      technologies: [
        "Slack API", "Gemini API", "LangGraph", "RAG", "Pinecone", "Redis", 
        "GCP", "Vector Embeddings", "FAISS", "Elasticsearch", "Kubernetes", 
        "Terraform", "Kafka", "Grafana", "OpenTelemetry"
      ],
      highlights: [
        "Multi-user conversation orchestration with persistent context across sessions",
        "Context-aware responses using RAG with 10M+ document vectors",
        "Real-time integration with CRM systems and sales analytics platforms",
        "Advanced sentiment and intent analysis with NLP pipeline optimization",
        "Dynamic prompt engineering with A/B testing for response quality",
        "Enterprise-grade security with OAuth 2.0 and role-based access control"
      ],
      metrics: {
        vectors: "10M+",
        response: "<1s",
        users: "500+",
        accuracy: "92%"
      }
    },
    {
      icon: Briefcase,
      title: "AI Job Application Agent",
      description: "Autonomous recruitment automation with intelligent matching and compliance",
      longDescription: "Created an experimental autonomous AI agent for job applications, integrating Gemini API for dynamic response generation and Selenium for automated web interactions. Utilized vector memory for advanced resume matching and personalized answer generation, streamlining the 'Easy Apply' process for efficient, large-scale job seeking with ethical filtering and compliance monitoring.",
      technologies: [
        "Gemini API", "Selenium", "Vector Databases", "Python", "Scikit-learn", 
        "spaCy", "BeautifulSoup", "Pandas", "ChromeDriver", "MongoDB", 
        "Apache Airflow", "MLflow", "Jupyter", "OpenCV", "NLTK"
      ],
      highlights: [
        "Automated resume-job matching with 85% relevance using advanced NLP",
        "Intelligent form filling with OCR and computer vision for complex layouts",
        "Job market analysis and trending skills detection with data mining",
        "Ethical application filtering with compliance and anti-spam mechanisms",
        "Dynamic skill gap analysis and career path recommendations",
        "Multi-platform support (LinkedIn, Indeed, Glassdoor) with unified API"
      ],
      metrics: {
        relevance: "85%",
        platforms: "10+",
        applications: "1000+",
        success: "78%"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI applications that solve real-world business challenges
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-6">
                  <p className="prose-portfolio leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Performance Metrics */}
                {'metrics' in project && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-lg font-bold text-primary">{value}</p>
                          <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/5 border border-primary/20 rounded-full text-primary hover:bg-primary/10 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Highlights */}
                <div className="mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-primary hover:text-primary-glow p-0 h-auto font-medium"
                  >
                    {expandedProject === index ? 'Hide' : 'Show'} Key Highlights
                  </Button>

                  {expandedProject === index && (
                    <div className="mt-4 animate-fade-in">
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 prose-portfolio">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;