import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Utkarsh Kushwaha | Professional UI/UX Developer - Hire Now!",
  description:
    "Looking for a web user interface developer? I am a professional UI/UX Developer and Web User Interface Developer with expertise in Frontend Web Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
