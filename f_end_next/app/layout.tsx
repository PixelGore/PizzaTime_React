import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/header/Header";
import ReduxProvider from "@/app/providers/ReduxProvider";
import { Footer } from "@/app/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
