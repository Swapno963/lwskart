"use client";

import { useRouter } from "next/navigation";

export default function AddTooCart({ product, session }) {
  const router = useRouter();

  async function handelClick() {
    console.log("clicked :", product);
    console.log("session :", session);
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(router.asPath)}`);
    } else {
      // we have user
      try {
        const res = await fetch("/api/auth/cart", {
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
      className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
    >
      Add to cart
    </p>
  );
}
