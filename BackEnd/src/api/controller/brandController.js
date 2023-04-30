import Brand from "../models/brands.js";


const createBrand = async (req, res) => {
    try {
      const brand = new Brand(req.body);
      const brandSave = await brand.save();
      res.json(brandSave);
    } catch (error) {
      console.log(error);
    }
  };

  export {createBrand}