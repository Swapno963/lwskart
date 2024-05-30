import SearchAndFilterArea from "@/components/shop/SearchAndFilterArea";
import { getSearchProduct } from "@/database/queries";

export default async function page({ params: { searchTerm } }) {
  const searchResult = await getSearchProduct(searchTerm);
  // console.log("search reasult :", searchResult);
  return (
    <>
      <div class="container py-4 flex items-center gap-3">
        <a href="../index.html" class="text-primary text-base">
          <i class="fa-solid fa-house"></i>
        </a>
        <span class="text-sm text-gray-400">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Shop</p>
      </div>
      <SearchAndFilterArea searchResult={searchResult} />

      {/* <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start"> */}
      {/* <DrawerInitAndToggle />
        <DrawerComponent /> */}
      {/* <Sidebar />
        <div>
          <Products />
        </div>
      </div> */}
    </>
  );
}
