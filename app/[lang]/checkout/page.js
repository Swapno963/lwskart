import { auth } from "@/auth";
import Checkout from "@/components/checkout/Checkout";

export default async function CheckoutArea() {
  const session = await auth();

  return (
    <>
      <div class="container py-4 flex items-center gap-3">
        <a href="../index.html" class="text-primary text-base">
          <i class="fa-solid fa-house"></i>
        </a>
        <span class="text-sm text-gray-400">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Checkout</p>
      </div>
      <Checkout session={session} />
    </>
  );
}
