import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kentank - Premium Water Storage Solutions in Kenya",
  description: "Reliable water storage tanks for homes, farms, and industries. Quality plastic tanks, septic tanks, and underground tanks. KEBS certified with nationwide delivery.",
  keywords: "water tanks Kenya, plastic tanks, water storage tanks, septic tanks Kenya, underground tanks, tank suppliers Kenya",
  openGraph: {
    title: "Kentank - Premium Water Storage Solutions in Kenya",
    description: "Reliable water storage tanks for homes, farms, and industries. Quality plastic tanks, septic tanks, and underground tanks.",
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
      <body className={inter.className}>
        <CartProvider>
          {children}
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
