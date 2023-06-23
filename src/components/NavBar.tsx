import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import { HStack } from "./Stack";
import chevronDown from "./Icons/chevron-down";
import chevronUp from "./Icons/chevron-up";

const NavLinks: React.FC = () => {
  return (
    <>
      <div className="group relative">
        <button className="items-center inline-flex relative cursor-pointer rounded-md px-3 py-2 text-sm text-gray-200 transition-colors delay-150 hover:bg-gray-900 hover:delay-[0ms]">
          <span className="relative z-10">Docs</span>
          <p className="w-3 h-3 ml-2 group-hover:hidden group-focus-within:!hidden">
            {chevronDown}
          </p>
          <p className="hidden w-3 h-3 ml-2 group-hover:inline group-focus-within:!inline">
            {chevronUp}
          </p>
        </button>
        <div
          className="invisible opacity-0 rounded-md absolute z-50 flex flex-col p-4 text-gray-800 group-hover:visible group-hover:opacity-100 group-focus-within:!visible group-focus-within:!opacity-100"
          style={{
            backgroundColor: "rgb(var(--foreground-rgb))",
            borderColor: "rgb(63, 63, 65)",
            borderWidth: "1px",
            width: "700px",
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-in-out",
            transitionDuration: "250ms",
            left: "-100%",
          }}
        >
          <HStack space={4} className="w-full h-full justify-between">
            <a
              href="https://docs.metlo.com"
              className="h-auto w-64 justify-center align-center bg-gray-900 text-gray-500 p-6"
            >
              <p className="font-semibold mb-4 text-lg">metlo-labs/metlo</p>
              <p className="text-sm">
                Effortless API Security to discover and protect your API.
              </p>
            </a>
            <div className="w-full grid grid-cols-2 gap-4">
              {[
                [
                  "Introduction",
                  "Get started with Metlo in less than 15 minutes.",
                  "https://docs.metlo.com/intro",
                ],
                [
                  "Inventory",
                  "View all your endpoints, hosts, and sensitive data.",
                  "https://docs.metlo.com/inventory",
                ],
                [
                  "Protection",
                  "Detect and block any malicious requests and bad actors.",
                  "https://docs.metlo.com/protection",
                ],
                [
                  "Connections",
                  "Integrate Metlo with your app using one of our many connectors.",
                  "https://docs.metlo.com/connections",
                ],
                [
                  "Testing",
                  "Test and catch many different kinds of vulnerabilities with custom tests.",
                  "https://docs.metlo.com/testing",
                ],
                [
                  "Settings",
                  "Configure Metlo to fit your security needs.",
                  "https://docs.metlo.com/settings",
                ],
              ].map(([label, description, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-500 hover:text-white relative rounded-md p-4 transition-colors delay-150 hover:bg-gray-900 hover:delay-[0ms]"
                >
                  <p className="text-md mb-2 font-semibold">{label}</p>
                  <p className="text-sm text-gray-500">{description}</p>
                </Link>
              ))}
            </div>
          </HStack>
        </div>
      </div>
      {[
        ["Blog", "https://blog.metlo.com"],
        ["Testing", "https://docs.metlo.com/testing"],
      ].map(([label, href]) => (
        <Link
          key={label}
          href={href}
          className="relative rounded-md px-3 py-2 text-sm text-gray-200 transition-colors delay-150 hover:bg-gray-900 hover:delay-[0ms]"
        >
          <span className="relative z-10">{label}</span>
        </Link>
      ))}
    </>
  );
};

const NavBar = () => {
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgb(0, 0, 0, 0.5)",
      }}
    >
      <nav>
        <Container className="relative max-w-6xl z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-4">
            <Link href="/" aria-label="Home">
              <div className="flex gap-2">
                <Image
                  src="/logo.svg"
                  alt="Metlo"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/wordmark.svg"
                  alt="Metlo"
                  width={60}
                  height={15}
                  priority
                />
              </div>
            </Link>
            <div className="hidden lg:flex gap-2">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button href="https://app.metlo.com/login" variant="link">
              Log in
            </Button>
            <Button href="https://app.metlo.com/signup" variant="gradient">
              Sign Up
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
