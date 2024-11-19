"use client";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[url('/images/eva-bg2.jpg')]">
      <body className="dark:text-white flex flex-col items-end">
        {children}
      </body>
    </html>
  );
}
