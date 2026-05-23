import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentiSalud Bávaro | Odontología Integral en Bávaro, Punta Cana",
  description:
    "Clinica dental en Bávaro, Punta Cana. Odontología integral: limpieza, blanqueamiento, ortodoncia, implantes. Agenda tu cita por WhatsApp.",
  openGraph: {
    title: "DentiSalud Bávaro | Odontología Integral",
    description:
      "Tu clinica dental de confianza en Bávaro. Agenda tu cita hoy.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-dark-900">
        {children}
      </body>
    </html>
  );
}
