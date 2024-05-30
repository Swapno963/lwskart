import { auth } from "@/auth";
import ProductDescription from "@/components/product/ProductDescription";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";
import { getProductById } from "@/database/queries";

export default async function page({ params: { id } }) {
  const product = await getProductById(id);
  const session = await auth();
  // console.log("produc by id is :", product);
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

      <ProductDetail product={product} session={session} />
      <ProductDescription product={product} />
      <RelatedProducts category_name={product?.category_name} />
    </>
  );
}
