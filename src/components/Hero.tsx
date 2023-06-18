import Button from "./Button";
import HeroFilterAnimation from "./HeroFilterAnimation";
import { VStack } from "./Stack";

const Hero = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="relative max-w-6xl w-full px-6 pt-16">
        <VStack className="relative w-2/3 z-20">
          <p className="text-8xl mb-6 mt-6 text-white font-normal">
            Next Gen API Security
          </p>
          <p className="mt-1 text-lg mb-10 text-white text-gray-200 max-w-2xl font-light">
            Metlo is an Open Source First API Security Tool that Protects your
            API. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center gap-6 mb-32">
            <Button href="/login" variant="solid">
              {`Try Metlo for Free >`}
            </Button>
            <Button href="#" variant="link">
              {`Schedule a Demo >`}
            </Button>
          </div>
        </VStack>
        <div className="absolute top-[-75px] right-0 z-10">
          <HeroFilterAnimation />
        </div>
      </div>
      <div className="px-6 max-w-6xl w-full relative z-20">
        <div
          style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}
          className="rounded-md overflow-hidden"
        >
          <iframe
            src="https://www.loom.com/embed/fec7b1bb001a42ddb3012c1c8f6c3b21"
            allowFullScreen
            style={{
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
