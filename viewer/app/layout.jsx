import "./globals.sass"
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  weight: ["200","300","400","500","600","700","900"],
  subsets: ["latin"],
  display: "swap"
});

const pjs = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700" ],
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  weight: ["400"],
  display: "swap"
})

export default function RootLayout({ children })
{
  return (
    <html lang="en" className={`${pjs.className} ${inter.className} ${geistMono}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
