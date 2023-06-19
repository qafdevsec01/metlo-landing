import Button from "./Button";
import chevronRight from "./Icons/chevron-right";
import { HStack, VStack } from "./Stack";

const BottomCTA = () => {
  const hours = new Date().getHours();
  let text = "";
  if (hours < 12) {
    text = "Morning";
  } else if (hours < 18) {
    text = "Afternoon";
  } else {
    text = "Evening";
  }
  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative overflow-hidden">
      <VStack align="start" space={12}>
        <p className="text-5xl text-gray-200">
          Secure your API <span className="text-metloblue">this {text}</span>
        </p>
        <div className="flex items-center gap-6 mb-32">
          <Button href="https://app.metlo.com/signup" variant="solid">
            <HStack align="center">
              <p>Try Metlo for Free</p>
              <p className="w-5 h-5">{chevronRight}</p>
            </HStack>
          </Button>
          <Button variant="link">
            <a
              target="_blank"
              href="https://calendly.com/metloshri/metlo-demo"
              rel="noopener noreferrer"
            >
              <HStack align="center">
                <p>Schedule a Demo</p>
                <p className="w-5 h-5">{chevronRight}</p>
              </HStack>
            </a>
          </Button>
        </div>
      </VStack>
    </div>
  );
};

export default BottomCTA;
