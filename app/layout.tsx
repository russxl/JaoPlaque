import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

// Montserrat for headings - Bold
const montserratHeading = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat-heading",
  display: "swap",
});

// Montserrat for subheadings - Semibold
const montserratSubheading = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-montserrat-subheading",
  display: "swap",
});

// Montserrat for body text - Regular, Medium
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAO Plaques - Custom Recognition Awards",
  description: "Premium quality custom plaques and awards in acrylic, wood, and glass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserratHeading.variable} 
          ${montserratSubheading.variable} 
          ${montserrat.variable} 
          font-body antialiased
        `}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
