import Image from "next/image";

export default function Ads() {
  return (
    <div class="container pb-16">
      <a href="#">
        <Image
          width={150}
          height={100}
          src="/offer.jpg"
          alt="Food image"
          className="w-12 h-12 object-contain"
        />
      </a>
    </div>
  );
}
