import { Heart, Leaf, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'ru' | 'uz';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    ru: {
      title: 'Здоровый образ жизни',
      subtitle: 'Ваш путь к здоровью и благополучию начинается здесь',
      description: 'Откройте для себя секреты здорового образа жизни вместе с командой Солнышко',
    },
    uz: {
      title: "Sog'lom turmush tarzi",
      subtitle: "Sog'liq va farovonlikka yo'lingiz shu yerdan boshlanadi",
      description: "Solnishko jamoasi bilan sog'lom turmush tarzining sirlarini kashf eting",
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Leaf className="w-16 h-16 text-white/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Heart className="w-20 h-20 text-white/20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float">
          <Sparkles className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float-delayed">
          <Leaf className="w-14 h-14 text-white/25 transform rotate-45" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30 animate-bounce-slow">
              <span className="text-white text-sm font-medium tracking-wider">
                {language === 'ru' ? 'ЗДОРОВЬЕ - ЭТО БОГАТСТВО' : "SOG'LIQ - BOYLIK"}
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {content[language].title}
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light">
            {content[language].subtitle}
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            {content[language].description}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Heart className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">
                {language === 'ru' ? 'Здоровье' : "Sog'liq"}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Leaf className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">
                {language === 'ru' ? 'Природа' : 'Tabiat'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">
                {language === 'ru' ? 'Энергия' : 'Energiya'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
