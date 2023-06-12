import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";

const NavLinks: React.FC = () => {
  return (
    <>
      {[
        ["Features", "#features"],
        ["Docs", "https://docs.metlo.com"],
        ["Blog", "https://blog.metlo.com"],
      ].map(([label, href]) => (
        <Link
          key={label}
          href={href}
          className="relative rounded-md px-3 py-2 text-sm text-gray-200 transition-colors delay-150 hover:bg-gray-800 hover:delay-[0ms]"
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
      style={{ backdropFilter: "blur(10px)", backgroundColor: "rgb(0, 0, 0, 0.7)" }}
    >
      <nav>
        <Container className="relative z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-8">
            <Link href="/" aria-label="Home">
              <div className="flex gap-2">
                <Image
                  src="/logo.svg"
                  alt="Metlo"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                />
                <Image
                  src="/wordmark.svg"
                  alt="Metlo"
                  className="dark:invert"
                  width={80}
                  height={20}
                  priority
                />
              </div>
            </Link>
            <div className="flex gap-4">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button href="/login" variant="outline">
              Log in
            </Button>
            <Button href="#">Sign Up</Button>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
