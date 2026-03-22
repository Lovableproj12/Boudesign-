import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Menu, 
  X,
  ChevronRight,
  Code2,
  Palette,
  Layout,
  Globe,
  Instagram,
  Twitter
} from "lucide-react";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxe Travel",
    category: "Web Design / Development",
    image: "https://picsum.photos/seed/travel/1200/800",
    description: "A premium travel booking platform with a focus on high-end experiences and seamless user interface.",
    link: "#"
  },
  {
    id: 2,
    title: "Crypto Dash",
    category: "Fintech / UI Design",
    image: "https://picsum.photos/seed/crypto/1200/800",
    description: "Real-time cryptocurrency monitoring dashboard with advanced charting and portfolio management features.",
    link: "#"
  },
  {
    id: 3,
    title: "Eco Store",
    category: "E-commerce",
    image: "https://picsum.photos/seed/eco/1200/800",
    description: "Sustainable product marketplace designed with an organic aesthetic and optimized for mobile shopping.",
    link: "#"
  },
  {
    id: 4,
    title: "Studio X",
    category: "Branding / Landing Page",
    image: "https://picsum.photos/seed/studio/1200/800",
    description: "A bold, minimalist landing page for a creative agency, featuring immersive animations and typography.",
    link: "#"
  }
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          BOUDESIGN<span className="text-emerald-500">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Work", "About", "Services", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-500 hover:text-white transition-all"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden"
        >
          {["Work", "About", "Services", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-white/70 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 border border-emerald-500/30 rounded-full bg-emerald-500/5">
            Creative Web Designer & Developer
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.9] mb-8">
            BOU<span className="text-emerald-500 italic">DESIGN</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed mb-10">
            Crafting digital experiences that blend aesthetic precision with technical excellence. Based in the future of web design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">View Projects</span>
              <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={16} />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all">
              About Me
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Featured Projects</h2>
          </div>
          <p className="max-w-md text-white/40 font-light leading-relaxed">
            A curated selection of my latest work, ranging from complex web applications to minimalist landing pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/40 text-sm font-light max-w-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 border border-white/10 text-white/60 font-bold uppercase tracking-widest text-xs rounded-full hover:border-white hover:text-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="text-emerald-500" size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning interfaces that prioritize user experience and brand identity."
    },
    {
      icon: <Code2 className="text-emerald-500" size={32} />,
      title: "Web Development",
      description: "Building high-performance, responsive websites using the latest technologies and best practices."
    },
    {
      icon: <Palette className="text-emerald-500" size={32} />,
      title: "Brand Identity",
      description: "Developing cohesive brand systems that communicate your values and resonate with your audience."
    },
    {
      icon: <Globe className="text-emerald-500" size={32} />,
      title: "Digital Strategy",
      description: "Helping businesses navigate the digital landscape with data-driven strategies and creative solutions."
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/designer/800/800" 
                alt="Boubacar Diallo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500 rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
              Passionate about creating digital excellence.
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
              I'm Boubacar Diallo, a creative designer and developer with over 5 years of experience in crafting high-impact digital solutions. My approach combines technical expertise with a deep understanding of design principles.
            </p>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              I believe that every pixel matters and that great design should not only look beautiful but also solve real problems and drive results.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">5+</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest">Projects Completed</p>
              </div>
            </div>

            <button className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs group">
              <span>Read My Full Story</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ChevronRight size={16} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-10">
              Let's build something amazing together.
            </h2>
            <div className="space-y-6">
              <a href="mailto:hello@boudesign.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-xl font-medium">hello@boudesign.com</span>
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <span className="text-xl font-medium">Paris, France / Remote</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-emerald-600 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <Mail size={40} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Message Sent!</h3>
                <p className="text-black/60 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-emerald-600 font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-black/10 focus:border-emerald-500 outline-none transition-colors text-black font-medium" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-black/10 focus:border-emerald-500 outline-none transition-colors text-black font-medium" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b border-black/10 focus:border-emerald-500 outline-none transition-colors text-black font-medium" 
                    placeholder="Project Inquiry" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-0 py-3 border-b border-black/10 focus:border-emerald-500 outline-none transition-colors text-black font-medium resize-none" 
                    placeholder="Tell me about your project..." 
                  />
                </div>
                <button type="submit" className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-zinc-800 transition-all">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/boudesign", label: "LinkedIn" },
    { icon: <Github size={18} />, url: "https://github.com/boudesign", label: "GitHub" },
    { icon: <Instagram size={18} />, url: "https://instagram.com/boudesign", label: "Instagram" },
    { icon: <Twitter size={18} />, url: "https://twitter.com/boudesign", label: "Twitter" }
  ];

  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-xl font-bold tracking-tighter text-white">
            BOUDESIGN<span className="text-emerald-500">.</span>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-white/30 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} BOUDESIGN. All rights reserved. Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-emerald-500 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
