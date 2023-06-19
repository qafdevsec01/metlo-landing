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
  <VStack space={1}>
    <HStack align="center" space={1}>
      {icon ? <div className="h-5 w-5 text-gray-200">{icon}</div> : null}
      <p className="text-gray-200 text-xl">{title}</p>
    </HStack>
    <p className="text-gray-400">{description}</p>
  </VStack>
);

const Discovery = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative overflow-hidden">
      <VStack align="center" space={2}>
        <p className="text-metloblue">Discovery</p>
        <p className="text-4xl text-gray-200 text-center">
          Create an Inventory of your Endpoints
        </p>
        <p className="text-gray-400 max-w-2xl w-full text-center">
          Based on your API traffic, Metlo creates a complete inventory of all
          your API Hosts, Endpoints and Sensitive Data.
        </p>
        <div className="flex w-full max-w-4xl mx-auto py-6">
          <Image
            src="/endpoint_inventory.png"
            alt="Inventory"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mx-auto rounded-md border-2 border-secondarydark"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            icon={webhook}
            title="Webhooks"
            description="Get an alert everytime a new endpoint or datafield is identified"
          />
          <DiscoveryFeature
            icon={api}
            title="Open API Specs"
            description="Autogenerate Open API Specs to complete your docs or use in other tools"
          />
          <DiscoveryFeature
            icon={cross}
            title="Data Redaction"
            description="All of Metlo's discovery is done in our agent and only the metadata is sent to our cloud"
          />
        </div>
      </VStack>
    </div>
  );
};

export default Discovery;
