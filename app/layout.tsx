import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

import { Providers } from "@/app/GlobalRedux/provider";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G-Sneaker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
