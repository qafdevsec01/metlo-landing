import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
