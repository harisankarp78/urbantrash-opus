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
  ArrowRight
} from 'lucide-react';
import FloatingOrbs from '@/components/FloatingOrbs';
import InteractiveShapes from '@/components/InteractiveShapes';

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