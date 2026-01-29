import { Geist, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const diary_font = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-diary",
});
const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = {
  title: "Meow notes",
  description: "Encrypted by default",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${diary_font.variable} ${geist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
