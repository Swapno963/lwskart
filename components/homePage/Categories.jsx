import { getAllCategory } from "@/database/queries";
import Image from "next/image";

export default async function Categories() {
  const allCategoryData = await getAllCategory();
  // console.log("from all category", allCategoryData);
  return (
    <div class="container py-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div class="grid grid-cols-3 gap-3">
        {allCategoryData?.map((category) => (
          <div class="relative rounded-sm overflow-hidden group">
            {/* <img
              src="category/category-1.jpg"
              alt="category 1"
              class="w-full"
            /> */}
            <Image
              width={150}
              height={100}
              src={category?.img_url}
              alt="Food image"
              className="w-full h-full rounded-lg object-contain"
            />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {category?.category_name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
