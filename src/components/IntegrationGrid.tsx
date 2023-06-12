import React from "react";
import aws from "./IntegrationLogos/aws";
import { VStack } from "./Stack";
import gcp from "./IntegrationLogos/gcp";
import node from "./IntegrationLogos/node";
import python from "./IntegrationLogos/python";
import go from "./IntegrationLogos/go";
import linkerd from "./IntegrationLogos/linkerd";
import java from "./IntegrationLogos/java";
import nginx from "./IntegrationLogos/nginx";
import kubernetes from "./IntegrationLogos/kubernetes";
import docker from "./IntegrationLogos/docker";

const Language = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <VStack
    align="center"
    space={4}
    className="px-8 py-4 m-2 w-40 rounded-md cursor-pointer border border-secondarydark bg-dark"
  >
    <div className="w-10 h-10">{children}</div>
    <p className="text-gray-200 text-xs font-semibold">{title}</p>
  </VStack>
);

const IntegrationGrid = () => {
  return (
    <div className="flex flex-wrap pb-6">
      <Language title="AWS Mirroring">{aws}</Language>
      <Language title="GCP Mirroring">{gcp}</Language>
      <Language title="Node">{node}</Language>
      <Language title="Python">{python}</Language>
      <Language title="Go">{go}</Language>
      <Language title="Java">{java}</Language>
      <Language title="Nginx">{nginx}</Language>
      <Language title="Kubernetes">{kubernetes}</Language>
      <Language title="Linkerd">{linkerd}</Language>
      <Language title="Docker">{docker}</Language>
    </div>
  );
};

export default IntegrationGrid;
