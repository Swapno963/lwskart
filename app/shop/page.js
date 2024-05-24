import DrawerComponent from "@/components/shop/DrawerComponent";
import DrawerInitAndToggle from "@/components/shop/DrawerInitAndToggle";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";

export default function page() {
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

      <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <DrawerInitAndToggle />
        <DrawerComponent />
        <Sidebar />
        <Products />
      </div>
    </>
  );
}
