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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
