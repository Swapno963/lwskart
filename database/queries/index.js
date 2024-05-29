import { categoryModel } from "@/models/category_model";
import { productModel } from "@/models/product_models";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllHotels() {
  const hotels = await hotelModel.find().lean();

  return replaceMongoIdInArray(hotels);
}

// geting all data from category db model
export async function getAllCategory() {
  const allCategory = await categoryModel.find().lean();
  return replaceMongoIdInArray(allCategory);
}
// geting all products from db model
export async function getAllProduct() {
  const allProduct = await productModel.find().lean();
  return replaceMongoIdInArray(allProduct);
}

// get trending product
export async function getNewArrivalProduct() {
  const product = await productModel
    .find()
    .sort({ arrival_date: -1 })
    .limit(4)
    .lean();
  return replaceMongoIdInArray(product);
}
// get trending product
export async function getTrendingProduct() {
  const product = await productModel.find().sort({ price: 1 }).limit(4).lean();
  return replaceMongoIdInArray(product);
}
