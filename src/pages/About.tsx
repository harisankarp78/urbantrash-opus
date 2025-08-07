import { useEffect, useRef } from 'react';
import { ArrowRight, Users, Zap, Building, Rocket, Globe, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const storyChapters = [
    {
      id: 1,
      title: "Chapter One",
      heading: "Three Dreamers",
      story: "We were just three chemical engineering students with an unusual obsession - technology. While our classmates focused on traditional engineering, we were busy coding, learning, and even making money from our digital skills.",
      icon: <Users className="w-12 h-12" />,
      bgPattern: "from-blue-600/20 to-cyan-600/20",
      iconBg: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Chapter Two", 
      heading: "Lockdown Spark",
      story: "COVID-19 hit. Isolation became our catalyst. Stuck at home, our passion for innovation exploded. We knew we had to build something together - something that mattered.",
      icon: <Zap className="w-12 h-12" />,
      bgPattern: "from-purple-600/20 to-pink-600/20",
      iconBg: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Chapter Three",
      heading: "The Bold Gamble",
      story: "Our first venture: a robotics company. Ambitious? Absolutely. Risky? Definitely. Our motto was simple - 'Even if we fail, we'll fail as directors of our own company.'",
      icon: <Building className="w-12 h-12" />,
      bgPattern: "from-orange-600/20 to-red-600/20", 
      iconBg: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Chapter Four",
      heading: "Beautiful Failure",
      story: "And fail we did. Spectacularly. But failure taught us more than any textbook ever could. We embraced it, learned from it, and made our boldest decision yet - pivot to tech consultancy.",
      icon: <Rocket className="w-12 h-12" />,
      bgPattern: "from-emerald-600/20 to-green-600/20",
      iconBg: "from-emerald-500 to-green-500"
    },
    {
      id: 5,
      title: "Chapter Five",
      heading: "Bootstrap Dreams",
      story: "No rich parents. No investors. Just pure determination. We bootstrapped our way through trial and error, growing the hard way, but growing nonetheless.",
      icon: <Globe className="w-12 h-12" />,
      bgPattern: "from-indigo-600/20 to-blue-600/20",
      iconBg: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Today",
      heading: "Global Impact", 
      story: "An industry expert saw our potential and joined us as a partner. Now we serve clients across India, the US, the UK, the GCC, and Australia. The journey continues.",
      icon: <Star className="w-12 h-12" />,
      bgPattern: "from-primary/20 to-accent/20",
      iconBg: "from-primary to-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-fade-in-up">
            Our Origin Story
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient">From Zero</span>
            <br />
            <span className="text-foreground">to Global</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            The untold story of three engineering students who dared to dream bigger
          </p>
        </div>
      </section>

      {/* Story Chapters */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {storyChapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`reveal-on-scroll opacity-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-center gap-12`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Story Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block px-4 py-2 bg-card/50 border border-primary/20 rounded-full text-primary text-sm font-medium">
                      {chapter.title}
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gradient">
                      {chapter.heading}
                    </h2>
                  </div>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    {chapter.story}
                  </p>
                  {index < storyChapters.length - 1 && (
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium">Continue reading</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-lg">
                  <Card className={`card-premium relative overflow-hidden h-80 bg-gradient-to-br ${chapter.bgPattern}`}>
                    <CardContent className="p-0 h-full flex items-center justify-center">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${chapter.iconBg} flex items-center justify-center shadow-glow animate-float`}>
                        <div className="text-white">
                          {chapter.icon}
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-8 right-8 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
                      <div className="absolute bottom-12 left-12 w-2 h-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-1/3 left-8 w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      
                      {/* Chapter Number */}
                      <div className="absolute bottom-6 right-6 text-6xl font-bold text-primary/10">
                        {chapter.id}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-r from-card/30 to-card/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll opacity-0">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-gradient">What Drives Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values aren't just words on a wall - they're the DNA of everything we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Never Stop Learning",
                description: "In a world that changes overnight, curiosity isn't optional - it's survival.",
                icon: "🧠"
              },
              {
                title: "Embrace Bold Risks",
                description: "We don't just take calculated risks - we calculate how to make risks worth taking.",
                icon: "🚀"
              },
              {
                title: "Grow or Die",
                description: "Growth isn't just a goal - it's our obsession, for us and every client we serve.",
                icon: "📈"
              }
            ].map((value, index) => (
              <Card
                key={index}
                className="card-premium hover-lift reveal-on-scroll opacity-0 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
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

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll opacity-0">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="text-gradient">Your Story</span>
            <br />
            <span className="text-foreground">Starts Here</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to write the next chapter? Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-primary text-white rounded-lg font-medium overflow-hidden hover:shadow-premium transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/work"
              className="px-8 py-4 border border-primary/20 text-primary rounded-lg font-medium hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;