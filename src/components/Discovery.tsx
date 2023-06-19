import { HStack, VStack } from "./Stack";
import Image from "next/image";

const DiscoveryFeature = () => (
  <VStack space={2}>
    <HStack>
      <p className="text-gray-200 text-xl">Lorem ipsum dolor</p>
    </HStack>
    <p className="text-gray-400">
      Integer in nibh faucibus, efficitur sem a, scelerisque felis.
    </p>
  </VStack>
);

const Discovery = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative overflow-hidden">
      <VStack align="center" space={2}>
        <p className="text-metloblue">Discovery</p>
        <p className="text-4xl text-gray-200 text-center">
          Create an Inventory of your Endpoints
        </p>
        <p className="text-gray-400 max-w-2xl w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          velit id tortor cursus mattis. Integer in nibh faucibus.
        </p>
        <div className="flex w-full max-w-4xl mx-auto py-6">
          <Image
            src="/endpoint_inventory.png"
            alt="Inventory"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mx-auto rounded-md border-2 border-secondarydark"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DiscoveryFeature />
          <DiscoveryFeature />
          <DiscoveryFeature />
          <DiscoveryFeature />
          <DiscoveryFeature />
          <DiscoveryFeature />
        </div>
      </VStack>
    </div>
  );
};

export default Discovery;
