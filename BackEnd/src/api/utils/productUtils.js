import Product from "../models/products.js"

export const findElement = async (element) => {
  console.log(element)
  const filter ={...element}
  if("name" in element ) filter.name = {$regex:element.name ,$options: 'i'}
  if("description" in element ) filter.description = {$regex:element.description ,$options: 'i'}


  return Product.find(filter);
};