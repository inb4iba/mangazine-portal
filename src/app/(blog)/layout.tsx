import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { poppins } from "../fonts";
import { Modal } from "@/components/UI/Modal";

export const metadata: Metadata = {
  title: "Mangazine",
  description: "Portal contendo textos e podcasts de otaku para otaku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen main-bg relative`}>
        <Modal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
