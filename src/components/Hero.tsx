import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <p className="text-6xl font-medium mb-6 mt-12 text-white">
        Secure your API
      </p>
      <p className="mt-1 text-lg mb-6 text-white max-w-2xl text-center">
        Metlo is an Open Source First API Security Tool that Protects your API.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center gap-6 mb-16">
        <Button href="/login" variant="outline">
          Sign Up
        </Button>
        <Button href="#">Schedule a Demo</Button>
      </div>
      <div style={{ maxWidth: "1100px", width: "100%" }} className="px-6">
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
