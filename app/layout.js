import { Aleo } from "next/font/google";
import "./globals.css";
import Header from "./src/components/header/Header.jsx";
import Footer from "./src/components/footer/Footer.jsx"
const aleo = Aleo({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
