import Button from "./Button";
import { VStack } from "./Stack";

const BottomCTA = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative overflow-hidden">
      <VStack align="start" space={12}>
        <p className="text-5xl text-gray-200">
          The Best API Security Solution
        </p>
        <div className="flex items-center gap-6 mb-32">
          <Button href="#" variant="outline">
            Schedule a Demo
          </Button>
          <Button href="/login" variant="gradient">
            Sign Up
          </Button>
        </div>
      </VStack>
    </div>
  );
};

export default BottomCTA;
