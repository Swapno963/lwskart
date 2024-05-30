import HomeArea from "@/components/homePage/HomeArea";
import { getDictionary } from "./disctionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      {dictionary?.ReleaseDate}
      <HomeArea />
    </>
  );
}
