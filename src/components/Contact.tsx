import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "svkatagi18@gmail.com",
      link: "mailto:svkatagi18@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Santa Clara, CA",
      link: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Svkatagi",
      link: "https://github.com/Svkatagi"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shreyaskatagi",
      link: "https://linkedin.com/in/shreyaskatagi"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build the next generation of intelligent systems together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="prose-portfolio text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in AI/ML. Whether you're looking to build intelligent 
                systems, implement AI solutions, or just want to chat about the latest 
                in machine learning, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-smooth font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground">Fortune 500 Companies</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">AI Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={6}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full shadow-glow"
                >
                  {isSubmitting ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;