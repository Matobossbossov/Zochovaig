import type { Metadata } from "next";
import "./globals.css";
import NavBar from '@/components/NavBar'; // Import the NavBar component
import Head from "next/head"; // Head component for meta tags

export const metadata: Metadata = {
  title: "SnapZoska", // Title for the webpage
  description: "Generated by students of SPSE Zochova 9, Bratislava", // Description for the webpage
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar /> {/* Moved Navbar outside of the main container */}
        </AuthProvider>
      </body>
    </html>
  );
}
