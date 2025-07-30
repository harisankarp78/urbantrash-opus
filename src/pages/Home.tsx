import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorldMap from '@/components/WorldMap';
import InteractiveShapes from '@/components/InteractiveShapes';
import FloatingOrbs from '@/components/FloatingOrbs';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectFintech from '@/assets/project-fintech.jpg';
import projectSaas from '@/assets/project-saas.jpg';

const Home = () => {
  const projects = [
    {
      id: 'north-republic',
      title: 'North Republic',
      category: 'Web App',
      description: 'Modern web application with seamless user experience',
      image: projectEcommerce,
      results: '300% increase in conversions'
    },
    {
      id: 'city-fresh',
      title: 'City Fresh',
      category: 'Web App',
      description: 'Fresh food delivery platform with real-time tracking',
      image: projectFintech,
      results: '4.9★ App Store rating'
    },
    {
      id: 'asker-sweets-ksa',
      title: 'Asker Sweets KSA',
      category: 'Web App',
      description: 'Premium sweets ordering platform for Saudi market',
      image: projectSaas,
      results: '85% reduction in onboarding time'
    },
    {
      id: 'cyra-clothing',
      title: 'Cyra Clothing',
      category: 'Shopify',
      description: 'Fashion e-commerce store with custom Shopify design',
      image: projectEcommerce,
      results: '250% increase in sales'
    },
    {
      id: 'fit-treat-uae',
      title: 'Fit Treat UAE',
      category: 'Mobile App',
      description: 'Fitness and nutrition tracking mobile application',
      image: projectFintech,
      results: '50K+ downloads'
    },
    {
      id: 'ajoba-technical',
      title: 'Ajoba Technical Services UAE',
      category: 'Branding',
      description: 'Complete brand identity for technical services company',
      image: projectSaas,
      results: '400% brand recognition increase'
    }
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users'
    },
    {
      icon: Zap,
      title: 'Web App Development',
      description: 'Modern web applications and platforms built for scale'
    },
    {
      icon: Target,
      title: 'Tech Consultation & Virtual CTO',
      description: 'Strategic tech guidance and business process automation'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-20">
          <WorldMap />
        </div>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-subtle/80" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
      We Build
              <span className="block text-gradient text-glow">Tech Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Tech consultancy delivering comprehensive mobile apps, web apps, and business automation solutions for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="btn-premium h-14 px-8 text-lg">
                <Link to="/work">
                  View Our Work <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="btn-ghost-premium h-14 px-8 text-lg"
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6 sm:px-8 overflow-hidden">
        <FloatingOrbs count={4} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in mobile apps, web apps, tech consultation, virtual CTO services, and business process automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-premium p-8 text-center group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon size={32} className="text-primary animate-pulse-glow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 sm:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of our latest projects that have transformed businesses and delighted users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-premium overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">{project.results}</span>
                      <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="btn-ghost-premium h-14 px-8">
              <Link to="/work">
                View All Projects <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 sm:px-8 overflow-hidden">
        <InteractiveShapes />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Create Something <span className="text-gradient">Extraordinary</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let's discuss your project and bring your vision to life with exceptional design and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="btn-premium h-14 px-8 text-lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono mr-2">Ctrl</kbd>
              +
              <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono ml-2">B</kbd>
              for quick contact
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;