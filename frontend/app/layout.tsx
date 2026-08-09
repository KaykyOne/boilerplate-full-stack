import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//* Provider Imports
import QueryProvider from "@/providers/query-provider";

//* Libraries Imports
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALTERE ISSO PELO TITULO DO PROJETO",
  description: "ALTERE ISSO PELA DESCRIÇÃO DO PROJETO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster richColors position="top-right" />
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
