import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danyar Academy - Master Computer Skills & AI Training",
  description: "Transform your career with expert-led courses in AI, Web Development, and Data Science. Join 50,000+ students learning cutting-edge technology skills at Danyar Academy.",
  keywords: "online courses, AI training, machine learning, web development, data science, programming courses, computer skills",
  openGraph: {
    title: "Danyar Academy - Master Computer Skills & AI Training",
    description: "Transform your career with expert-led courses in AI, Web Development, and Data Science.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
