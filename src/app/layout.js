import React from "react";
import Providers from "./components/theme/providers";
import "./styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://theutkarshdev.vercel.app"),
  title: "Utkarsh Kushwaha | React Frontend Developer",
  description:
    "Looking for a web user interface developer? I am a React Frontend Developer and Web User Interface Developer with expertise in Frontend Web Development.",
  openGraph: {
    title: "Utkarsh Kushwaha | React Frontend Developer",
    description:
      "Looking for a web user interface developer? I am a React Frontend Developer and Web User Interface Developer with expertise in Frontend Web Development.",
    images: "https://theutkarshdev.vercel.app/opengraph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://theutkarshdev.vercel.app",
    title: "Utkarsh Kushwaha | React Frontend Developer",
    description:
      "Looking for a web user interface developer? I am a React Frontend Developer and Web User Interface Developer with expertise in Frontend Web Development.",
    images: "https://theutkarshdev.vercel.app/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary-lighttheme dark:bg-primary-darktheme">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
