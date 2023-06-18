"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import globe from "../Icons/globe";
import server from "../Icons/server";

interface Arrow {
  uuid: string;
  node: React.ReactNode;
}

const ProtectionAnimation = ({ gridSpacing }: { gridSpacing: number }) => {
  const [children, setChildren] = useState<Arrow[]>([]);

  useEffect(() => {
    const addArrow = () => {
      const uuid = uuidv4();
      const badReq = Math.random() < 0.5;
      const animation = badReq ? "slide-right-50" : "slide-right";
      const position = Math.floor(Math.random() * 4);
      let top = gridSpacing * 1;
      if (position == 1) {
        top = gridSpacing * 2;
      } else if (position == 2) {
        top = gridSpacing * 3;
      } else if (position == 3) {
        top = gridSpacing * 4;
      }
      const barColor = badReq ? "bg-red-600" : "bg-green-600";
      setChildren((e) => [
        ...e,
        {
          uuid: uuid,
          node: (
            <div
              key={uuid}
              style={{top: `${top}px`}}
              className={`w-full ${animation} absolute z-10 left-0`}
            >
              <div
                className={`rounded-sm h-1 w-12 ${barColor}`}
                style={{
                  filter: "blur(1px)",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          ),
        },
      ]);
      setTimeout(
        () => setChildren((old) => old.filter((e) => e.uuid != uuid)),
        badReq ? 4000 : 7000
      );
    };
    const interval = setInterval(addArrow, 350);
    return () => clearInterval(interval);
  }, [gridSpacing]);

  return (
    <div
      style={{ height: `${gridSpacing*5}px` }}
      className="w-full relative overflow-hidden"
    >
      <div className="w-full">{children.map((e) => e.node)}</div>
      <div
        className="absolute z-20 left-0 h-full border-r-2 border-secondarydark border-dashed"
        style={{
          backgroundColor: "rgb(20, 21, 22, 0.95)",
          backdropFilter: "blur(2px)",
          width: "15%",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div
            className="h-1/2 w-1/2 mx-6 my-auto"
            style={{
              color: "rgb(38, 38, 38)",
            }}
          >
            {globe}
          </div>
        </div>
      </div>
      <div
        className="absolute z-20 left-1/2"
        style={{
          top: `${gridSpacing / 2}px`,
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="flex justify-center bg-gray-800 rounded-full metloglow"
          style={{
            height: `${gridSpacing * 4}px`,
            width: `${gridSpacing * 4}px`,
            backgroundColor: "rgb(20, 21, 22, 0.85)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Image src="/logo.svg" alt="Metlo" width={gridSpacing} height={gridSpacing} priority />
        </div>
      </div>
      <div
        className={
          "absolute z-20 right-0 h-full border-l-2 border-secondarydark border-dashed leftbordershadow"
        }
        style={{
          backgroundColor: "rgb(20, 21, 22, 0.95)",
          backdropFilter: "blur(2px)",
          width: "15%",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div
            className="h-1/2 w-1/2 mx-6 my-auto"
            style={{
              color: "rgb(38, 38, 38)",
            }}
          >
            {server}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionAnimation;
