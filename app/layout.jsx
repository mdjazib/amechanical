import { Khand, Open_Sans } from "next/font/google";
import "./globals.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  description: "Fast & relieable car repairing and upgradings in australia.",
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
        <Footer />
      </body>
    </html>
  );
}
