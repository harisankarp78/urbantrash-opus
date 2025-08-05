import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Our Services', path: '/what-we-do' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter (X)', icon: Twitter, url: '#' },
    { name: 'Youtube', icon: Youtube, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Cancellation and Refund Policy', path: '/refund' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-t border-primary/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Link
                to="/"
                className="inline-block text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
              >
                Urban Trash
              </Link>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Tech consultancy delivering comprehensive mobile apps, web apps, and business automation solutions for modern enterprises.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Follow Us</h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 transform group"
                    >
                      <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-muted-foreground group">
                  <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                  <span className="text-sm leading-relaxed">
                    123 Tech Street, Suite#456, Innovation Towers,<br />
                    Tech City 12345, Country
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <Phone size={18} className="flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                  <a 
                    href="tel:+1234567890" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +1 234 567 890
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <Mail size={18} className="flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                  <a 
                    href="mailto:info@urbantrash.tech" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    info@urbantrash.tech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 bg-background/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Urban Trash © 2024 All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {legalLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center gap-6">
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-muted-foreground/50">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;