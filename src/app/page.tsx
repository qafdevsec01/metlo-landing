import Discovery from "@/components/Discovery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Metrics from "@/components/Metrics";
import NavBar from "@/components/NavBar";
import Protection from "@/components/Protection";
import { VStack } from "@/components/Stack";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <VStack className="w-full" space={32}>
        <Hero />
        <Protection />
        <Discovery />
        <Integrations />
        <Metrics />
        <Footer />
      </VStack>
    </div>
  );
}
