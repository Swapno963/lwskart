import { getTrendingProduct } from "@/database/queries";
import SingleProduct from "../SingleProduct";

export default async function Products() {
  const tProduct = await getTrendingProduct();
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        TRENDING PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tProduct?.map((product) => (
          <SingleProduct key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
