import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eliana Barturen | Ingeniera de Sistemas Full Stack",
  description: "Portafolio profesional de Eliana Barturen - Ingeniera de Sistemas especializada en desarrollo Full Stack, Mobile y QA.",
  keywords: ["Eliana Barturen", "Ingeniera de Sistemas", "Full Stack Developer", "React", "Node.js", "Mobile", "QA"],
  authors: [{ name: "Eliana Barturen" }],
  openGraph: {
    title: "Eliana Barturen | Ingeniera de Sistemas Full Stack",
    description: "Portafolio profesional con estilo Neo-Brutalism",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}