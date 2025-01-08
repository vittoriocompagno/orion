import type { Metadata, Viewport } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import { AuthProvider } from "./AuthProvider";
import "./globals.css";

// Define fonts outside component to avoid re-initialization
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap', // Add display swap for better performance
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Separate metadata configuration
export const metadata: Metadata = {
  title: "Orion - Gestione Recensioni",
  description: "Aggrega, analizza e rispondi alle tue recensioni Google in modo automatico.",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <AuthProvider>
      <html lang="it" suppressHydrationWarning>
        <body 
          className={`${spaceMono.variable} ${dmSans.variable} antialiased min-h-screen`}
        >
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
