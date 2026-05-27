import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerXel - Hire smarter. Grow faster.",
  description: "AI-native career and recruitment platform for candidates, employers, and colleges."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
