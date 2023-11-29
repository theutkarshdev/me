import React from "react";
import Providers from "./components/theme/providers";
import Header from "./components/Header";
import "./styles/globals.css";
import metaImg from "../../public/opengraph-image.jpg";

export const metadata = {
  metadataBase: new URL("https://theutkarshdev.vercel.app"),
  title: "Utkarsh Kushwaha | Professional UI/UX Developer - Hire Now!",
  description:
    "Looking for a web user interface developer? I am a professional UI/UX Developer and Web User Interface Developer with expertise in Frontend Web Development.",
  openGraph: {
    title: "Utkarsh Kushwaha | Professional UI/UX Developer - Hire Now!",
    description:
      "Looking for a web user interface developer? I am a professional UI/UX Developer and Web User Interface Developer with expertise in Frontend Web Development.",
    image: metaImg,
  },
  twitter: {
    card: "summary_large_image",
    site: "https://theutkarshdev.vercel.app",
    title: "Utkarsh Kushwaha | Professional UI/UX Developer - Hire Now!",
    description:
      "Looking for a web user interface developer? I am a professional UI/UX Developer and Web User Interface Developer with expertise in Frontend Web Development.",
    image: metaImg,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary-lighttheme dark:bg-primary-darktheme">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
