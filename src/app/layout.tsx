import "./globals.css";
import DarkSwitch from '../components/DarkSwitch';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[url('/images/eva-bg2.jpg')]">
      <body className="dark:text-white flex flex-col items-end">
        <DarkSwitch/>
        {children}
      </body>
    </html>
  );
}
