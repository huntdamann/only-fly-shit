import "./globals.css";
import { Inter, Carattere, Pacifico, Orbitron, Audiowide } from 'next/font/google';
import ClientLayout from "./ClientLayout";

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-carattere",
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
  title: "Moment of Love | Made To Last Forever",
  description: "Handmade Crafts and Goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${carattere.variable} ${pacifico.variable} ${orbitron.variable} ${audiowide.variable} antialiased`}
      >
       <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
