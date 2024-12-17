import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <Loading />, 
});

const Page = () => {
  return (
    <div className="md:p-2 p-2">
      <ProductCard />
    </div>
  );
};

export default Page;

