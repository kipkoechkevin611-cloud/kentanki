import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Chatbot from "../components/Chatbot";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rototank Water Tanks Kenya | Premium Water Storage Solutions",
  description: "Genuine Rototank water tanks for homes, farms, and industries. Free countrywide delivery, 25-year warranty, KEBS certified. Prices from KSh 5,500 for 1000L tanks.",
  keywords: "Rototank Kenya, water tanks Kenya, plastic tanks, water storage tanks, septic tanks Kenya, underground tanks, tank suppliers Kenya, free delivery water tanks",
  authors: [{ name: "Kentank Kenya" }],
  creator: "Kentank Kenya",
  publisher: "Kentank Kenya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kentank.co.ke'),
  openGraph: {
    title: "Rototank Water Tanks Kenya | Premium Water Storage Solutions",
    description: "Genuine Rototank water tanks with free countrywide delivery, 25-year warranty, and KEBS certification. Order now!",
    url: 'https://kentank.co.ke',
    siteName: 'Kentank Kenya',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rototank Water Tanks Kenya | Premium Water Storage Solutions",
    description: "Genuine Rototank water tanks with free countrywide delivery, 25-year warranty, and KEBS certification.",
    creator: '@kentankkenya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kentank Kenya - Rototank Water Tanks',
    description: 'Genuine Rototank water tanks for homes, farms, and industries. Free countrywide delivery, 25-year warranty, KEBS certified.',
    url: 'https://kentank.co.ke',
    telephone: '+254736010873',
    email: 'info@kentank.co.ke',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-1.2921',
      longitude: '36.8219',
    },
    openingHours: 'Mo-Sa 08:00-18:00',
    priceRange: 'KSh 5,500 - KSh 132,500',
    makesOffer: [
      {
        '@type': 'Offer',
        name: '1000L Vertical Tank',
        price: '5500',
        priceCurrency: 'KES',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: '5000L Vertical Tank',
        price: '27500',
        priceCurrency: 'KES',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: '10000L Vertical Tank',
        price: '51000',
        priceCurrency: 'KES',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <CartProvider>
          <div id="main-content">
            {children}
          </div>
          <FloatingWhatsApp />
          <Chatbot />
        </CartProvider>
      </body>
    </html>
  );
}
