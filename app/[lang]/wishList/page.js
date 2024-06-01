import WhitelistArea from "@/components/whitelistArea/WhitelistArea";

export default function page() {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      <h2 className="text-2xl pl-12 ml-12 font-medium text-gray-800 uppercase mb-6">
        Your Wish List :
      </h2>
      <WhitelistArea />
    </>
  );
}
