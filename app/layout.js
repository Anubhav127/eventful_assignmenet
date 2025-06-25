import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        
        <main className="min-h-screen">{children}</main>

        <Toaster richColors/>

        <Footer />
      </body>
    </html>
  );
}
