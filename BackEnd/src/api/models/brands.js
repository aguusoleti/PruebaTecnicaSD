
import mongoose from "mongoose";

export const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_url: [{ type: String }],
});

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
