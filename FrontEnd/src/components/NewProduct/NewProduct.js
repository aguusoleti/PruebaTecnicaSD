import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from './newProduict.module.css'
import { createProduct } from '../../pages/api/hello.js';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',

};

const NewProduct = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCreateProduct = () => {
    const data = {
      name,
      description,
      image_url,
      price: parseFloat(price),
      brand: "644d39485028aebed81f4ee5",
    };

    createProduct(data)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.contenedor}>
          <div className={styles.espacios}>
            <h3>
              Nombre del producto
            </h3>
            <TextField
              label="Nombre del producto"
              value={name}
              onChange={handleNameChange}
              sx={{ width: '425px' }}
            />
          </div>


          <div className={styles.espacios}>
            <h3>
              Precio
            </h3>
            <TextField
              label="Precio"
              value={price}
              onChange={handlePriceChange}
              sx={{ width: '425px' }}
            />
          </div>
          <div className={styles.espacios}>
            <h3>Descripción</h3>

            <TextField
              label="Descripción"
              value={description}
              onChange={handleDescriptionChange}
              sx={{ width: '425px'}}
            />
          </div>



          <div className={styles.espacios}>
            <h3>URL de imagen</h3>
            <TextField
              label="Imagen"
              value={image_url}
              onChange={handleImageUrlChange}
              sx={{ width: '425px' }}
            />
          </div>

          <div className={styles.espacios}>

            <Button variant="contained" onClick={handleCreateProduct} sx={{ width: '425px' }}>Crear</Button>

            <Button sx={{ width: '425px' }} onClick={handleClose}>Volver</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewProduct;
