import Button from "./Button";
import IntegrationExample from "./IntegrationExample";
import IntegrationGrid from "./IntegrationGrid";
import { HStack, VStack } from "./Stack";

const Integrations = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 overflow-hidden">
      <VStack p="8">
        <p className="pb-4 text-metloblue">Quick Setup</p>
        <HStack className="w-full" space={12}>
          <VStack className="flex-equal-2">
            <p className="pb-6 text-4xl text-gray-200">
              Deploy Metlo in Less Than 15 Minutes
            </p>
            <p className="pb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              velit id tortor cursus mattis. Integer in nibh faucibus, efficitur
              sem a, scelerisque felis. Mauris auctor vitae nulla nec
              scelerisque.
            </p>
            <IntegrationGrid />
            <Button className="w-32">{`Docs >`}</Button>
          </VStack>
          <div style={{ overflowX: "auto" }} className="flex-equal-2">
            <IntegrationExample />
          </div>
        </HStack>
      </VStack>
    </div>
  );
};

export default Integrations;
