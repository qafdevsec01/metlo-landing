"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Arrow {
  uuid: string;
  node: React.ReactNode;
}

const ProtectionAnimation = () => {
  const [children, setChildren] = useState<Arrow[]>([]);

  useEffect(() => {
    const interval = setInterval(addArrow, 1000);
    return () => clearInterval(interval);
  }, []);

  const addArrow = () => {
    const uuid = uuidv4();
    const badReq = Math.random() < 0.5;
    const animation = badReq ? "slide-right-50" : "slide-right";
    const position = Math.floor(Math.random() * 3);
    let top = "top-[100px]";
    if (position == 1) {
      top = "top-[150px]";
    } else if (position == 2) {
      top = "top-[200px]";
    }
    const barColor = badReq ? "bg-red-600" : "bg-green-600";
    setChildren((e) => [
      ...e,
      {
        uuid: uuid,
        node: (
          <div
            key={uuid}
            className={`w-full ${animation} absolute z-10 left-0 ${top}`}
          >
            <div
              className={`rounded-sm h-1 w-20 ${barColor}`}
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
      badReq ? 4000 : 8000
    );
  };

  return (
    <div
      style={{ height: "250px" }}
      className="w-full relative overflow-hidden"
    >
      <div className="w-full">{children.map((e) => e.node)}</div>
      <div
        className="absolute z-20 top-[75px] left-1/2"
        style={{
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="flex h-[150px] w-[150px] justify-center bg-gray-800 rounded-full metloglow"
          style={{
            backgroundColor: "rgb(20, 21, 22, 0.85)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Image src="/logo.svg" alt="Metlo" width={48} height={48} priority />
        </div>
      </div>
    </div>
  );
};

export default ProtectionAnimation;
