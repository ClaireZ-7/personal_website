import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Yi FAN 樊漪", template: "%s — Yi FAN 樊漪" },
  description: "Yi Fan, Associate Professor at the National University of Singapore. Research in household sustainability, urban economics, labor economics and household finance.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
