import Button from "./Button";
import { VStack } from "./Stack";

const Discovery = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative overflow-hidden">
      <div className="absolute top-0 h-[1px] bg-griddark w-full"></div>
      <div className="absolute top-[50px] h-[1px] bg-griddark w-full"></div>
      <div className="absolute top-[100px] h-[1px] bg-griddark w-full"></div>
      <div className="absolute top-[150px] h-[1px] bg-griddark w-full"></div>
      <div className="absolute top-[200px] h-[1px] bg-griddark w-full"></div>
      <div className="absolute top-[250px] h-[1px] bg-griddark w-full"></div>
      <div className="mt-[25px] w-full">
        <VStack align="center" className="w-full">
          <p className="pb-4 text-metloblue">Protection</p>
          <p className="pb-6 text-4xl text-gray-200">Realtime API Protection</p>
          <p className="pb-4 text-gray-400 max-w-xl w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            velit id tortor cursus mattis. Integer in nibh faucibus, efficitur
            sem a, scelerisque felis. Mauris auctor vitae nulla nec scelerisque.
          </p>
          <Button className="w-32">{`Learn More >`}</Button>
        </VStack>
      </div>
    </div>
  );
};

export default Discovery;
