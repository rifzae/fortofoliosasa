
import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from './constants';
import Icon from './components/Icon';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fungsi untuk scroll ke bagian tertentu dengan halus dan offset yang pas
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Jarak aman dari atas agar tidak tertutup nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'documentation'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Deteksi apakah section sedang berada di area pandang utama
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = PORTFOLIO_DATA.socials.find(s => s.platform === 'WhatsApp')?.url || '#';

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

      {/* Navigasi Modern (Sudah Diperbaiki agar Bisa Diklik) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-fit">
        <div className="glass px-3 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center gap-2 md:gap-4 shadow-2xl border border-white/20 backdrop-blur-xl">
          {['home', 'about', 'skills', 'experience', 'documentation'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(e, item)}
              className={`text-[10px] md:text-sm font-bold uppercase tracking-wider transition-all duration-300 py-2 px-3 md:px-4 rounded-full whitespace-nowrap ${
                activeSection === item 
                  ? 'text-blue-400 bg-blue-500/20 shadow-inner' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item === 'home' ? 'Beranda' : 
               item === 'about' ? 'Profil' : 
               item === 'skills' ? 'Keahlian' : 
               item === 'experience' ? 'Pengalaman' : 'Dokumentasi'}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center">
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
          <img 
            src={PORTFOLIO_DATA.profilePic} 
            alt={PORTFOLIO_DATA.name}
            className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10"
          />
        </div>
        
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight px-4 leading-tight">
          <span className="gradient-text">{PORTFOLIO_DATA.name}</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl font-medium px-4">
          {PORTFOLIO_DATA.title}
        </p>

        <div className="flex gap-4">
          {PORTFOLIO_DATA.socials.map((social) => (
            <a 
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/40 shadow-lg"
              title={social.platform}
            >
              <Icon name={social.icon} size={22} className="text-gray-300" />
            </a>
          ))}
        </div>
      </section>

      {/* Profil Section */}
      <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Profil Singkat
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg italic bg-white/5 p-6 rounded-2xl border border-white/5">
              "{PORTFOLIO_DATA.about}"
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
              Pendidikan
            </h2>
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="glass p-6 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all">
                <span className="text-xs text-blue-400 font-bold mb-1 block uppercase tracking-widest">{edu.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-3 font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keahlian Section */}
      <section id="skills" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Kemampuan Utama</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.skills.hard.map((skill) => (
              <div key={skill.name} className="glass p-6 rounded-2xl hover:border-blue-500/40 transition-all group">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-200 group-hover:text-blue-400 transition-colors">{skill.name}</span>
                  <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pengalaman Section */}
      <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">Pengalaman Kerja</h2>
        
        <div className="space-y-12 relative border-l-2 border-white/10 ml-4 md:ml-0">
          {PORTFOLIO_DATA.experience.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-[#030712] group-hover:scale-125 transition-transform"></div>
              <div className="glass p-6 rounded-3xl border border-white/5 hover:bg-white/[0.05] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.company}</h3>
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <div className="text-purple-400 text-sm font-bold mb-4 uppercase tracking-wider">{exp.position}</div>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dokumentasi Section */}
      {PORTFOLIO_DATA.documentation && PORTFOLIO_DATA.documentation.length > 0 && (
        <section id="documentation" className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Dokumentasi</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500">Klik pada foto untuk memperbesar tampilan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.documentation.map((img, i) => (
              <div 
                key={i} 
                className="relative group overflow-hidden rounded-3xl aspect-[4/3] glass cursor-pointer border-2 border-white/5 hover:border-blue-500/50 shadow-2xl"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Dokumentasi ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Maximize2" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
            <Icon name="X" size={40} />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border border-white/10 object-contain"
            alt="Preview Full"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 px-4 text-center border-t border-white/5 bg-black/20">
        <p className="text-gray-500 mb-6">Membangun masa depan ritel yang lebih baik.</p>
        <div className="flex justify-center gap-4 mb-10">
           <a href={whatsappUrl} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-all shadow-lg flex items-center gap-2">
             <Icon name="MessageCircle" /> WhatsApp
           </a>
        </div>
        <div className="text-gray-700 text-[10px] tracking-[0.3em] uppercase font-bold">
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}
        </div>
      </footer>

      {/* Tombol WhatsApp Melayang */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 group flex items-center gap-2"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap px-0 group-hover:px-2 font-bold">Chat Me</span>
        <Icon name="MessageCircle" size={24} />
      </a>
    </div>
  );
};

export default App;
