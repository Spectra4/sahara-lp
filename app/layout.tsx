import "./globals.css";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import LeadPopupController from "@/components/LeadPopupController";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-bg text-gray-900">
        {children}

        <Footer />
        <FloatingContactButtons />

        {/* ⏱ Lead Popup – shows once after 25s */}
        <LeadPopupController />
      </body>
    </html>
  );
}
