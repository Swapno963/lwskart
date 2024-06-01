import Image from "next/image";

export default function WhitelistArea() {
  return (
    <>
      <div class="container gap-6 pt-4 pb-16">
        <div class="mx-auto space-y-4 max-w-6xl">
          <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div class="w-28">
              <Image
                width={150}
                height={100}
                src="/products/product6.jpg"
                alt="Food image"
                className="w-full"
              />
            </div>
            <div class="w-1/3">
              <h2 class="text-gray-800 text-xl font-medium uppercase">
                Italian L shape
              </h2>
              <p class="text-gray-500 text-sm">
                Availability: <span class="text-green-600">In Stock</span>
              </p>
            </div>
            <div class="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div class="text-gray-600 cursor-pointer hover:text-primary">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
