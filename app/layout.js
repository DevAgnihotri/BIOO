import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar" 

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata = {
  title: "BIOO",
  description: "Your links in one welcoming place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-slate-100 antialiased selection:bg-orange-500/30 selection:text-slate-950`}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-15%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-orange-500/15 blur-3xl" />
          <div className="absolute bottom-[-25%] right-[-5%] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        </div>
        <Navbar />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
