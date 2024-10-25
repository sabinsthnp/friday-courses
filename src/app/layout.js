// fonts
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: 'normal'
});

// style
import "./style.css";

// components
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export const metadata = {
  title: "blogs site",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main className='bg-background  dark:bg-gray-900 min-h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}