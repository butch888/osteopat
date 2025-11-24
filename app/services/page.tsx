export default function Services() {
  const services = [
    {
      title: "Остеопатия",
      description: "Мягкие остеопатические техники для восстановления баланса в организме, работы с костно-мышечной системой и внутренними органами."
    },
    {
      title: "Мануальная терапия",
      description: "Целенаправленное воздействие на суставы, позвоночник и мышцы для устранения функциональных блоков и восстановления подвижности."
    },
    {
      title: "Массаж",
      description: "Лечебный и расслабляющий массаж для снятия мышечного напряжения, улучшения кровообращения и лимфотока."
    },
    {
      title: "Лечение болей в спине",
      description: "Комплексное лечение остеохондроза, грыж, протрузий и других проблем позвоночника с использованием всех методик."
    },
    {
      title: "Лечение головных болей",
      description: "Комплексный подход к лечению мигреней и головных болей различного происхождения через работу с краниосакральной системой."
    },
    {
      title: "Реабилитация после травм",
      description: "Восстановление после спортивных травм, переломов и операций с помощью сочетания остеопатии, мануальной терапии и массажа."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Услуги
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 bg-blue-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
            Информация о сеансах
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-700 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Длительность сеанса:</strong> 1 час
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Содержание сеанса:</strong> В каждом сеансе сочетаются остеопатия, мануальная терапия и массаж для комплексного подхода к решению ваших проблем. Такое сочетание методик дает наилучший результат.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Комплекс упражнений:</strong> Для закрепления результатов и ускорения восстановления я рекомендую индивидуально подобранный комплекс упражнений, который помогает поддерживать достигнутый эффект.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Стоимость приема:</strong> 10 000 ₽
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Курс лечения:</strong> Для достижения эффекта необходимо 1-5 сеансов в зависимости от индивидуальных особенностей и сложности случая.
            </p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 bg-white rounded-lg p-6 sm:p-8 text-center border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Записаться на прием
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            Для записи на консультацию или лечение, пожалуйста, свяжитесь со мной
          </p>
          <div className="space-y-2 text-gray-700 text-sm sm:text-base">
            <p>Телефон: <a href="tel:+79061800916" className="text-blue-600 hover:underline">+7 906 180-09-16</a></p>
            <p>Email: example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

