import { Khand, Open_Sans } from "next/font/google";
import "./globals.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "./WhatsApp";

const khand = Khand({
  variable: "--font-khand",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "A Mechanical Repairs",
  description: "A Mechanical Repairs is your trusted partner for complete automotive care in Australia. We provide fast, reliable, and affordable car repairs, servicing, and upgrades with a commitment to quality workmanship and customer satisfaction. From routine maintenance and logbook servicing to complex mechanical repairs, roadside assistance, tyres, brakes, and suspension upgrades – we ensure your vehicle stays safe, reliable, and road-ready at all times.",
  openGraph: {
    title: "A Mechanical Repairs",
    description: "A Mechanical Repairs is your trusted partner for complete automotive care in Australia. We provide fast, reliable, and affordable car repairs, servicing, and upgrades with a commitment to quality workmanship and customer satisfaction. From routine maintenance and logbook servicing to complex mechanical repairs, roadside assistance, tyres, brakes, and suspension upgrades – we ensure your vehicle stays safe, reliable, and road-ready at all times.",
    url: "https://amechanical.com.au",
    siteName: "A Mechanical Repairs",
    images: [
      {
        url: "https://amechanical.vercel.app/meta.png",
        width: 1200,
        height: 630,
        alt: "A Mechanical Repairs Workshop",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Mechanical Repairs",
    description: "A Mechanical Repairs is your trusted partner for complete automotive care in Australia. We provide fast, reliable, and affordable car repairs, servicing, and upgrades with a commitment to quality workmanship and customer satisfaction. From routine maintenance and logbook servicing to complex mechanical repairs, roadside assistance, tyres, brakes, and suspension upgrades – we ensure your vehicle stays safe, reliable, and road-ready at all times.",
    images: ["https://amechanical.vercel.app/meta.png"],
  },
};


export default function RootLayout({ children }) {
  const theme = {
    "--base-color": "lch(100 0 0)",
    "--accent-color": "lch(53.48 90.97 31.39)",
    "--text-color": "lch(0 0 0)"
  }
  return (
    <html lang="en">
      <body className={`${khand.variable} ${openSans.variable}`} style={theme}>
        <Header />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
