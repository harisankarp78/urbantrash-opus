import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Globe, 
  Users, 
  Crown, 
  Zap, 
  Building, 
  Lightbulb,
  ArrowRight,
  Filter
} from 'lucide-react';
import FloatingOrbs from '@/components/FloatingOrbs';
import InteractiveShapes from '@/components/InteractiveShapes';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectFintech from '@/assets/project-fintech.jpg';
import projectSaas from '@/assets/project-saas.jpg';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Intuitive Experiences, Engineered for Impact.",
    description: "In a mobile-first world, your presence on smartphones is paramount. We craft bespoke mobile applications for iOS and Android, focusing on seamless user experiences, robust performance, and ironclad security. Whether you need a native powerhouse or a versatile cross-platform solution, our development process ensures your app is not just functional, but truly captivating, connecting you with your audience wherever they are."
  },
  {
    icon: Globe,
    title: "Web App Development",
    subtitle: "Robust Digital Foundations for Scalable Operations.",
    description: "Your web presence is more than just a site; it's your operational hub and customer interface. We specialize in developing high-performance web applications and secure SaaS platforms that are both visually compelling and technically resilient. Built with modern frameworks and scalable architectures, our web solutions are designed to evolve with your business, providing a reliable, efficient, and engaging digital backbone."
  },
  {
    icon: Users,
    title: "Tech Consultation",
    subtitle: "Clarity and Direction in a Complex Digital Landscape.",
    description: "Making informed technology decisions is critical for sustained growth. Our senior tech consultants provide objective, actionable insights that cut through the noise. From comprehensive technology audits and strategic roadmap development to architecture design and product-market fit analysis, we equip you with the knowledge and strategy to optimize your tech stack, mitigate risks, and align technology directly with your business goals."
  },
  {
    icon: Crown,
    title: "Virtual CTO Services",
    subtitle: "Executive Tech Leadership, On Your Terms.",
    description: "Gain the strategic advantage of a seasoned Chief Technology Officer without the full-time commitment. Our Virtual CTOs offer executive-level guidance, drawing on deep industry experience to oversee your technology strategy, manage development teams, optimize vendor relationships, and steer your product roadmap. It's proactive leadership and expert oversight, designed to propel your tech initiatives forward efficiently."
  },
  {
    icon: Zap,
    title: "Business Process Automation (BPA)",
    subtitle: "Intelligent Automation for Peak Operational Efficiency.",
    description: "Free your team from the mundane and unlock new levels of productivity. We design and implement tailored Business Process Automation solutions that streamline workflows, eliminate repetitive tasks, and integrate disparate systems. By automating your core processes, your human talent can focus on innovation, strategic thinking, and high-value activities, driving significant cost savings and accelerating operational speed."
  },
  {
    icon: Building,
    title: "Business Process Outsourcing (BPO)",
    subtitle: "Empower Your Core, Delegate the Rest.",
    description: "Focus on your unique strengths while we expertly manage your non-core business functions. Our reliable Business Process Outsourcing services cover essential operations like customer support, data management, technical helpdesks, and administrative tasks. We act as a seamless extension of your team, ensuring operational continuity, maintaining high service quality, and providing the flexibility to scale your business without internal overhead."
  },
  {
    icon: Lightbulb,
    title: "Product Development",
    subtitle: "From Vision to Market Leader – We Build What's Next.",
    description: "Whether you're a startup with a disruptive idea or an enterprise seeking to digitize a core offering, we are your end-to-end product development partner. Our collaborative approach spans the entire lifecycle: from initial discovery and rapid prototyping to MVP launch, iterative development, and sustained growth. We don't just translate ideas into code; we co-create market-leading products that deliver tangible business outcomes for our clients, and also passionately develop our own ventures."
  }
];

const WhatWeDo = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const projects = [
    // Web App
    {
      id: 'city-fresh',
      title: 'City Fresh',
      category: 'Web App',
      year: '2024',
      description: 'Fresh food delivery platform with real-time tracking and inventory management',
      image: projectFintech,
      results: '4.9★ user rating',
      tags: ['Food Delivery', 'Real-time', 'Web App']
    },
    {
      id: 'remnant',
      title: 'Remnant',
      category: 'Web App',
      year: '2024',
      description: 'Sustainable fashion marketplace connecting eco-conscious buyers and sellers',
      image: projectSaas,
      results: '95% customer satisfaction',
      tags: ['Marketplace', 'Sustainability', 'Fashion']
    },
    // Shopify
    {
      id: 'cyra-clothing',
      title: 'Cyra Clothing',
      category: 'Shopify',
      year: '2024',
      description: 'Fashion e-commerce store with custom Shopify theme and enhanced functionality',
      image: projectEcommerce,
      results: '350% sales increase',
      tags: ['Fashion', 'Shopify', 'E-commerce']
    },
    {
      id: 'maurika-collections',
      title: 'Maurika Collections',
      category: 'Shopify',
      year: '2024',
      description: 'Luxury accessories store with premium Shopify design and seamless checkout',
      image: projectSaas,
      results: '400% conversion rate',
      tags: ['Luxury', 'Accessories', 'Shopify']
    },
    // Mobile App
    {
      id: 'mobile-banking',
      title: 'Mobile Banking',
      category: 'Mobile App',
      year: '2024',
      description: 'Secure banking app with biometric authentication and real-time notifications',
      image: projectFintech,
      results: '99.9% uptime',
      tags: ['Banking', 'Security', 'Mobile']
    },
    // Branding
    {
      id: 'tech-startup',
      title: 'Tech Startup',
      category: 'Branding',
      year: '2024',
      description: 'Complete brand identity design for innovative tech startup',
      image: projectSaas,
      results: '300% brand recognition',
      tags: ['Identity', 'Tech', 'Startup']
    }
  ];

  const categories = ['All', 'Web App', 'Shopify', 'Mobile App', 'Branding'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingOrbs />
      <InteractiveShapes />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient animate-slide-up">
            What We Do
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Strategic Technology Services for Unstoppable Growth
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-5xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            At Botx, we believe technology should be an accelerator, not a hurdle. Our diverse suite of services is designed to integrate seamlessly with your business objectives, delivering custom-engineered solutions that drive efficiency, foster innovation, and secure your competitive edge. We don't just provide services; we forge partnerships that deliver lasting impact.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="card-premium p-8 md:p-12 group hover:shadow-glow transition-all duration-700 animate-slide-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-premium rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground group-hover:text-glow transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-primary mb-6 font-medium">
                        {service.subtitle}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient animate-slide-up">
              Our Work
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A showcase of our exceptional projects across various industries and technologies
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-primary" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? 'default' : 'outline'}
                  size="sm"
                  className={category === selectedCategory ? 'btn-premium' : 'btn-ghost-premium'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="card-premium overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-background/20 backdrop-blur-md border border-primary/20 rounded-full text-sm font-medium text-primary">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-background/20 backdrop-blur-md border border-border rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>

                    {/* View Project Button */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="btn-premium">
                        View Project <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted/50 border border-border rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">{project.results}</span>
                      <ArrowRight size={16} className="text-primary group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Work Button */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="btn-ghost-premium h-14 px-8">
              <Link to="/work">View All Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-premium p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how our strategic technology services can accelerate your growth and secure your competitive advantage.
            </p>
            <Button 
              className="btn-premium text-lg px-8 py-4 group"
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'b',
                  ctrlKey: true,
                  bubbles: true
                });
                window.dispatchEvent(event);
              }}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;