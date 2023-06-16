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
  link,
  children,
}: {
  title: string;
  link: string;
  children: React.ReactNode;
}) => (
  <a href={link} target="_blank">
    <VStack
      align="center"
      space={4}
      className="px-8 py-4 m-2 w-40 rounded-md cursor-pointer border border-secondarydark bg-dark"
    >
      <div className="w-10 h-10">{children}</div>
      <p className="text-gray-200 text-xs font-semibold">{title}</p>
    </VStack>
    <div style={{ position: "fixed", right: "1em" }}>ab</div>
  </a>
);

const IntegrationGrid = () => {
  return (
    <div className="flex flex-wrap pb-6">
      <Language
        title="AWS Mirroring"
        link={"https://docs.metlo.com/connections/aws"}
      >
        {aws}
      </Language>
      <Language
        title="GCP Mirroring"
        link={"https://docs.metlo.com/connections/gcp "}
      >
        {gcp}
      </Language>
      <Language title="Node" link={"https://docs.metlo.com/connections/nodejs"}>
        {node}
      </Language>
      <Language
        title="Python"
        link={"https://docs.metlo.com/connections/python"}
      >
        {python}
      </Language>
      <Language title="Go" link={"https://docs.metlo.com/connections/go"}>
        {go}
      </Language>
      <Language title="Java" link={"https://docs.metlo.com/connections/java"}>
        {java}
      </Language>
      <Language title="Nginx" link={"https://docs.metlo.com/connections/nginx"}>
        {nginx}
      </Language>
      <Language
        title="Kubernetes"
        link={"https://docs.metlo.com/connections/kubernetes"}
      >
        {kubernetes}
      </Language>
      <Language
        title="Linkerd"
        link={"https://docs.metlo.com/connections/linkerd"}
      >
        {linkerd}
      </Language>
      <Language
        title="Docker"
        link={"https://docs.metlo.com/connections/docker-compose"}
      >
        {docker}
      </Language>
    </div>
  );
};

export default IntegrationGrid;
