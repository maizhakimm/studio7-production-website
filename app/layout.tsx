import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio 7 Production | Videography & Photography",
  description:
    "Videography and photography for weddings, corporate events and life moments across Malaysia and Singapore."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
