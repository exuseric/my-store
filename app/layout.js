import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes';
import MainNavigation from "./components/mainNav/mainNav";

import "@radix-ui/themes/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Store",
  description: "An example store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="Ruby">
          <MainNavigation />
          {children}
        </Theme>
      </body>
    </html>
  );
}
