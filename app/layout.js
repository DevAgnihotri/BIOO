import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar" 

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata = {
  title: "LinkTree Clone",
  description: "Your links in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
