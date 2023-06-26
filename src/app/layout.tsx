import "./globals.css";
import Providers from './providers'

export const metadata = {
  title: "Metlo",
  description: "Metlo API Security",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
