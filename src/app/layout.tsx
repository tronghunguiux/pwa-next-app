import type { Metadata } from "next";
import "./globals.css";
import '@scss/components/_poke-type.scss'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className="">
        {children}
      </body>
    </html>
  );
}
