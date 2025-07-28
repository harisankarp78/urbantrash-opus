import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectFintech from '@/assets/project-fintech.jpg';
import projectSaas from '@/assets/project-saas.jpg';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'ecommerce-redesign': {
      title: 'E-commerce Transformation',
      category: 'Web Design & Development',
      client: 'Fashion Forward Co.',
      year: '2024',
      duration: '12 weeks',
      team: '6 specialists',
      hero: projectEcommerce,
      description: 'A complete digital transformation for a leading fashion retailer, focusing on creating a premium shopping experience that converts visitors into loyal customers.',
      challenge: 'The client was experiencing declining sales and high bounce rates due to an outdated website that didn\'t reflect their premium brand positioning. The checkout process was complex, and the mobile experience was subpar.',
      solution: 'We redesigned the entire customer journey, implementing a clean, modern design with improved navigation, streamlined checkout, and mobile-first approach. The new design emphasizes product photography and creates an immersive shopping experience.',
      results: [
        { metric: 'Conversion Rate', value: '+300%', description: 'Increased from 1.2% to 4.8%' },
        { metric: 'Page Load Speed', value: '+85%', description: 'Reduced from 4.2s to 0.8s' },
        { metric: 'Mobile Sales', value: '+450%', description: 'Mobile now accounts for 70% of sales' },
        { metric: 'User Satisfaction', value: '4.9/5', description: 'Based on post-launch surveys' },
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Shopify Plus', 'Stripe'],
      testimonial: {
        quote: "Urban Trash completely transformed our online presence. The new website not only looks stunning but has dramatically improved our sales and customer satisfaction.",
        author: "Sarah Chen",
        role: "CEO, Fashion Forward Co."
      }
    },
    'fintech-app': {
      title: 'FinTech Mobile Experience',
      category: 'Mobile App Design',
      client: 'SecureBank Pro',
      year: '2024',
      duration: '16 weeks',
      team: '8 specialists',
      hero: projectFintech,
      description: 'Revolutionary banking app that redefined user experience in the financial sector, making complex financial operations simple and intuitive.',
      challenge: 'Traditional banking apps are often complex and intimidating. Our client wanted to create a mobile experience that would appeal to younger demographics while maintaining the trust and security expected in financial services.',
      solution: 'We designed an intuitive interface with clear information hierarchy, implemented biometric authentication, and created personalized dashboards. The app features smart categorization, spending insights, and seamless money transfers.',
      results: [
        { metric: 'App Store Rating', value: '4.9★', description: 'Highest-rated banking app' },
        { metric: 'User Onboarding', value: '+400%', description: 'Completion rate increased dramatically' },
        { metric: 'Daily Active Users', value: '+250%', description: 'Sustained engagement growth' },
        { metric: 'Support Tickets', value: '-70%', description: 'Significantly reduced user confusion' },
      ],
      technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      testimonial: {
        quote: "The app Urban Trash created for us has set a new standard in mobile banking. Our users love it, and we've seen unprecedented engagement levels.",
        author: "Michael Rodriguez",
        role: "CTO, SecureBank Pro"
      }
    },
    'saas-platform': {
      title: 'SaaS Platform Redesign',
      category: 'Product Design',
      client: 'DataFlow Systems',
      year: '2024',
      duration: '20 weeks',
      team: '10 specialists',
      hero: projectSaas,
      description: 'Enterprise dashboard redesign that simplified complex workflows and improved user productivity across large organizations.',
      challenge: 'The existing platform was powerful but overwhelming. Users required extensive training, and the learning curve was steep. The client was losing customers to more user-friendly competitors.',
      solution: 'We conducted extensive user research, redesigned the information architecture, and created modular dashboards. The new design features progressive disclosure, contextual help, and customizable workflows.',
      results: [
        { metric: 'Onboarding Time', value: '-85%', description: 'Reduced from 2 weeks to 2 days' },
        { metric: 'User Productivity', value: '+190%', description: 'Tasks completed 3x faster' },
        { metric: 'Customer Satisfaction', value: '+95%', description: 'NPS score increased from 6 to 9.2' },
        { metric: 'Support Costs', value: '-60%', description: 'Fewer support tickets needed' },
      ],
      technologies: ['Vue.js', 'TypeScript', 'D3.js', 'Python', 'Docker'],
      testimonial: {
        quote: "Urban Trash transformed our complex platform into something our users actually enjoy using. The impact on our business has been extraordinary.",
        author: "Lisa Thompson",
        role: "Head of Product, DataFlow Systems"
      }
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/work">
              <ArrowLeft size={20} className="mr-2" />
              Back to Work
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="animate-slide-up">
            <p className="text-primary font-medium mb-4">{project.category}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={16} className="text-primary" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <Button
          asChild
          variant="ghost"
          className="absolute top-28 left-6 sm:left-8 z-20 btn-ghost-premium"
        >
          <Link to="/work">
            <ArrowLeft size={20} className="mr-2" />
            Back to Work
          </Link>
        </Button>
      </section>

      {/* Project Details */}
      <section className="py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">
              <TrendingUp size={32} className="inline mr-3 text-primary" />
              Results That Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result, index) => (
                <div
                  key={result.metric}
                  className="card-premium p-8 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {result.value}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="card-premium p-12 text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
              "{project.testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-lg">{project.testimonial.author}</p>
              <p className="text-muted-foreground">{project.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 sm:px-8 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Own <span className="text-gradient">Transformation</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="btn-premium h-14 px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-ghost-premium h-14 px-8">
              <Link to="/work">
                View More Projects <ExternalLink size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;