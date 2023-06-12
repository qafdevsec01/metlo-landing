import Button from "./Button";
import Globe from "./Globe";
import { HStack, VStack } from "./Stack";

const metricNameStyle = "text-sm text-gray-400";
const metricValueStyle = "text-3xl text-metloblue";

const Metrics = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 overflow-hidden">
      <HStack
        className="w-full rounded-md overflow-hidden"
        style={{
          backgroundColor: "rgb(16, 17, 19)",
          borderColor: "rgb(63, 63, 65)",
          borderWidth: "1px",
        }}
      >
        <VStack className="p-8 w-full">
          <p className="pb-4 text-metloblue">Protection at Scale</p>
          <p className="pb-6 text-4xl text-gray-200 font-light">
            Architected for Speed and Reliability
          </p>
          <HStack align="center" className="pb-4">
            <VStack className="p-4">
              <p className={metricValueStyle}>100B+</p>
              <p className={metricNameStyle}>API Calls Processed</p>
            </VStack>
            <div className="h-full border border-gray-800"></div>
            <VStack className="p-4">
              <p className={metricValueStyle}>100K+</p>
              <p className={metricNameStyle}>Endpoints Protected</p>
            </VStack>
            <div className="h-full border border-gray-800"></div>
            <VStack className="p-4">
              <p className={metricValueStyle}>{`<0.2ms`}</p>
              <p className={metricNameStyle}>Latency</p>
            </VStack>
          </HStack>
          <p className="pb-6 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            velit id tortor cursus mattis. Integer in nibh faucibus, efficitur
            sem a, scelerisque felis. Mauris auctor vitae nulla nec scelerisque.
          </p>
          <Button className="w-32">{`Learn More >`}</Button>
        </VStack>
        <div style={{ height: "450px", width: "900px" }}>
          <Globe />
        </div>
      </HStack>
    </div>
  );
};

export default Metrics;
