import ProductDescription from "@/components/product/ProductDescription";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";

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
        <p class="text-gray-600 font-medium">Product</p>
      </div>

      {/*  */}

      <ProductDetail />
      <ProductDescription />
      <RelatedProducts />
    </>
  );
}
