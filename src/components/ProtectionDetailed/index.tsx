import Button from "../Button";
import { VStack } from "../Stack";
import AttackAnimation from "./AttackAnimation";
import ProtectionDetailedFeatures from "./Features";

const ProtectionDetailed = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 overflow-hidden">
      <VStack p="8">
        <p className="pb-4 text-metloblue">Protection</p>
        <div className="flex flex-col w-full space-x-0 space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row">
          <VStack className="flex-equal-2">
            <p className="pb-6 text-4xl text-gray-200">Detect API Attacks</p>
            <p className="pb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              velit id tortor cursus mattis. Integer in nibh faucibus, efficitur
              sem a, scelerisque felis. Mauris auctor vitae nulla nec
              scelerisque.
            </p>
            <ProtectionDetailedFeatures />
            <Button className="w-32">{`Learn More >`}</Button>
          </VStack>
          <div style={{ overflowX: "auto" }} className="flex-equal-2 lg:px-8">
            <AttackAnimation />
          </div>
        </div>
      </VStack>
    </div>
  );
};

export default ProtectionDetailed;
