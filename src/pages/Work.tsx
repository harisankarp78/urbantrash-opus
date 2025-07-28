import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectFintech from '@/assets/project-fintech.jpg';
import projectSaas from '@/assets/project-saas.jpg';

const Work = () => {
  const projects = [
    {
      id: 'ecommerce-redesign',
      title: 'E-commerce Transformation',
      category: 'Web Design',
      year: '2024',
      description: 'Complete brand and digital transformation for a leading fashion retailer',
      image: projectEcommerce,
      results: '300% increase in conversions',
      tags: ['E-commerce', 'Responsive Design', 'UX/UI']
    },
    {
      id: 'fintech-app',
      title: 'FinTech Mobile Experience',
      category: 'Mobile Design',
      year: '2024',
      description: 'Revolutionary banking app that redefined user experience',
      image: projectFintech,
      results: '4.9★ App Store rating',
      tags: ['Mobile App', 'FinTech', 'React Native']
    },
    {
      id: 'saas-platform',
      title: 'SaaS Platform Redesign',
      category: 'Product Design',
      year: '2024',
      description: 'Enterprise dashboard that simplified complex workflows',
      image: projectSaas,
      results: '85% reduction in onboarding time',
      tags: ['SaaS', 'Dashboard', 'Data Visualization']
    }
  ];

  const categories = ['All', 'Web Design', 'Mobile Design', 'Product Design', 'Branding'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects that showcase our commitment to excellence and innovation in digital design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 sm:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-primary" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={category === 'All' ? 'btn-premium' : 'btn-ghost-premium'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block"
                style={{ animationDelay: `${index * 0.2}s` }}
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
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted/50 border border-border rounded-full text-xs font-medium text-muted-foreground"
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

          {/* Load More */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="btn-ghost-premium h-14 px-8">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let's create your next project together and achieve extraordinary results.
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

export default Work;