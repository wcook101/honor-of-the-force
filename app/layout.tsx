import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { DemoNotice } from "@/components/DemoNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Honor of the Force",
    template: "%s · Honor of the Force",
  },
  description:
    "A documentary demonstration about wounded state police officers and the families of officers who died while serving. All profiles are fictional.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <DemoNotice />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
