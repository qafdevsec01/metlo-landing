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
      <VStack className="w-full pb-32" space={32}>
        <Hero />
        <Protection />
        <Integrations />
        <Metrics />
      </VStack>
    </div>
  );
}
