import "./globals.css";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="site-bg text-gray-900">
        {/* Only one SmoothScroll wrapper for the whole page */}
          {/* <Navbar /> */}
          {children}
          <Footer />
          <FloatingContactButtons />
      </body>
    </html>
  );
}
