import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
