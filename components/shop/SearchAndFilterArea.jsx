import { getAllCategory } from "@/database/queries";
import SingleProduct from "../SingleProduct";
import Sidebar from "./Sidebar";

export default async function SearchAndFilterArea({ searchResult }) {
  const allCategoryData = await getAllCategory();

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 bg-gray-200">
        <Sidebar allCategoryData={allCategoryData} />
      </div>
      <div className="col-span-8 bg-gray-300">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Search Reasult
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12">
          {searchResult?.map((pd) => (
            <SingleProduct product={pd} key={pd?.id} />
          ))}
        </div>

        {/* <Products /> */}
      </div>
    </div>
  );
}
