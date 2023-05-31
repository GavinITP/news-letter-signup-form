import { Metadata } from "next";

import "styles/globals.css";
import { Roboto } from "next/font/google";
import { EmailContextProvider } from "@/components/EmailContext";

const roboto = Roboto({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ProductInsightsHub",
  description:
    "Product discovery and building what matters Measuring to ensure updates are a success And much more!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <body className="bg-charcoal">
        <EmailContextProvider>{children}</EmailContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
