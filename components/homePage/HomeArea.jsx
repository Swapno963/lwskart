import { getAllProduct } from "@/database/queries";
import Ads from "./Ads";
import Banner from "./Banner";
import Categories from "./Categories";
import Feature from "./Feature";
import NewArriaival from "./NewArriaival";
import Products from "./Products";

export default async function HomeArea() {
  const products = await getAllProduct();

  // console.log("All products are : ", products);

  return (
    <>
      <Banner />
      <Feature />
      <Categories />
      <NewArriaival />
      <Ads />
      <Products />
    </>
  );
}
