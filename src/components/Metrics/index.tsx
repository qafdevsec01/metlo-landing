import Button from "../Button";
import Globe from "./Globe";
import { HStack, VStack } from "../Stack";
import chevronRight from "../Icons/chevron-right";

const metricNameStyle = "text-sm text-gray-400";
const metricValueStyle = "text-3xl text-metloblue";

const Metrics = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 overflow-hidden">
      <div
        className="w-full rounded-md overflow-hidden flex flex-col w-full space-x-0 space-y-4 lg:space-y-0 lg:space-x-10 lg:flex-row"
        style={{
          backgroundColor: "rgb(16, 17, 19)",
          borderColor: "rgb(63, 63, 65)",
          borderWidth: "1px",
        }}
      >
        <VStack className="p-8 w-full">
          <p className="pb-2 text-metloblue">Protection at Scale</p>
          <p className="pb-6 text-4xl text-gray-200 font-light">
            Built for Performance and Reliability
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
              <p className={metricNameStyle}>Latency Increase</p>
            </VStack>
          </HStack>
          <p className="pb-6 text-gray-400">
            Metlo has been tested for performance at scale. Our agents have
            processed 100s of billions of API requests protecting 100s of
            thousands of endpoints. Each agent uses a maximum of 1% CPU, 50MB of
            memory and adds at most of 200 microseconds of latency.
          </p>
          <Button href="https://docs.metlo.com/performance" variant="solid" className="w-32">
            <HStack align="center">
              <p>Learn More</p>
              <p className="w-5 h-5">{chevronRight}</p>
            </HStack>
          </Button>
        </VStack>
        <div style={{ height: "450px", width: "900px" }}>
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
