import { Users, Target, Award, Heart } from 'lucide-react';

interface AboutProps {
  language: 'ru' | 'uz';
}

const About = ({ language }: AboutProps) => {
  const content = {
    ru: {
      title: 'О команде Солнышко',
      subtitle: 'Мы - команда энтузиастов здорового образа жизни',
      description:
        'Команда "Солнышко" - это группа преданных своему делу специалистов, которые верят в силу здорового образа жизни. Наша миссия - вдохновлять и поддерживать людей на их пути к здоровью и благополучию. Мы собираем и делимся проверенной информацией о питании, физической активности, психическом здоровье и общем благополучии.',
      mission: 'Наша миссия',
      missionText:
        'Помогать людям достигать оптимального здоровья через образование, вдохновение и поддержку',
      values: 'Наши ценности',
      valuesText:
        'Честность, научный подход, забота о людях и стремление к постоянному совершенствованию',
      team: 'Команда',
      teamText: 'Профессионалы с опытом в области здоровья, питания и фитнеса',
      impact: 'Наше влияние',
      impactText: 'Помогаем тысячам людей улучшить качество жизни каждый день',
    },
    uz: {
      title: 'Quyosh jamoasi haqida',
      subtitle: "Biz sog'lom turmush tarzi ishqibozlari jamoasimiz",
      description:
        "Quyosh jamoasi - bu sog'lom turmush tarzining kuchiga ishonadigan maxsus mutaxassislar guruhi. Bizning missiyamiz - odamlarni sog'liq va farovonlik yo'lida ilhomlantirish va qo'llab-quvvatlash. Biz ovqatlanish, jismoniy faollik, ruhiy salomatlik va umumiy farovonlik haqida tekshirilgan ma'lumotlarni to'playmiz va baham ko'ramiz.",
      mission: 'Bizning missiyamiz',
      missionText:
        "Ta'lim, ilhom va qo'llab-quvvatlash orqali odamlarga optimal sog'liqqa erishishda yordam berish",
      values: 'Bizning qadriyatlarimiz',
      valuesText:
        "Halollik, ilmiy yondashuv, odamlarga g'amxo'rlik va doimiy takomillashuvga intilish",
      team: 'Jamoa',
      teamText: "Sog'liq, ovqatlanish va fitnes sohasida tajribaga ega professionallar",
      impact: 'Bizning ta\'sirimiz',
      impactText: "Har kuni minglab odamlarga hayot sifatini yaxshilashda yordam beramiz",
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-green-600 font-medium mb-6">{content[language].subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-3xl opacity-50 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Солнышко</h3>
                  
                </div>
                <p className="text-white/95 leading-relaxed">{content[language].description}</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{content[language].mission}</h3>
              <p className="text-gray-600 text-sm">{content[language].missionText}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{content[language].values}</h3>
              <p className="text-gray-600 text-sm">{content[language].valuesText}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{content[language].team}</h3>
              <p className="text-gray-600 text-sm">{content[language].teamText}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{content[language].impact}</h3>
              <p className="text-gray-600 text-sm">{content[language].impactText}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 sm:p-12 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">С</span>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {language === 'ru'
                ? 'Присоединяйтесь к нашему движению'
                : 'Bizning harakatimizga qo\'shiling'}
            </h3>
            <p className="text-gray-700 text-lg">
              {language === 'ru'
                ? 'Вместе мы создаем здоровое будущее для всех'
                : "Biz birgalikda hamma uchun sog'lom kelajak yaratamiz"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
