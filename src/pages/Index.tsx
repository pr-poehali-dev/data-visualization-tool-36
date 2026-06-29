import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Catalog />
      <Promo />
      <Footer />
      <Cart />
    </main>
  );
};

export default Index;
