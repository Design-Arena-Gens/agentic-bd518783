import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-bd518783.vercel.app"),
  title: {
    default: "Einfaches Landing ? Demo",
    template: "%s | Einfaches Landing"
  },
  description: "Einfache Landing Page mit Countdown und Kontaktformular.",
  openGraph: {
    title: "Einfaches Landing ? Demo",
    description: "Einfache Landing Page mit Countdown und Kontaktformular.",
    url: "https://agentic-bd518783.vercel.app",
    siteName: "Einfaches Landing",
    locale: "de_DE",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
