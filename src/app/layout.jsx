import { Montserrat } from "next/font/google";
import "@/styles/base.scss";
import Preloader from "@/components/Preloader";
import { PopupsProvider } from "@/context/PopupsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Business Payment Solutions | Clarity Global",
    template: "%s",
  },
  description:
    "Explore Clarity Global business solutions for managing international payments. Get secure transactions, competitive fees, and fast transfers with our easy setup and global reach. Now Officially Represented in Slovenia.",
  openGraph: {
    title: {
      default:
        "Business Payment Solutions | Clarity Global",
      template: "%s",
    },
    description:
      "Explore Clarity Global business solutions for managing international payments. Get secure transactions, competitive fees, and fast transfers with our easy setup and global reach. Now Officially Represented in Slovenia.",
    //images: "https://clarityglobal.si/images/meta.png",
  },
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
