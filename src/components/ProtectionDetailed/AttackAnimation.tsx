"use client";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { HStack, VStack } from "../Stack";
import ReactCountryFlag from "react-country-flag";

interface Attack {
  bgColor: string;
  textColor: string;
}

const AttackTypeMap: Record<string, Attack> = {
  SQLI: {
    bgColor: "bg-orange-900",
    textColor: "text-orange-300",
  },
  XSS: {
    bgColor: "bg-orange-900",
    textColor: "text-orange-300",
  },
  "Account Takeover": {
    bgColor: "bg-red-900",
    textColor: "text-red-300",
  },
  "Login Brute Force": {
    bgColor: "bg-red-900",
    textColor: "text-red-300",
  },
  "High Sensitive Data Volume": {
    bgColor: "bg-red-900",
    textColor: "text-red-300",
  },
};

const AttackSets: string[][] = [
  ["SQLI", "XSS"],
  ["SQLI"],
  ["XSS"],
  ["Account Takeover"],
  ["Login Brute Force"],
  ["High Sensitive Data Volume"],
  ["High Sensitive Data Volume", "SQLI"],
];

const AttackBadge = ({ type }: { type: string }) => {
  const attack = AttackTypeMap[type];
  return (
    <p
      style={{ lineHeight: "unset" }}
      className={`text-xs font-medium px-2.5 py-0.5 my-1 mr-2 rounded ${attack.bgColor} ${attack.textColor}`}
    >
      {type}
    </p>
  );
};

const AttackTypes = ({ attacks }: { attacks: string[] }) => (
  <HStack align="center" className="flex-wrap">
    {attacks.map((e, i) => (
      <AttackBadge key={i} type={e} />
    ))}
  </HStack>
);

interface NotificationToastParams {
  title: string;
  actorType: string;
  actorName: string;
  actorLocation?: string;
  time?: string;
  notificationType: string;
  attackTypes: string[];
}

const AttackToast = ({
  title,
  actorType,
  actorLocation,
  actorName,
  time,
  notificationType,
  attackTypes,
}: NotificationToastParams) => (
  <div className="w-full p-4 rounded-lg shadow bg-gray-800 text-gray-400 mb-4">
    <VStack className="text-sm font-normal">
      <p
        className={`mb-2 text-sm font-semibold ${
          notificationType == "block" ? "text-green-400" : "text-red-400"
        }`}
      >
        {title}
      </p>
      <HStack align="center" className="pb-1" items="center">
        <p
          style={{ lineHeight: "unset" }}
          className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300"
        >
          {actorType}
        </p>
        {actorLocation ? (
          <ReactCountryFlag
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            className="mr-1"
            countryCode={actorLocation}
            svg
          />
        ) : null}
        <p className="text-sm font-semibold text-white">{actorName}</p>
        {time ? (
          <>
            <p
              style={{ lineHeight: "unset" }}
              className="text-xs font-medium ml-2 mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300"
            >
              Time
            </p>
            <p className="text-sm font-semibold text-white">{time}</p>
          </>
        ) : null}
      </HStack>
      <AttackTypes attacks={attackTypes} />
      <HStack space={2} className="pt-2">
        <div className="cursor-pointer px-2.5 py-1.5 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gray-500 bg-gray-600 focus:ring-gray-800">
          Details
        </div>
        <div className="cursor-pointer px-2.5 py-1.5 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 bg-blue-600 focus:ring-blue-800">
          Watch
        </div>
        <div className="cursor-pointer px-2.5 py-1.5 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-500 bg-red-600 focus:ring-red-800">
          {notificationType == "block" ? "Unblock" : "Block"}
        </div>
      </HStack>
    </VStack>
  </div>
);

const randomIPList: { name: string; location: string }[] = [
  { name: "36.119.56.154", location: "cn" },
  { name: "155.192.187.204", location: "gb" },
  { name: "103.59.81.250", location: "in" },
  { name: "131.62.30.250", location: "us" },
  { name: "199.195.211.74", location: "us" },
  { name: "205.34.200.18", location: "us" },
  { name: "106.176.47.128", location: "jp" },
  { name: "92.30.114.16", location: "gb" },
  { name: "87.187.31.8", location: "de" },
  { name: "45.178.98.69", location: "de" },
];

const randomUserList: { name: string; location: string }[] = [
  { name: "jjohnson@yahoo.com", location: "us" },
  { name: "wareconnie@hotmail.com", location: "gb" },
  { name: "xmitchell@hotmail.com", location: "us" },
  { name: "advaybhath@yahoo.in", location: "in" },
  { name: "annehull@gmail.com", location: "us" },
  { name: "divya.tara", location: "in" },
  { name: "ouchiminori111@gmail.com", location: "jp" },
  { name: "nguyengregory@yahoo.com", location: "gb" },
  { name: "jamie17@hotmail.com", location: "de" },
  { name: "tyler90@hotmail.com", location: "de" },
];

const notificationTypeToTitle: Record<string, string> = {
  block: "Blocked Malicious Actor",
  detect: "Detected Malicious Actor",
};

const BlockTimes: string[] = [
  "30 Minutes",
  "60 Minutes",
  "6 Hours",
  "1 Day",
  "1 Week",
];

function randomItem<T>(ls: T[]): T {
  return ls[Math.floor(Math.random() * ls.length)];
}

const getRandomAttackItem = () => {
  const uuid = uuidv4();
  const notificationType = Math.random() < 0.25 ? "block" : "detect";
  const actorType = Math.random() < 0.5 ? "IP" : "User";
  const title = notificationTypeToTitle[notificationType];
  const actorMap =
    actorType == "IP" ? randomItem(randomIPList) : randomItem(randomUserList);
  const actorName = actorMap.name;
  const actorLocation = actorMap.location;
  const attackTypes = randomItem(AttackSets);
  const time = notificationType == "block" ? randomItem(BlockTimes) : undefined;
  return {
    uuid,
    adding: false,
    nodeParams: {
      title: title,
      actorType: actorType,
      actorName: actorName,
      actorLocation: actorLocation,
      time: time,
      notificationType: notificationType,
      attackTypes: attackTypes,
    },
  };
};

interface AttackItem {
  uuid: string;
  adding: boolean;
  nodeParams: NotificationToastParams;
}

interface AttackAnimationState {
  items: AttackItem[];
  transitionAnimation: boolean;
  offsetHeight: number | null;
  maxHeight: number | null;
}

const initAttackItems = [
  {
    uuid: "9842c56d-eb24-473d-b56f-b236e20cce26",
    adding: true,
    nodeParams: {
      title: "Detected Malicious Actor",
      actorType: "IP",
      actorName: "45.178.98.69",
      actorLocation: "de",
      notificationType: "detect",
      attackTypes: ["High Sensitive Data Volume", "SQLI"],
    },
  },
  {
    uuid: "c8513e62-f640-4c45-ab27-3169379c2015",
    adding: true,
    nodeParams: {
      title: "Detected Malicious Actor",
      actorType: "User",
      actorName: "advaybhath@yahoo.in",
      actorLocation: "in",
      notificationType: "detect",
      attackTypes: ["SQLI", "XSS"],
    },
  },
  {
    uuid: "3226481c-c899-4da6-ae30-516148aba2eb",
    adding: true,
    nodeParams: {
      title: "Detected Malicious Actor",
      actorType: "User",
      actorName: "nguyengregory@yahoo.com",
      actorLocation: "gb",
      notificationType: "detect",
      attackTypes: ["High Sensitive Data Volume", "SQLI"],
    },
  },
];

const AttackAnimation = () => {
  const [state, setState] = useState<AttackAnimationState>({
    items: initAttackItems,
    transitionAnimation: false,
    offsetHeight: null,
    maxHeight: null,
  });

  useEffect(() => {
    const addAttack = () => {
      const delElemUuid = state.items[0].uuid;
      const firstElem = document.getElementById(delElemUuid);
      const containerSize = document.getElementById(
        "attack-scroll-container"
      )?.offsetHeight;
      if (!firstElem) {
        return;
      }
      setState((old) => ({
        ...old,
        transitionAnimation: true,
        offsetHeight: firstElem.offsetHeight,
        maxHeight: containerSize ?? null,
      }));
      setTimeout(
        () =>
          setState((old) => ({
            ...old,
            transitionAnimation: false,
          })),
        1000
      );
      setTimeout(
        () =>
          setState((old) => ({
            ...old,
            offsetHeight: 0,
            items: old.items.filter((e) => e.uuid != delElemUuid),
          })),
        2000
      );
      const attack = getRandomAttackItem();
      setState((old) => ({ ...old, items: [...old.items, attack] }));
      setTimeout(
        () =>
          setState((old) => ({
            ...old,
            items: old.items.map((e) =>
              e.uuid == attack.uuid ? { ...e, adding: true } : e
            ),
          })),
        250
      );
    };
    const interval = setInterval(addAttack, 2000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <div className="w-full overflow-hidden">
      <VStack
        id="attack-scroll-container"
        className={`${state.transitionAnimation ? "transform-transition" : ""}`}
        style={{
          transform:
            state.offsetHeight !== null
              ? `translateY(-${state.offsetHeight}px)`
              : "unset",
          maxHeight: state.maxHeight || "unset",
        }}
      >
        {state.items.map((e) => (
          <div
            key={e.uuid}
            id={e.uuid}
            className={`w-full attacklistitem ${
              e.adding ? "attacklistadding" : ""
            }`}
          >
            <AttackToast {...e.nodeParams} />
          </div>
        ))}
      </VStack>
    </div>
  );
};

export default AttackAnimation;
