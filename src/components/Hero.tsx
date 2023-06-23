import Button from "./Button";
import HeroFilterAnimation from "./HeroFilterAnimation";
import ArrowRight from "./Icons/chevron-right";
import { HStack, VStack } from "./Stack";

const descTagClass = `bg-metloblue rounded-full px-2 py-0.5 font-normal whitespace-nowrap	 mx-1`;

const Hero = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="relative max-w-6xl w-full px-6 pt-16">
        <VStack className="relative w-full max-w-2xl z-20">
          <p className="text-5xl md:text-7xl lg:text-8xl mb-6 mt-6 text-white font-normal ">
            Effortless API Security
          </p>
          <p className="mt-1 text-lg mb-10 text-white text-gray-200 max-w-2xl font-light leading-8">
            Open Source API security tool you can
            <span className={descTagClass}>
              <a href="#setup">{`setup in < 15 minutes`}</a>
            </span>{" "}
            that inventories your endpoints,{" "}
            <span className={descTagClass}>
              <a href="#protection">detects bad actors</a>
            </span>{" "}
            and
            <span className={descTagClass}>
              <a href="#block">blocks malicious traffic</a>
            </span>
            in real time.
          </p>
          <div className="flex items-center gap-6 mb-32">
            <Button href="https://app.metlo.com/signup" variant="solid">
              <HStack align="center" className="px-2.5">
                <p className="text-lg">Try Metlo for Free</p>
                <p className="w-5 h-5">{ArrowRight}</p>
              </HStack>
            </Button>
            <Button variant="link">
              <a
                target="_blank"
                href="https://calendly.com/metloshri/metlo-demo"
                rel="noopener noreferrer"
              >
                <HStack align="center">
                  <p className="text-lg">Schedule a Demo</p>
                  <p className="w-5 h-5">{ArrowRight}</p>
                </HStack>
              </a>
            </Button>
          </div>
        </VStack>
        <div className="hidden md:block absolute top-[-75px] right-0 z-10">
          <HeroFilterAnimation />
        </div>
      </div>
      <div className="px-6 max-w-6xl w-full relative z-20">
        <div
          style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}
          className="rounded-md overflow-hidden"
        >
          <iframe
            src="https://www.loom.com/embed/a35ee39f2d474feabeda62cc078e3660"
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
