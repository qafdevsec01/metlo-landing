"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import chevronRight from "./Icons/chevron-right";
import { HStack, VStack } from "./Stack";

const BottomCTA = () => {
  const [tod, setTOD] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    let text = "";
    if (hours < 12) {
      text = "Morning";
    } else if (hours < 18) {
      text = "Afternoon";
    } else {
      text = "Evening";
    }
    setTOD(text);
  }, [setTOD]);

  return (
    <div className="max-w-6xl w-full mx-auto px-6 relative overflow-hidden">
      <VStack align="start" space={12}>
        <p className="text-5xl text-gray-200 text-center sm:text-left">
          Secure your API <span className="text-metloblue">this {tod}</span>
        </p>
        <div className="flex flex-col items-center gap-6 mb-32 sm:flex-row w-full">
          <Button href="https://app.metlo.com/signup" variant="solid">
            <HStack align="center" className="px-2.5">
              <p className="text-lg">Try Metlo for Free</p>
              <p className="w-5 h-5">{chevronRight}</p>
            </HStack>
          </Button>
          <Button variant="link">
            <a
              target="_blank"
              href="https://calendly.com/metloshri/metlo-demo"
              rel="noopener noreferrer"
            >
              <HStack align="center">
                <p className="text-lg">Schedule a Demo</p>
                <p className="w-5 h-5">{chevronRight}</p>
              </HStack>
            </a>
          </Button>
        </div>
      </VStack>
    </div>
  );
};

export default BottomCTA;
