import { auth } from "@/auth";
import Image from "next/image";
import NavSearch from "./NavSearch";
import Signout from "./auth/Signout";
export default async function Navbar() {
  const session = await auth();
  // console.log("from navbar", session);

  return (
    <>
      {/* <!-- header --> */}
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <a href="/">
            <Image
              width={150}
              height={100}
              src="/logo.svg"
              alt="Food image"
              className="w-32"
            />
          </a>

          <NavSearch />

          <div className="flex items-center space-x-4">
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
                8
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
                2
              </div>
            </a>

            {session?.user ? (
              <>
                {/* account and name */}
                <a
                  href="/account"
                  className="text-center text-gray-700 hover:text-primary transition relative"
                >
                  <div className="text-2xl">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="text-xs leading-3">
                    Account | {session?.user?.name} {session?.user?.email}
                  </div>
                </a>
                <div className="text-md leading-3 font-bold text-red-600">
                  <Signout />
                </div>
              </>
            ) : (
              // <SingIn />
              ""
            )}
          </div>
        </div>
      </header>

      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group ">
            <span className="text-white">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="capitalize ml-2 text-white ">All Categories</span>

            {/* <!-- dropdown --> */}
            <div
              className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300  group-hover:visible w-[600px]"
              style={{ width: "300px" }}
            >
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={150}
                  height={100}
                  src="/icons/sofa.svg"
                  alt="Food image"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={150}
                  height={100}
                  src="/icons/terrace.svg"
                  alt="Food image"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Living Room</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={150}
                  height={100}
                  src="/icons/bed.svg"
                  alt="Food image"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={150}
                  height={100}
                  src="/icons/office.svg"
                  alt="Food image"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={150}
                  height={100}
                  src="/icons/outdoor-cafe.svg"
                  alt="Food image"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  width={150}
                  height={100}
                  src="/icons/bed-2.svg"
                  alt="Food image"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              <a href="/" className="text-gray-200 hover:text-white transition">
                Home
              </a>
              <a
                href="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                About us
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                Contact us
              </a>
            </div>
            <a
              href="/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
