import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./common/Header";
import SideNav from "./common/SideNav";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JABE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="h-screen w-screen overflow-hidden">
            <Header />
            <SideNav />
            <div className="max-w-[800px] w-full flex mx-auto h-full justify-center items-center">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
