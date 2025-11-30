import { useState, useEffect } from 'react';
import { Droplets, Moon, Smile, Apple, Heart, Activity, Sun, Brain, Wind, Flower2 } from 'lucide-react';

interface FactsProps {
  language: 'ru' | 'uz';
}

const Facts = ({ language }: FactsProps) => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const facts = {
    ru: [
      {
        icon: Droplets,
        title: 'Вода - источник жизни',
        description:
          'Употребление 8 стаканов воды в день улучшает метаболизм на 30% и помогает коже оставаться здоровой и сияющей.',
        color: 'from-blue-400 to-blue-600',
      },
      {
        icon: Moon,
        title: 'Сон - лучшее лекарство',
        description:
          '7-9 часов качественного сна укрепляют иммунитет, улучшают память и снижают риск сердечных заболеваний на 48%.',
        color: 'from-indigo-400 to-indigo-600',
      },
      {
        icon: Activity,
        title: 'Движение - это жизнь',
        description:
          '30 минут физической активности ежедневно снижают риск депрессии на 30% и увеличивают продолжительность жизни.',
        color: 'from-green-400 to-green-600',
      },
      {
        icon: Apple,
        title: 'Фрукты и овощи',
        description:
          '5 порций фруктов и овощей в день снижают риск инсульта на 26% и обеспечивают организм всеми необходимыми витаминами.',
        color: 'from-red-400 to-red-600',
      },
      {
        icon: Smile,
        title: 'Позитивное мышление',
        description:
          'Оптимисты живут на 15% дольше и имеют на 50% меньше риска сердечно-сосудистых заболеваний.',
        color: 'from-yellow-400 to-yellow-600',
      },
      {
        icon: Sun,
        title: 'Солнечный свет',
        description:
          '15 минут на солнце ежедневно обеспечивают дневную норму витамина D, укрепляя кости и иммунную систему.',
        color: 'from-orange-400 to-orange-600',
      },
      {
        icon: Brain,
        title: 'Медитация и расслабление',
        description:
          '10 минут медитации в день снижают уровень стресса на 40% и улучшают концентрацию внимания.',
        color: 'from-purple-400 to-purple-600',
      },
      {
        icon: Heart,
        title: 'Социальные связи',
        description:
          'Крепкие социальные связи увеличивают продолжительность жизни на 50% - это сопоставимо с отказом от курения.',
        color: 'from-pink-400 to-pink-600',
      },
      {
        icon: Wind,
        title: 'Свежий воздух',
        description:
          'Ежедневные прогулки на свежем воздухе улучшают настроение, укрепляют легкие и повышают уровень энергии.',
        color: 'from-teal-400 to-teal-600',
      },
      {
        icon: Flower2,
        title: 'Баланс в жизни',
        description:
          'Гармония между работой и отдыхом снижает риск выгорания на 68% и повышает общую удовлетворенность жизнью.',
        color: 'from-emerald-400 to-emerald-600',
      },
    ],
    uz: [
      {
        icon: Droplets,
        title: 'Suv - hayot manbai',
        description:
          "Kuniga 8 stakan suv ichish metabolizmni 30% yaxshilaydi va terini sog'lom va porloq saqlashga yordam beradi.",
        color: 'from-blue-400 to-blue-600',
      },
      {
        icon: Moon,
        title: 'Uyqu - eng yaxshi dori',
        description:
          "7-9 soat sifatli uyqu immunitetni mustahkamlaydi, xotirani yaxshilaydi va yurak kasalliklari xavfini 48% kamaytiradi.",
        color: 'from-indigo-400 to-indigo-600',
      },
      {
        icon: Activity,
        title: 'Harakat - bu hayot',
        description:
          "Har kuni 30 daqiqa jismoniy faollik depressiya xavfini 30% kamaytiradi va umr ko'rishni uzaytiradi.",
        color: 'from-green-400 to-green-600',
      },
      {
        icon: Apple,
        title: 'Meva va sabzavotlar',
        description:
          "Kuniga 5 porsiya meva va sabzavot insult xavfini 26% kamaytiradi va organizmga kerakli vitaminlarni ta'minlaydi.",
        color: 'from-red-400 to-red-600',
      },
      {
        icon: Smile,
        title: 'Ijobiy fikrlash',
        description:
          "Optimistlar 15% ko'proq yashaydi va yurak-qon tomir kasalliklari xavfi 50% kamroq.",
        color: 'from-yellow-400 to-yellow-600',
      },
      {
        icon: Sun,
        title: 'Quyosh nuri',
        description:
          "Har kuni 15 daqiqa quyoshda bo'lish D vitamini kunlik me'yorini ta'minlaydi, suyak va immunitet tizimini mustahkamlaydi.",
        color: 'from-orange-400 to-orange-600',
      },
      {
        icon: Brain,
        title: 'Meditatsiya va dam olish',
        description:
          "Kuniga 10 daqiqa meditatsiya stress darajasini 40% kamaytiradi va diqqat konsentratsiyasini yaxshilaydi.",
        color: 'from-purple-400 to-purple-600',
      },
      {
        icon: Heart,
        title: "Ijtimoiy aloqalar",
        description:
          "Mustahkam ijtimoiy aloqalar umr ko'rishni 50% uzaytiradi - bu chekishni tashlab yuborish bilan tenglashadi.",
        color: 'from-pink-400 to-pink-600',
      },
      {
        icon: Wind,
        title: 'Toza havo',
        description:
          "Har kuni toza havoda sayr qilish kayfiyatni yaxshilaydi, o'pkalarni mustahkamlaydi va energiya darajasini oshiradi.",
        color: 'from-teal-400 to-teal-600',
      },
      {
        icon: Flower2,
        title: 'Hayotdagi muvozanat',
        description:
          "Ish va dam olish o'rtasidagi uyg'unlik charchash xavfini 68% kamaytiradi va hayotdan umumiy qoniqishni oshiradi.",
        color: 'from-emerald-400 to-emerald-600',
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('[data-fact-index]');
      const newVisibleIndices: number[] = [];

      cards.forEach((card) => {
        const index = parseInt(card.getAttribute('data-fact-index') || '0');
        const rect = card.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight * 0.75) {
          newVisibleIndices.push(index);
        }
      });

      setVisibleIndices(newVisibleIndices);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="facts" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ru' ? '10 фактов о здоровом образе жизни' : "Sog'lom turmush tarzi haqida 10 fakt"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ru'
              ? 'Научно доказанные факты, которые изменят ваше представление о здоровье'
              : "Sizning sog'lik haqidagi tushunchalaringizni o'zgartiradigan ilmiy isbotlangan faktlar"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {facts[language].map((fact, index) => {
            const Icon = fact.icon;
            const isVisible = visibleIndices.includes(index);

            return (
              <div
                key={index}
                data-fact-index={index}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-stretch">
                    <div
                      className={`w-full sm:w-32 bg-gradient-to-br ${fact.color} flex items-center justify-center p-6 sm:p-8 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <Icon className="w-32 h-32 text-white absolute -right-8 -bottom-8 rotate-12" />
                      </div>
                      <div className="relative z-10 flex flex-col items-center">
                        <Icon className={`w-12 h-12 text-white mb-2 transition-transform duration-300 ${
                          hoveredIndex === index ? 'scale-125 rotate-6' : ''
                        }`} />
                        <span className="text-4xl font-bold text-white/90">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {fact.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {fact.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
            <p className="text-gray-700 text-lg font-medium">
              {language === 'ru'
                ? 'Каждый маленький шаг к здоровому образу жизни - это большой шаг к долгой и счастливой жизни!'
                : "Sog'lom turmush tarziga har bir kichik qadam - bu uzoq va baxtli hayotga katta qadam!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
