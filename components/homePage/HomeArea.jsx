import Ads from "./Ads";
import Banner from "./Banner";
import Categories from "./Categories";
import Feature from "./Feature";
import NewArriaival from "./NewArriaival";
import Products from "./Products";

export default function HomeArea() {
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
