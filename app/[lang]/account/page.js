import { auth } from "@/auth";
import AccountArea from "@/components/account/AccountArea";

export default async function page() {
  const session = await auth();
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Account</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- account wrapper --> */}
      <div className="container  items-start gap-6 pt-4 pb-16">
        {/* <!-- info --> */}
        <AccountArea session={session} />
      </div>
    </>
  );
}
