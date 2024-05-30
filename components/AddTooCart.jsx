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
      className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition cursor-pointer"
    >
      Add to cart
    </p>
  );
}
