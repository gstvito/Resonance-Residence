import Navbar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import PropertyDetail from "@/components/pages/property-detail";

export default function PropertiPage() {
  return (
    <main>
      <Navbar />
      <PropertyDetail />
      <Footer />
    </main>
  );
}
