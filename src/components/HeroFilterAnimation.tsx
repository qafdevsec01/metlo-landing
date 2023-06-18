import Image from "next/image";

const HeroFilterAnimation = () => {
  const width = 600;
  const height = 700;
  const spacing = 50;
  const numRows = height / spacing;
  const numCols = width / spacing;
  return (
    <div
      className="relative overflow-hidden mx-auto"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <div className="w-full h-full linear-spotlight-horizontal z-30 absolute top-0 left-0 bg-dark"></div>
      {[...Array(numRows - 1).keys()].map((e, i) => (
        <div
          key={i}
          style={{ top: `${(e + 1) * spacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full z-10"
        ></div>
      ))}
      {[...Array(numCols - 1).keys()].map((e, i) => (
        <div
          key={i}
          style={{ left: `${(e + 1) * spacing}px` }}
          className="absolute top-0 w-[1px] bg-griddark h-full z-10"
        ></div>
      ))}
      <div
        className="absolute top-0 w-[2px] bg-red-700 h-1/2 z-30 redglow"
        style={{
          right: `${spacing * 3}px`,
        }}
      ></div>
      <div
        className="absolute z-40 top-1/2"
        style={{
          right: `${spacing * 3}px`,
          transform: "translateX(50%) translateY(-50%)",
        }}
      >
        <div
          className="flex h-[100px] w-[100px] justify-center bg-gray-800 rounded-full metloglow"
          style={{
            backgroundColor: "rgb(20, 21, 22, 0.85)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Image src="/logo.svg" alt="Metlo" width={32} height={32} priority />
        </div>
      </div>
      <div
        className="absolute bottom-0 w-[2px] bg-green-700 greenglow h-1/2 z-30"
        style={{
          right: `${spacing * 3}px`,
        }}
      ></div>
    </div>
  );
};

export default HeroFilterAnimation;
