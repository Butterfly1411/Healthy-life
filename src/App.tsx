import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'ru' | 'uz'>('ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    ru: {
      home: 'Главная',
      about: 'О нас',
      facts: 'Факты',
    },
    uz: {
      home: 'Bosh sahifa',
      about: 'Biz haqimizda',
      facts: 'Faktlar',
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'uz' : 'ru');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">С</span>
              </div>
              <span
                className={`text-xl font-bold transition-colors ${
                  scrolled ? 'text-green-700' : 'text-white'
                }`}
              >
                Солнышко
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {translations[language].home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {translations[language].about}
              </button>
              <button
                onClick={() => scrollToSection('facts')}
                className={`font-medium transition-colors hover:text-green-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {translations[language].facts}
              </button>
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all ${
                  scrolled
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
              >
                {translations[language].home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
              >
                {translations[language].about}
              </button>
              <button
                onClick={() => scrollToSection('facts')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
              >
                {translations[language].facts}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <Hero language={language} />
      <About language={language} />
      <Facts language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
