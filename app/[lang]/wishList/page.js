import WhitelistArea from "@/components/whitelistArea/WhitelistArea";

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
        <p class="text-gray-600 font-medium">Profile</p>
      </div>
      <h2 className="text-2xl pl-12 ml-12 font-medium text-gray-800 uppercase mb-6">
        Your Wish List :
      </h2>
      <WhitelistArea />
    </>
  );
}
