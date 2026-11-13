import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import { cn } from "@/lib/utils";

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Mufty Arifin — Front-End Developer",
  description:
    "Portfolio website showcasing my projects, skills, and journey as a Front-End Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground transition-colors duration-300 antialiased",
          fira_Code.className,
        )}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
