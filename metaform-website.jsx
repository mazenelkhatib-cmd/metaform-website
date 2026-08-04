import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

export default function MetaformWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      name: 'Kinnerton St Houses',
      location: 'Belgravia, SW1X',
      description: 'Redevelopment of existing two dilapidated houses into luxury residences in prime central London',
      devCost: '£9,000,000',
      gdv: '£13,000,000',
      size: '650 sqm',
      image: '🏛️'
    },
    {
      name: 'Queensbury House',
      location: 'Hastings, UK',
      description: 'Conversion of an existing office building into 80 co-living units, with amenities.',
      devCost: '£5,000,000',
      gdv: '£8,000,000',
      size: '2,500 sqm',
      image: '🏗️'
    },
    {
      name: '24 Creechurch Lane',
      location: 'London City',
      description: 'Refurbishment of an existing office building into CAT A office spaces.',
      devCost: '£12,000,000',
      gdv: '£20,000,000',
      size: '2,200 sqm',
      image: '🏢'
    },
    {
      name: 'Chelsea Reach',
      location: 'Chelsea',
      description: 'Acquisition of a 2,000 sqm office building and secure a planning permission to develop it into 5,000 sqm',
      devCost: '£35,000,000',
      gdv: '£48,000,000',
      size: '5,000 sqm',
      image: '🌆'
    }
  ];

  const services = [
    {
      title: 'Investment',
      items: ['Sourcing opportunities', 'Investment appraisal', 'Private placement activities', 'Debt structuring']
    },
    {
      title: 'Development',
      items: ['Programming', 'Design management', 'Project management', 'Construction management', 'Financial management']
    },
    {
      title: 'Management',
      items: ['Sales management', 'Operation management', 'Controlling and reporting', 'Marketing and communication']
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center relative">
              <div className="absolute top-1 right-1.5 w-2 h-3 bg-white transform rotate-45"></div>
              <div className="absolute bottom-2 right-0.5 w-1 h-3 bg-white"></div>
            </div>
            <span className="font-semibold text-lg tracking-tight">METAFORM</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-gray-600 transition">About</a>
            <a href="#services" className="text-sm hover:text-gray-600 transition">Services</a>
            <a href="#projects" className="text-sm hover:text-gray-600 transition">Projects</a>
            <a href="#contact" className="text-sm hover:text-gray-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-100 p-6 flex flex-col gap-4">
            <a href="#about" className="text-sm hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="text-sm hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#projects" className="text-sm hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-sm hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-16 h-16 bg-black mx-auto mb-4 flex items-center justify-center relative">
              <div className="absolute top-2 right-3 w-2.5 h-3.5 bg-white transform rotate-45"></div>
              <div className="absolute bottom-2.5 right-1 w-1.5 h-4 bg-white"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
            Creating exceptional <span className="font-semibold">real estate</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            MetaForm is a UK-based real estate development company committed to creating unique, high-quality projects with an unwavering dedication to architectural design and construction excellence.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 hover:bg-gray-900 transition text-sm font-medium">
            Start a conversation <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 tracking-tight">About MetaForm</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  MetaForm is led by Mazen El Khatib, Founder & CEO, who brings over 25 years of experience in real estate development and architecture spanning the UK, Europe, the USA, and the Middle East.
                </p>
                <p>
                  Based in London for more than a decade, Mazen has built a strong track record in sourcing, structuring, and delivering high-value, design-led property developments that unlock potential and create lasting value.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold mb-4">Our Core Values</h3>
                  <p className="text-gray-600">
                    Our actions are guided by principles that foster trust and collaboration with clients, investors, team members, and stakeholders, ensuring long-term success and impactful relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-6xl">🏛️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 tracking-tight">360° Integrated Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition">
                <h3 className="text-xl font-semibold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-black mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 tracking-tight">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group border border-gray-200 hover:border-gray-400 transition rounded-lg overflow-hidden">
                <div className="bg-gray-100 aspect-video flex items-center justify-center text-6xl group-hover:bg-gray-200 transition">
                  {project.image}
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{project.location}</p>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Dev Cost</p>
                      <p className="font-semibold text-sm">{project.devCost}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">GDV</p>
                      <p className="font-semibold text-sm">{project.gdv}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Size</p>
                      <p className="font-semibold text-sm">{project.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">More projects coming soon</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 tracking-tight">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 hover:bg-gray-900 transition font-medium rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex gap-4">
                    <Mail size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <a href="mailto:info@metaform.co.uk" className="hover:text-gray-900 transition">
                      info@metaform.co.uk
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <a href="tel:+442030020218" className="hover:text-gray-900 transition">
                      +44 (0)203 002 0218
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>London, UK</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Hours</h3>
                <p className="text-gray-700 text-sm">
                  Monday – Friday<br/>
                  9:00 AM – 6:00 PM GMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black flex items-center justify-center relative text-white text-xs">
                <div className="absolute top-0.5 right-1 w-1.5 h-2 bg-white transform rotate-45"></div>
                <div className="absolute bottom-1.5 right-0.5 w-1 h-2 bg-white"></div>
              </div>
              <span className="font-semibold tracking-tight">METAFORM</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Metaform Developments. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
