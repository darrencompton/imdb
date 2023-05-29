import Providers from "./Providers";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is an IMDB Clone Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
