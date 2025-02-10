import React, { useRef } from 'react';
import { Monitor, Smartphone, Globe, Palette, MessageSquare, Layout, Code, Database, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import StarField from './components/StarField';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import ProjectCard from './components/ProjectCard';
import CustomCursor from './components/CustomCursor';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = projectsRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      projectsRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: t('services.web.title'),
      description: t('services.web.description')
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description')
    },
    {
      icon: <Monitor className="w-8 h-8 text-orange-500" />,
      title: t('services.desktop.title'),
      description: t('services.desktop.description')
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: t('services.design.title'),
      description: t('services.design.description')
    },
    {
      icon: <Layout className="w-8 h-8 text-orange-500" />,
      title: t('services.print.title'),
      description: t('services.print.description')
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: t('services.whatsapp.title'),
      description: t('services.whatsapp.description')
    }
  ];

  const expertiseCards = [
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: t('expertise.frontend.title'),
      description: t('expertise.frontend.description'),
      technologies: t('expertise.frontend.technologies', { returnObjects: true }) as string[]
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: t('expertise.backend.title'),
      description: t('expertise.backend.description'),
      technologies: t('expertise.backend.technologies', { returnObjects: true }) as string[]
    },
    {
      icon: <Cpu className="w-12 h-12 text-orange-500" />,
      title: t('expertise.mobile.title'),
      description: t('expertise.mobile.description'),
      technologies: t('expertise.mobile.technologies', { returnObjects: true }) as string[]
    }
  ];

  const projects = t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tech: string;
    image: string;
    demoUrl: string;
  }>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert(t('contact.success'));
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <StarField />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">DigiTech</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">{t('nav.home')}</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition-colors">{t('nav.services')}</button>
              <button onClick={() => scrollToSection('expertise')} className="hover:text-orange-500 transition-colors">{t('nav.expertise')}</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-orange-500 transition-colors">{t('nav.testimonials')}</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">{t('nav.contact')}</button>
              <LanguageSelector />
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors"
            >
              {t('nav.contactUs')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-orange-500">{t('hero.title')}</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                {t('hero.subtitle')}
              </p>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg transition-colors"
              >
                {t('hero.cta')}
              </button>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="/robot.png"
                alt="AI Robot"
                className="w-full max-w-lg mx-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{t('expertise.title')}</h2>
          <p className="text-xl text-center text-gray-300 mb-16">{t('expertise.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-300 mb-6">{card.description}</p>
                <div className="flex flex-wrap gap-2">
                  {card.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-center text-gray-300 mb-16">{t('projects.subtitle')}</p>
          
          <div className="relative">
            <button 
              onClick={() => scrollProjects('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div 
              ref={projectsRef}
              className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <div key={index} className="flex-none w-[400px] snap-center">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollProjects('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-center text-gray-300 mb-16">{t('testimonials.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('testimonials.items', { returnObjects: true }).map((testimonial: any, index: number) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{t('about.title')}</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-300">{t('about.experience')}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-300">{t('about.projects')}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">300+</div>
              <div className="text-gray-300">{t('about.clients')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-center text-gray-300 mb-12">{t('contact.subtitle')}</p>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Globe className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold">DigiTech</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
            <div className="text-gray-400 mt-4 md:mt-0">
              © 2024 DigiTech. {t('footer.rights')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;