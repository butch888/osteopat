import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Остеопатия, мануальная терапия, массаж - Профессиональное лечение",
  description: "Комплексное лечение с использованием остеопатии, мануальной терапии и массажа. Индивидуальный подход и рекомендованный комплекс упражнений.",
  keywords: "остеопатия, мануальная терапия, массаж, лечение спины, реабилитация",
  openGraph: {
    title: "Остеопатия, мануальная терапия, массаж - Профессиональное лечение",
    description: "Комплексное лечение с использованием остеопатии, мануальной терапии и массажа.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="rduEApYJbSg4KXKhaQuAe331P6SdqkNnh3SZsUYTO3Q" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="pt-16">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
