import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";

const NavLinks: React.FC = () => {
  return (
    <>
      {[
        ["Docs", "https://docs.metlo.com"],
        ["Blog", "https://blog.metlo.com"],
        ["Pricing", "https://docs.metlo.com/pricing"],
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
