import { Heart, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  language: 'ru' | 'uz';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ru: {
      tagline: 'Ваш путь к здоровой жизни начинается здесь',
      contact: 'Контакты',
      email: 'sabohattoshpolatova72@gmail.com',
      phone: '+998 94 979 84 94',
      address: 'Алмалык, Узбекистан',
      quickLinks: 'Быстрые ссылки',
      home: 'Главная',
      about: 'О нас',
      facts: 'Факты',
      rights: 'Все права защищены',
      madeWith: 'Создано с',
      team: 'командой Солнышко',
    },
    uz: {
      tagline: "Sog'lom hayotga yo'lingiz shu yerdan boshlanadi",
      contact: 'Aloqa',
      email: 'sabohattoshpolatova72@gmail.com',
      phone: '+998 90 123 45 67',
      address: "Olmaliq, O'zbekiston",
      quickLinks: 'Tezkor havolalar',
      home: 'Bosh sahifa',
      about: 'Biz haqimizda',
      facts: 'Faktlar',
      rights: 'Barcha huquqlar himoyalangan',
      madeWith: 'Qilingan',
      team: 'Quyosh jamoasi bilan',
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-green-600 text-xl font-bold">С</span>
              </div>
              <span className="text-2xl font-bold">Солнышко</span>
            </div>
            <p className="text-green-100 leading-relaxed">{content[language].tagline}</p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer transform hover:scale-110">
                <Heart className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{content[language].quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-green-100 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  <span>{content[language].home}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-green-100 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  <span>{content[language].about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('facts')}
                  className="text-green-100 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  <span>{content[language].facts}</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{content[language].contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-green-100">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{content[language].email}</span>
              </li>
              <li className="flex items-start space-x-3 text-green-100">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{content[language].phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-green-100">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{content[language].address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-400/30 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-green-100 text-sm text-center sm:text-left">
              © 2024 Солнышко. {content[language].rights}.
            </p>
            <p className="text-green-100 text-sm flex items-center space-x-1">
              <span>{content[language].madeWith}</span>
              <Heart className="w-4 h-4 text-red-300 animate-pulse" fill="currentColor" />
              <span>{content[language].team}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-300 to-green-400"></div>
    </footer>
  );
};

export default Footer;
