'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center px-2 sm:px-4 text-lg sm:text-xl font-bold text-blue-600 hover:text-blue-800"
            >
              Остеопат
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-2 lg:space-x-4">
            <Link
              href="/"
              className="flex items-center px-3 lg:px-4 text-sm lg:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Главная
            </Link>
            <Link
              href="/about"
              className="flex items-center px-3 lg:px-4 text-sm lg:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Обо мне
            </Link>
            <Link
              href="/services"
              className="flex items-center px-3 lg:px-4 text-sm lg:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Услуги
            </Link>
            {/* <Link
              href="/videos"
              className="flex items-center px-3 lg:px-4 text-sm lg:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Видео
            </Link> */}
            <Link
              href="/contacts"
              className="flex items-center px-3 lg:px-4 text-sm lg:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded"
            >
              Контакты
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              >
                Главная
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              >
                Обо мне
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              >
                Услуги
              </Link>
              {/* <Link
                href="/videos"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              >
                Видео
              </Link> */}
              <Link
                href="/contacts"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

