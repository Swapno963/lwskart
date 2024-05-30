"use client";

import { useRouter } from "next/navigation";

export default function AddToWishList({ product, session }) {
  const router = useRouter();

  async function handelClick() {
    console.log("clicked :", product);
    console.log("session :", session);
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(router.asPath)}`);
    } else {
      // we have user
      try {
        const res = await fetch("/api/auth/wishList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product?.id,
            userEmail: session?.user?.email,
          }),
        });
        res.status === 201 && router.push("/checkout");
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
  }
  return (
    <p
      onClick={handelClick}
      className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
    >
      Wishlist
    </p>
  );
}
