import api from "./Icons/api";
import cross from "./Icons/cross";
import flowSwitch from "./Icons/flow-switch";
import key from "./Icons/key";
import lock from "./Icons/lock";
import webhook from "./Icons/webhook";
import { HStack, VStack } from "./Stack";
import Image from "next/image";

const DiscoveryFeature = ({
  icon,
  title,
  description,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
}) => (
  <VStack>
    {icon ? <div className="h-5 w-5 text-metloblue">{icon}</div> : null}
    <p className="text-gray-200 text-md pt-2">{title}</p>
    <p className="text-gray-400 pt-1">{description}</p>
  </VStack>
);

const Discovery = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative">
      <VStack align="center" className="z-20" space={2}>
        <p className="text-metloblue">Discovery</p>
        <p className="text-4xl text-gray-200 text-center font-bold">
          Create an Inventory of your Endpoints
        </p>
        <p className="text-gray-400 max-w-2xl w-full text-center">
          Based on your API traffic, Metlo creates a complete inventory of all
          your API Hosts, Endpoints and Sensitive Data.
        </p>
        <div className="flex w-full max-w-4xl mx-auto py-6 relative">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg">
            <Image
              src="/endpoint_inventory_dark.png"
              alt="Inventory"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mx-auto rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
          <DiscoveryFeature
            icon={flowSwitch}
            title="Endpoints"
            description="Categorize and list all the endpoints and datafields in your API"
          />
          <DiscoveryFeature
            icon={lock}
            title="Sensitive Data"
            description="Automatically identify map all the sensitive data your API processes"
          />
          <DiscoveryFeature
            icon={key}
            title="Authentication"
            description="Identify which endpoints are unauthenticated to find potential data leaks"
          />
          <DiscoveryFeature
            icon={cross}
            title="Data Redaction"
            description="All of Metlo's discovery is done in our agent and only the metadata is sent to our cloud"
          />
          <DiscoveryFeature
            icon={webhook}
            title="Webhooks"
            description="Get an alert everytime a new endpoint or datafield is identified"
          />
          <DiscoveryFeature
            icon={api}
            title="Open API Specs"
            description="Autogenerate Open API Specs to complete your docs or use in other tools"
          />
        </div>
      </VStack>
    </div>
  );
};

export default Discovery;
