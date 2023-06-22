"use client";

import Button from "../Button";
import ProtectionAnimation from "./ProtectionAnimation";
import { HStack, VStack } from "../Stack";
import { useEffect, useState } from "react";
import chevronRight from "../Icons/chevron-right";

const Protection = () => {
  const [gridSpacing, setGridSpacing] = useState(50);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 500) {
        setGridSpacing(20);
      } else if (width < 800) {
        setGridSpacing(30);
      } else if (width < 1024) {
        setGridSpacing(40);
      } else {
        setGridSpacing(50);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-metloblack py-20 border-metloblackborder border-y-2">
      <div
        id="block"
        className="max-w-6xl w-full mx-auto relative overflow-hidden"
      >
        <div
          style={{ top: `${0 * gridSpacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full"
        ></div>
        <div
          style={{ top: `${1 * gridSpacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full"
        ></div>
        <div
          style={{ top: `${2 * gridSpacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full"
        ></div>
        <div
          style={{ top: `${3 * gridSpacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full"
        ></div>
        <div
          style={{ top: `${4 * gridSpacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full"
        ></div>
        <div
          style={{ top: `${5 * gridSpacing}px` }}
          className="absolute left-0 h-[1px] bg-griddark w-full"
        ></div>
        <ProtectionAnimation gridSpacing={gridSpacing} />
        <div className="mt-[25px] w-full">
          <VStack align="center" className="w-full">
            <p className="pb-2 text-metloblue">Protection</p>
            <p className="pb-2 text-4xl text-gray-200 font-bold">
              Block Attack Requests
            </p>
            <p className="pb-8 text-gray-400 max-w-xl w-full text-center">
              {`Metlo's cloud detection engine identifies bad actors and builds a
            model of how your API works. Each agent pulls this metadata from the
            cloud to block malicious requests in real time.`}
            </p>
            <Button className="w-32" href="https://docs.metlo.com/protection">
              <HStack align="center">
                <p>Learn More</p>
                <p className="w-5 h-5">{chevronRight}</p>
              </HStack>
            </Button>
          </VStack>
        </div>
      </div>
    </div>
  );
};

export default Protection;
