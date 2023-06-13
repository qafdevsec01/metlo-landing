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
  docker = "Docker",
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
    case languageExamples.docker:
      return docker;
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
          <pre className="h-full">
            <code className="h-full text-sm">
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
          <pre className="h-full">
            <code className="h-full text-sm">
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
          <pre className="h-full">
            <code className="h-full text-sm">
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
          <pre className="h-full">
            <code className="h-full text-sm">
              {`kind: Pod
apiVersion: v1
metadata:
  name: test-app 
  labels:
    app: test-app 
spec:
  containers:
  - name: test-app 
    image: hashicorp/http-echo:0.2.3
    args:
    - "-text=Hello World! This is a Metlo Kubernetes with kind App"
  - name: metlo-sidecar
    image: metlo/agent
    securityContext:
      privileged: true
    env:
      - name: METLO_HOST
        value: https://app.metlo.com:8081
      - name: METLO_KEY
        value: <YOUR_METLO_API_KEY>
  `}
            </code>
          </pre>
        </Highlight>
      );
    case languageExamples.docker:
      return (
        // @ts-ignore
        <Highlight className="yaml h-full" element="div">
          <pre className="h-full">
            <code className="h-full text-sm">
              {`version: "3.9"

services:
  <your-service>:
    ...
  metlo:
    image: metlo/agent
    network_mode: "service:<your-service>"
    depends_on:
      - <your-service>
    cap_add:
      - NET_ADMIN
    environment:
      - METLO_HOST=http://<YOUR_METLO_HOST>:8081
      - METLO_KEY=<YOUR_METLO_API_KEY>
      `}
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
}: {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <HStack
    align="center"
    space={2}
    className="px-2.5 py-2 w-32 cursor-pointer border-r border-secondarydark bg-dark example-box"
    onClick={onClick}
  >
    <div className="w-6 h-6">{children}</div>
    <HStack className="full-width">
      <p className="text-gray-200 text-sm font-semibold margin-auto">{title}</p>
    </HStack>
  </HStack>
);

const IntegrationExample = () => {
  const [language, setLanguage] = useState(languageExamples.node);
  return (
    <VStack className="w-full h-full border border-secondarydark">
      <HStack className="w-full">
        {Object.entries(languageExamples).map(([id, name], idx) => {
          return (
            <Language
              title={name}
              key={idx}
              onClick={() => {
                setLanguage(name as languageExamples);
              }}
            >
              {map_language_to_icon(name as languageExamples)}
            </Language>
          );
        })}
      </HStack>
      <div className="w-full h-full">
        {<MapLanguageToExample lang={language} />}
      </div>
    </VStack>
  );
};

export default IntegrationExample;
