import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollDumbbell } from "@/components/ScrollDumbbell";
import { IntroPreloader } from "@/components/IntroPreloader";

export const metadata: Metadata = {
  title: "HRFitness — Strength, CrossFit & Yoga Gym in Pune",
  description: "Expert coaching. Real results. A community that pushes you further than you thought you could go. Founded by Hrishi Raut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased font-sans"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
          <ScrollDumbbell />
          <IntroPreloader />
        </ThemeProvider>
      </body>
    </html>
  );
}
