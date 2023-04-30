import React, { useState } from "react";
import styles from "./admin.module.css";
import { BsTrash3Fill } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import { deleteProduct, updateProduct } from "../pages/api/hello.js";

const ProductsAdmin = ({ id, name, img, price, description }) => {
  
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedImg, setEditedImg] = useState(img);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleDelete = () => {
    console.log(id);

    deleteProduct(id)
      .then(() => {
        window.location.reload();
        onDelete(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    const editedData = {
      id,
      name: editedName,
      img: editedImg,
      price: editedPrice,
      description: editedDescription,
    };
  
    updateProduct(id, editedData)
      .then(() => {
        window.location.reload();
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className={styles.flex}>
      <li>
        <img src={img} alt={name} />
      </li>
      <li>{editing ? <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : name}</li>
      <li>{editing ? <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} /> : description}</li>
      <li>{editing ? <input type="text" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} /> : price}</li>
      <li>
        {editing ? (
          <FiSave style={{ fontSize: "30px", cursor: "pointer"}} onClick={handleSave} />
        ) : (
          <RiEditLine style={{ fontSize: "30px", cursor: "pointer" }} onClick={handleEdit} />
        )}
      </li>
      <li onClick={handleDelete}>
        <BsTrash3Fill style={{ fontSize: "30px", cursor: "pointer" }} />
      </li>
    </div>
  )
};

export default ProductsAdmin;