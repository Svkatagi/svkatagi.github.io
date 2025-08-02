import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Deloitte",
      period: "2021-2023",
      location: "Global Technology Team",
      role: "Data Engineer & ML Specialist",
      description: "Automated backend systems for utility analytics, implemented ML workflows with REST APIs, and deployed forecasting models using Prophet. Optimized billing pipelines and mentored junior analysts.",
      achievements: [
        "Built automated ML pipelines reducing manual work by 60%",
        "Deployed Prophet forecasting models improving accuracy by 25%",
        "Mentored 5+ junior analysts in ML best practices",
        "Optimized billing systems serving 2M+ customers"
      ]
    },
    {
      company: "Lenovo",
      period: "2022",
      location: "Global Innovation Lab",
      role: "Machine Learning Engineer",
      description: "Created fraud detection systems using Python, AWS Lambda, and XGBoost; built dashboards with Power BI; collaborated with global Agile teams.",
      achievements: [
        "Developed fraud detection reducing false positives by 40%",
        "Built real-time dashboards with 99.9% uptime",
        "Collaborated across 4 global time zones",
        "Implemented XGBoost models with 92% accuracy"
      ]
    },
    {
      company: "Coca-Cola",
      period: "2021",
      location: "Supply Chain Analytics",
      role: "Data Scientist",
      description: "Developed logistics ML pipelines, reduced transport costs by 15% using A/B testing and statistical modeling.",
      achievements: [
        "Reduced transportation costs by 15% ($2M+ savings)",
        "Implemented A/B testing framework for route optimization",
        "Built statistical models for demand forecasting",
        "Streamlined supply chain analytics processes"
      ]
    }
  ];

  const education = [
    {
      degree: "MS in Computer Science",
      institution: "Santa Clara University",
      period: "2023-2025",
      location: "Santa Clara, CA",
      focus: "Specialization in Machine Learning and AI Systems"
    },
    {
      degree: "BE in Computer Science",
      institution: "KLE Technological University",
      period: "2017-2021",
      location: "Karnataka, India",
      focus: "First Class with Distinction"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container-custom">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building enterprise-scale AI solutions across Fortune 500 companies
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="bg-gradient-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth shrink-0">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{exp.company}</h3>
                        <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="prose-portfolio mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 prose-portfolio">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Education</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="bg-gradient-card p-6 rounded-lg shadow-elegant hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-semibold mb-3">{edu.institution}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
                <p className="prose-portfolio">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;