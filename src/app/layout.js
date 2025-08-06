import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Financial Services & Real Estate Development | Piebald Capital",
  description:
    "Experts in finance, real estate, and digital transformation. Customized services across the U.S., Spain & Mexico",
  keywords: [
    "Financial Services",
    "Real Estate Development",
    "Investment",
    "Digital Transformation",
    "Piebald Capital",
    "Finance Experts",
    "Property Management",
    "US Spain Mexico Real Estate",
    "Capital Structuring", "Real Estate Consulting", "M&A USA", "Digital Systems Integration"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/logo.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
