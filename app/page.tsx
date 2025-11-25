import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Добро пожаловать
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Профессиональное лечение с использованием остеопатии, мануальной терапии и массажа. 
            Сочетание этих методик дает наилучший результат в сочетании с рекомендованным комплексом упражнений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Комплексный подход к лечению
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              В своей работе я сочетаю остеопатию, мануальную терапию и массаж. 
              Такое комплексное воздействие дает наилучший результат в сочетании 
              с индивидуально подобранным комплексом упражнений.
            </p>
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
            >
              Узнать больше
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              О специалисте
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Опытный специалист с многолетней практикой в области остеопатии, 
              мануальной терапии и массажа. Индивидуальный подход к каждому пациенту.
            </p>
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
            >
              Обо мне
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 sm:p-8 text-center">
          <Link href="/contacts">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Записаться на прием
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Свяжитесь со мной для записи на консультацию
            </p>
          </Link>
          
          <div className="space-y-2 text-gray-700 text-sm sm:text-base">
            <p>Телефон: <a href="tel:+79061800916" className="text-blue-600 hover:underline">+7 906 180-09-16</a></p>
            <p>Email: example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
