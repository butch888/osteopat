export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Обо мне
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-6">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Добро пожаловать! Я специалист по остеопатии, мануальной терапии и массажу с многолетним опытом работы.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Образование и квалификация
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 pl-2">
              <li>Высшее медицинское образование</li>
              <li>Сертификат по остеопатии</li>
              <li>Сертификат по мануальной терапии</li>
              <li>Сертификат по массажу</li>
              <li>Регулярное повышение квалификации</li>
            </ul>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Опыт работы
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Более 10 лет практики в области остеопатии, мануальной терапии и массажа. 
              Помогаю пациентам справиться с различными проблемами опорно-двигательного аппарата, 
              используя комплексный подход и эффективные техники.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Подход к лечению
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              В своей работе я использую комплексный подход, сочетая остеопатию, мануальную терапию 
              и массаж. Такое сочетание методик дает наилучший результат, так как каждая техника 
              дополняет другую и усиливает общий эффект лечения.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Каждое лечение подбирается индивидуально с учетом особенностей пациента и его состояния. 
              Для закрепления результатов и ускорения восстановления я рекомендую индивидуально подобранный 
              комплекс упражнений, который помогает поддерживать достигнутый эффект и предотвращает 
              повторное возникновение проблем.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

