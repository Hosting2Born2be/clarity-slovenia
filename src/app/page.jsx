import HomeHero from "@/components/HomeHero";
import HomeReceive from "@/components/HomeReceive";
import HomeSend from "@/components/HomeSend";
import HowItWorks from "@/components/HowItWorks";
import RequestForm from "@/components/RequestForm";
import ThanksPopup from "@/components/ThanksPopup";
import "@/styles/home.scss";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <HomeSend />
      <HomeReceive />
      <RequestForm />
      <ThanksPopup />
    </>
  );
}
