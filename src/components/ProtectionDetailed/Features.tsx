import React from "react";
import { HStack, VStack } from "../Stack";
import target from "../Icons/target";
import user from "../Icons/user";
import database from "../Icons/database";
import check from "../Icons/check";

const Feature = ({
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

const ProtectionDetailedFeatures = () => {
  return (
    <VStack className="pb-8" space={6}>
      <Feature
        icon={check}
        title="Nearly No False Positives"
        description="Our models don't block based on individual requests. We detect malicious activity across many requests to minimize false positives."
      />
      <Feature
        icon={target}
        title="25+ Built-in Detections"
        description="Metlo comes with many built-in attack detections like SQLI, XSS, SSRF, RCE, Login Brute Force, ATO and more. You can also build your own custom detections."
      />
      <Feature
        icon={user}
        title="User & Session Level Detection"
        description="In addition to IP, we detect and block attacks at the Session and User Level as well."
      />
      <Feature
        icon={database}
        title="API Security Data Lake"
        description="All of your request and attack metadata is stored in a data lake to run custom models on and get insight on your attack surface."
      />
    </VStack>
  );
};

export default ProtectionDetailedFeatures;
