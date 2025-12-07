import Image from 'next/image';

export default function Contacts() {
  const phone = "+79061800916";
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
  const telegramUrl = `https://t.me/+${phone.replace(/[^0-9]/g, "")}`;
  
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Контакты
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
            Свяжитесь со мной
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 text-center">
            Для записи на консультацию или лечение, пожалуйста, свяжитесь со мной любым удобным способом
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
              <div className="shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Телефон</h3>
                <a href={`tel:${phone}`} className="text-sm sm:text-base text-gray-700 hover:text-blue-600">
                  +7 906 180-09-16
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
              <div className="shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-sm sm:text-base text-gray-700">wladimirks@yandex.ru</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
            Быстрая связь через мессенджеры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">WhatsApp</h3>
              <div className="flex justify-center mb-4">
                <Image
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(whatsappUrl)}`}
                  alt="QR код для WhatsApp"
                  width={192}
                  height={192}
                  className="border-2 border-gray-200 rounded-lg p-2 bg-white w-40 h-40 sm:w-48 sm:h-48"
                />
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Открыть WhatsApp
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Telegram</h3>
              <div className="flex justify-center mb-4">
                <Image
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(telegramUrl)}`}
                  alt="QR код для Telegram"
                  width={192}
                  height={192}
                  className="border-2 border-gray-200 rounded-lg p-2 bg-white w-40 h-40 sm:w-48 sm:h-48"
                />
              </div>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Открыть Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
            Режим работы
          </h2>
          <div className="text-center space-y-2 text-gray-700">
            <p className="text-base sm:text-lg">Понедельник - Пятница: 9:00 - 20:00</p>
            <p className="text-base sm:text-lg">Суббота: 10:00 - 18:00</p>
            <p className="text-base sm:text-lg">Воскресенье: Выходной</p>
          </div>
        </div>
      </div>
    </div>
  );
}

