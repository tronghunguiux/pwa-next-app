import type { Metadata } from "next";
import "./globals.css";
import "../styles/template.scss";

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
    <html lang="en" data-bs-theme="dark">
      <body className="">
        {children}
      </body>
    </html>
  );
}
