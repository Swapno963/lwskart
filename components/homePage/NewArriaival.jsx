import { getNewArrivalProduct } from "@/database/queries";
import SingleProduct from "../SingleProduct";

export default async function NewArriaival() {
  const NewArriaival = await getNewArrivalProduct();
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {NewArriaival?.map((product) => (
          <SingleProduct key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
