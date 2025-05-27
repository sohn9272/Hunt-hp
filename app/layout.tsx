import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { notoSansJP } from './fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <head>
        <meta
          property="og:image"
          content="https://hunt.co.jp/ogp.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans text-[14px] tracking-[0.1em] text-[#282828] antialiased md:text-[16px]">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
