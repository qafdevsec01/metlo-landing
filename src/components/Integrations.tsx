"use client";

import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import go from "react-syntax-highlighter/dist/esm/languages/hljs/go";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import plaintext from "react-syntax-highlighter/dist/esm/languages/hljs/plaintext";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import yaml from "react-syntax-highlighter/dist/esm/languages/hljs/yaml";
import vs2015 from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";
import { HStack, VStack } from "./Stack";
import {
  FRAMEWORK_TO_HIGHLIGHT_LANGUAGE_MAP,
  FRAMEWORK_TO_ICON_MAP,
  FRAMEWORK_TO_TEXT_MAP,
  Framework,
  LANGUAGE_DOCS_LINK,
  LANGUAGE_FRAMEWORKS,
  LANGUAGE_TO_ICON_MAP,
  Language,
} from "./constants";
import clipboard from "./Icons/clipboard";
import checkCircle from "./Icons/check-circle";
import externalLink from "./Icons/external-link";

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("plaintext", plaintext);

const showLineNumbers = (framework: Framework) => {
  switch (framework) {
    case Framework.aws:
    case Framework.gcp:
      return false;
    default:
      return true;
  }
};

const Integrations = () => {
  const [language, setLanguage] = useState({
    language: Language.node,
    framework: Framework.express,
    text: FRAMEWORK_TO_TEXT_MAP[Framework.express],
    link: LANGUAGE_DOCS_LINK[Framework.express],
  });
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <div className="max-w-6xl w-full mx-auto px-6 overflow-hidden">
      <VStack align="center" space={4}>
        <p className="text-metloblue">Quick Setup</p>
        <p className="text-4xl text-gray-200 text-center">
          Deploy Metlo in Less Than 15 Minutes
        </p>
        <p className="text-gray-400 pb-6 max-w-2xl w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          velit id tortor cursus mattis. Integer in nibh faucibus.
        </p>
        <HStack
          className="w-full justify-center items-center flex-wrap overflow-x-auto pb-4"
          space={6}
        >
          {Object.entries(Language).map(([id, name], idx, arr) => (
            <VStack
              key={id}
              className="cursor-pointer mb-6"
              onClick={() => {
                setLanguage({
                  language: name,
                  framework: LANGUAGE_FRAMEWORKS[name][0],
                  text: FRAMEWORK_TO_TEXT_MAP[LANGUAGE_FRAMEWORKS[name][0]],
                  link: LANGUAGE_DOCS_LINK[LANGUAGE_FRAMEWORKS[name][0]],
                });
                setCopied(false);
              }}
              align="center"
              space={6}
            >
              <div
                className={`w-24 h-20 px-6 py-4 cursor-pointer border rounded-md border-secondarydark ${
                  language.language !== name && "icon-filter highlight_on_hover"
                }`}
              >
                {LANGUAGE_TO_ICON_MAP[name]}
              </div>
              <p
                className={`text-gray-${
                  language.language === name ? "200" : "500"
                } text-sm m-auto`}
              >
                {name}
              </p>
            </VStack>
          ))}
        </HStack>
        <VStack
          className="w-full relative rounded-md overflow-hidden"
          style={{
            borderColor: "rgb(63, 63, 65)",
            borderWidth: "1px",
          }}
        >
          <HStack className="w-full justify-between p-4">
            <HStack space={4}>
              {Object.values(LANGUAGE_FRAMEWORKS[language.language]).map(
                (e) => (
                  <HStack
                    key={e}
                    className="h-10 cursor-pointer rounded-md overflow-hidden px-2 items-center"
                    onClick={() => {
                      setLanguage((old) => ({
                        ...old,
                        framework: e,
                        text: FRAMEWORK_TO_TEXT_MAP[e],
                        link: LANGUAGE_DOCS_LINK[e],
                      }));
                      setCopied(false);
                    }}
                    style={
                      language.framework === e
                        ? {
                            borderColor: "rgb(63, 63, 65)",
                            borderWidth: "1px",
                          }
                        : {
                            borderColor: "transparent",
                            borderWidth: "1px",
                          }
                    }
                    space={2}
                  >
                    <div className="h-6">{FRAMEWORK_TO_ICON_MAP[e]}</div>
                    <p className="text-gray-500 text-sm m-auto">{e}</p>
                  </HStack>
                )
              )}
            </HStack>
            <div
              className={`${!copied && "cursor-pointer"} h-6 w-6 mx-6 my-auto`}
              style={{
                color: copied ? "green" : "rgb(107 114 128)",
              }}
              onClick={() => {
                if (!copied) {
                  setCopied(true);
                  navigator.clipboard.writeText(language.text);
                  setTimeout(() => setCopied(false), 3500);
                }
              }}
            >
              {copied ? checkCircle : clipboard}
            </div>
          </HStack>
          <hr
            className="bg-secondarydark"
            style={{ height: "1px", border: "none" }}
          />
          <SyntaxHighlighter
            className="h-[500px] !bg-transparent"
            language={FRAMEWORK_TO_HIGHLIGHT_LANGUAGE_MAP[language.framework]}
            style={vs2015}
            showLineNumbers={showLineNumbers(language.framework)}
          >
            {language.text}
          </SyntaxHighlighter>
          <a
            className="absolute bottom-4 right-4"
            target="_blank"
            href={`https://docs.metlo.com/connections/${language.link}`}
          >
            {externalLink}
          </a>
        </VStack>
      </VStack>
    </div>
  );
};

export default Integrations;
