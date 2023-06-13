"use client";

import { useState } from "react";

import "highlight.js/styles/tomorrow-night.css";
import node from "./IntegrationLogos/node";
import python from "./IntegrationLogos/python";
import Highlight from "react-highlight";
import { HStack, VStack } from "./Stack";
import aws from "./IntegrationLogos/aws";
import docker from "./IntegrationLogos/docker";
import kubernetes from "./IntegrationLogos/kubernetes";

enum languageExamples {
  node = "Node",
  python = "Python",
  aws = "AWS",
  kubernetes = "Kubernetes",
  // docker = "Docker",
}

const map_language_to_icon = (lang: languageExamples) => {
  switch (lang) {
    case languageExamples.node:
      return node;
    case languageExamples.python:
      return python;
    case languageExamples.aws:
      return aws;
    case languageExamples.kubernetes:
      return kubernetes;
    default:
      console.log("Fell to default");
      return <></>;
  }
};

const MapLanguageToExample = ({ lang }: { lang: languageExamples }) => {
  switch (lang) {
    case languageExamples.node:
      return (
        // @ts-ignore
        <Highlight className="typescript h-full" element="div">
          <pre className="h-full pre-code">
            <code className="h-full text-sm overflow-scroll">
              {`import { initExpress as metlo } from "metlo";
...
const app = express();
...
app.use(
  metlo(
    {
      key: <YOUR_METLO_API_KEY>,
      host: "http://<YOUR_METLO_HOST>:8081",
    }
  )
);`}
            </code>
          </pre>
        </Highlight>
      );
    case languageExamples.python:
      return (
        // @ts-ignore
        <Highlight className="python h-full" element="div">
          <pre className="h-full pre-code">
            <code className="h-full text-sm overflow-scroll">
              {`from flask import Flask

from metlo.flask import MetloFlask

app = Flask(__name__)
MetloFlask(app, "http://<YOUR_METLO_HOST>:8081", "<YOUR_METLO_API_KEY>")
`}
            </code>
          </pre>
        </Highlight>
      );
    case languageExamples.aws:
      return (
        // @ts-ignore
        <Highlight className="h-full" element="div">
          <pre className="h-full pre-code">
            <code className="h-full text-sm overflow-scroll">
              {`$ metlo traffic-mirror aws new
✔ Select your AWS region · us-west-2
✔ What type of source do you want to mirror? · instance
✔ Enter the id of your source · i-xxxxxxxxxxxxxxxxx
Finding Source...
Success!
✔ Enter the id of your Metlo Mirroring Instance:  · i-xxxxxxxxxxxxxxxxx
Creating Mirror Session...
Success!
`}
            </code>
          </pre>
        </Highlight>
      );
    case languageExamples.kubernetes:
      return (
        // @ts-ignore
        <Highlight className="yaml h-full" element="div">
          <pre className="h-full pre-code">
            <code className="h-full text-sm overflow-scroll">
              {`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: metlo-app
spec:
  selector:
    matchLabels:
      name: metlo-app
  template:
    metadata:
      labels:
        name: metlo-app
    spec:
      hostNetwork: true
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule
      containers:
        - name: metlo-agent
          image: metlo/agent
          securityContext:
            privileged: true
          env:
            - name: METLO_HOST
              value: https://app.metlo.com:8081
            - name: METLO_KEY
              value: <YOUR_METLO_API_KEY>`}
            </code>
          </pre>
        </Highlight>
      );
    default:
      console.log("Fell to default");
      return <></>;
  }
};

const Language = ({
  title,
  children,
  onClick,
  itemCount,
}: {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  itemCount: number;
}) => (
  <HStack
    align="center"
    space={2}
    className="px-2.5 py-2 w-32 cursor-pointer border-r border-secondarydark bg-dark example-box"
    onClick={onClick}
    style={{ flexBasis: `${Math.round(100 / itemCount)}%`, flexShrink: 0 }}
  >
    <div className="w-6 h-6">{children}</div>
    <HStack className="flex-equal-2">
      <p className="text-gray-200 text-sm font-semibold m-auto">{title}</p>
    </HStack>
  </HStack>
);

const IntegrationExample = () => {
  const [language, setLanguage] = useState(languageExamples.node);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
      <VStack className="flex-equal-2 h-full border border-secondarydark">
        <HStack className="">
          {Object.entries(languageExamples).map(([id, name], idx, arr) => {
            return (
              <Language
                title={name}
                key={idx}
                onClick={() => {
                  setLanguage(name as languageExamples);
                }}
                itemCount={arr.length}
              >
                {map_language_to_icon(name as languageExamples)}
              </Language>
            );
          })}
        </HStack>
        <div className="h-full">{<MapLanguageToExample lang={language} />}</div>
      </VStack>
    </>
  );
};

export default IntegrationExample;
