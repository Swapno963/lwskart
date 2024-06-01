import { getProductForCheckout, getProductForNavbar } from "@/database/queries";

export default async function NavWish_Cart({ userEmail }) {
  const cartList = await getProductForCheckout(userEmail);
  const wishList = await getProductForNavbar(userEmail);

  return (
    <>
      {/* wish list in navbar */}
      <a
        href="/wishList"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {wishList?.length}
        </div>
      </a>

      {/* cart in navbar */}
      <a
        href="/cart"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {cartList?.length}
        </div>
      </a>
    </>
  );
}
