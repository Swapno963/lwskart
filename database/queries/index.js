import { categoryModel } from "@/models/category_model";
import { productModel } from "@/models/product_models";
import { userModel } from "@/models/user_models";
import { replaceMongoIdInArray } from "@/utils/data-util";

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

// find by id for detail page
export async function getProductById(productId) {
  const product = await productModel.findOne({ _id: productId }).lean();
  // return replaceMongoIdInArray(product);
  return product;
}

// find by Category for detail page
export async function getProductByCategory(categoryName) {
  const product = await productModel
    .find({ category_name: categoryName })
    .limit(4)
    .lean();
  return replaceMongoIdInArray(product);
}

// filter by title,category,description,brand
export async function getSearchProduct(searchQuery) {
  const product = await productModel
    .find({
      $or: [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { category_name: { $regex: new RegExp(searchQuery, "i") } },
        { detail: { $regex: new RegExp(searchQuery, "i") } },
        { brand: { $regex: new RegExp(searchQuery, "i") } },
      ],
    })
    .lean();
  return replaceMongoIdInArray(product);
}

export async function getUserIdByEmail(email) {
  const user = await userModel.findOne({ email: email });
  console.log("getUserIdByEmail", user);
}
