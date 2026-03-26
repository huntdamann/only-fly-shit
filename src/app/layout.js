import "./globals.css";
import { Inter, Carattere, Pacifico, Orbitron, Audiowide } from 'next/font/google';
import ClientLayout from "./ClientLayout";
import Footer from "@/slices/Footer";
import Header from '@/slices/Header'

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-carattere",
  weight: "400",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
  display: "swap",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
  display: "swap",

})
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: "400",
  display: "swap",

})
const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-audiowide",
  weight: "400",
  display: "swap",

})

export const metadata = {
  title: "Only Fly Shit | Create. Elevate. Progress",
  description: "Handmade Crafts and Goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${carattere.variable} ${pacifico.variable} ${orbitron.variable} ${audiowide.variable} ${inter.variable} antialiased`}
      >
       <Header />

       <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
