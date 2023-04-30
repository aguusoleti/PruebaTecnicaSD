import Joi from "joi";

const nombre = Joi.string().min(3);
const description = Joi.string().min(10);
const image_url = Joi.string();
const price = Joi.number();
const id = Joi.string().length(24);
const brand = Joi.string();

export const idValidation = Joi.object({
  id: id.required(),
});

export const creteProduct = Joi.object({
  name: nombre.required(),
  description: description.required(),
  image_url: image_url.required(),
  price: price.required(),
  brand: brand.required(),
});
