import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Team",
  description: "Meet the makers of progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" id="top">
      <body>{children}</body>
    </html>
  );
}
