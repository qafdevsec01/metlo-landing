import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <p className="text-7xl mb-6 mt-12 text-white text-center">
        Open Source API Security
      </p>
      <p className="mt-1 text-lg mb-10 text-white max-w-2xl text-center">
        Metlo is an Open Source First API Security Tool that Protects your API.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center gap-6 mb-32">
        <Button href="#" variant="outline">
          Schedule a Demo
        </Button>
        <Button href="/login" variant="gradient">Sign Up</Button>
      </div>
      <div className="px-6 max-w-6xl w-full relative">
        <div className="herogradient absolute top-0 w-full h-full"></div>
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
