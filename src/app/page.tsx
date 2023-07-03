import Script from "next/script";
import Discovery from "@/components/Discovery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Metrics from "@/components/Metrics";
import NavBar from "@/components/NavBar";
import BlockAnimation from "@/components/BlockAnimation";
import ProtectionDetailed from "@/components/ProtectionDetailed";
import { VStack } from "@/components/Stack";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Script id="lead-feed-script">
        {`(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('p1e024BBWMK4GB6d');`}
      </Script>
      <NavBar />
      <VStack className="w-full" space={40}>
        <Hero />
        <ProtectionDetailed />
        <BlockAnimation />
        <Discovery />
        <Integrations />
        <Metrics />
        <BottomCTA />
        <Footer />
      </VStack>
    </div>
  );
}
