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
