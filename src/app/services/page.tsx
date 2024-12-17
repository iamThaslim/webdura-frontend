import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <Loading />, 
});

const ServicesPage = () => {
  return (
    <div className="md:p-[5vw] p-[3vw]">
      <ProductCard />
    </div>
  );
};

export default ServicesPage;

