import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { AuthProvider } from "@/components/session-provider"; // ✅

export const metadata: Metadata = {
  title: "MyStore",
  description: "Buy cool products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <AuthProvider> {}
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
