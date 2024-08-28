import { Montserrat } from "next/font/google";
import "@/styles/base.scss";
import Preloader from "@/components/Preloader";
import { PopupsProvider } from "@/context/PopupsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Clarity Global",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <PopupsProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
        </PopupsProvider>
      </body>
    </html>
  );
}
