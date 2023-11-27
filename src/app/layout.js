import { Inter } from "next/font/google";
import "./styles/globals.css";
import Providers from "./components/theme/providers";
import ThemeSwitcher from "./components/theme/ThemeSwitcher";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Utkarsh Kushwaha | Professional UI/UX Developer - Hire Now!",
  description:
    "Looking for a web user interface developer? I am a professional UI/UX Developer and Web User Interface Developer with expertise in Frontend Web Development.",
  openGraph: {
    images: "http://utkarsh.online/img/meta_image.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
