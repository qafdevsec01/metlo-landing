import Button from "../Button";
import chevronRight from "../Icons/chevron-right";
import { HStack, VStack } from "../Stack";
import AttackAnimation from "./AttackAnimation";
import ProtectionDetailedFeatures from "./Features";

const ProtectionDetailed = () => {
  return (
    <div
      id="protection"
      className="max-w-6xl w-full mx-auto px-6 overflow-hidden"
    >
      <VStack p="8">
        <p className="pb-2 text-metloblue">Protection</p>
        <div className="flex flex-col w-full space-x-0 space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row">
          <VStack className="flex-equal-2">
            <p className="pb-2 text-4xl text-gray-200">Detect API Attacks</p>
            <p className="pb-4 text-gray-400">
              Metlo passively listens to your API traffic and tags every
              malicous request. Our models are built on patterns of malicous
              requests to detect bad actors and API attacks.
            </p>
            <ProtectionDetailedFeatures />
            <Button
              href="https://docs.metlo.com/protection"
              variant="solid"
              className="w-32"
            >
              <HStack align="center">
                <p>Learn More</p>
                <p className="w-5 h-5">{chevronRight}</p>
              </HStack>
            </Button>
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
