import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  imgSrc: {
    type: String,
    require: true,
  },
  fileKey: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
