"use client";

import { useState } from "react";

import "highlight.js/styles/tomorrow-night.css";
import node from "./IntegrationLogos/node";
import python from "./IntegrationLogos/python";
import Highlight from "react-highlight";
import { HStack, VStack } from "./Stack";

const Language = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <HStack
    align="center"
    space={2}
    className="px-4 py-2 w-32 cursor-pointer border-r border-secondarydark bg-dark"
  >
    <div className="w-6 h-6">{children}</div>
    <p className="text-gray-200 text-sm font-semibold">{title}</p>
  </HStack>
);

const IntegrationExample = () => {
  const [language, setLanguage] = useState("");
  return (
    <VStack className="w-full h-full border border-secondarydark">
      <HStack className="w-full">
        <Language title="Node">{node}</Language>
        <Language title="Python">{python}</Language>
      </HStack>
      <div className="w-full h-full">
        {/* @ts-ignore */}
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
      </div>
    </VStack>
  );
};

export default IntegrationExample;
