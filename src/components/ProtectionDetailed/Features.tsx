import { HStack, VStack } from "../Stack";

const Feature = () => (
  <VStack space={2}>
    <HStack>
      <p className="text-gray-200 text-xl">Lorem ipsum dolor</p>
    </HStack>
    <p className="text-gray-400">
      Integer in nibh faucibus, efficitur sem a, scelerisque felis.
    </p>
  </VStack>
);

const ProtectionDetailedFeatures = () => {
  return (
    <VStack className="pb-8" space={4}>
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </VStack>
  );
};

export default ProtectionDetailedFeatures;
