import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach Agam",
  description:
    "Football Educator, Sports Science Practitioner & Football Development Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}