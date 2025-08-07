import { useEffect, useRef } from 'react';
import { Users, Lightbulb, Rocket, Target, Globe, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach((milestone) => observer.observe(milestone));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      icon: <Users className="w-8 h-8" />,
      year: "The Beginning",
      title: "Three Chemical Engineers with a Digital Dream",
      description: "Born from a shared passion for technology among three chemical engineering students, constantly learning and monetizing tech skills long before considering it a career.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      year: "COVID-19 Era",
      title: "Innovation in Isolation",
      description: "During lockdown, isolated at our homes, our passion intensified. We immersed ourselves in the ever-changing landscape of technology, knowing we had to build something together.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      year: "First Venture",
      title: "The Bold Robotics Leap",
      description: "Our first venture was a robotics company - a bold move for three young entrepreneurs. Our motto: 'Even if we fail, we'll fail as directors of our own company.'",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      year: "The Pivot",
      title: "Learning from Failure",
      description: "And fail we did. It was tough, but taught us invaluable lessons in resilience. We embraced our failures and made the bold decision to pivot into tech consultancy.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      year: "Bootstrap Growth",
      title: "Building Against All Odds",
      description: "With no family connections or external funding, we bootstrapped and learned through trial and error. We grew the hard way, but our determination was undeniable.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      year: "Today",
      title: "Global Impact & Expert Partnership",
      description: "An industry expert saw our potential and joined as a partner. Now we proudly serve clients across India, the US, the UK, the GCC, and Australia.",
      color: "from-primary to-accent"
    }
  ];

  const values = [
    {
      title: "Relentless Pursuit of Knowledge",
      description: "We never stop learning, adapting, and growing in the ever-evolving tech landscape."
    },
    {
      title: "Courage to Take Risks",
      description: "We embrace bold decisions and aren't afraid to fail fast and pivot when needed."
    },
    {
      title: "Unwavering Commitment to Growth",
      description: "Both personal and professional growth drives everything we do for our team and clients."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-gradient animate-fade-in-up">
            Our Journey
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From Engineering Students to Tech Innovators
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="milestone relative flex items-start gap-8 opacity-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} shadow-glow`}>
                    <div className="text-white">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <Card className="card-premium hover-lift">
                      <CardContent className="p-8">
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${milestone.color} text-white`}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gradient">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 sm:px-8 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values are the foundation of everything we do and guide us in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-premium hover-lift milestone opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            When you work with us, you're partnering with a team that knows what it takes to build from the ground up and succeed against all odds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-premium transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary/20 text-primary rounded-lg font-medium hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;