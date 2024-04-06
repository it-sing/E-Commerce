import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import StyledJsxRegistry from "./registry";
import FooterComponent from "@/components/layouts/footer/FooterComponent";

export const metadata: Metadata = {
  title: {
    template: "%s - ly-store",
    default: "LY - STORE",

  },
  description: "This is description shop",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - Ly Store",
      default: "Ly Store",
    },
    description: "This is description stre",
    images: [
      "https://i.pinimg.com/736x/f6/99/5d/f6995d649dcf5c1ddf7c28560f8cad5b.jpg",
    ],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <NextUILayout>
          <StyledJsxRegistry>
            <NavbarComponent />
            <Suspense fallback={<LoadingComponent />}>
              <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
            </Suspense>
            <FooterComponent/>
          </StyledJsxRegistry>
        </NextUILayout>
      </body>
    </html>
  );
}
