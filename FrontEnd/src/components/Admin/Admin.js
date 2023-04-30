import React, { useState } from "react";
import styles from "./admin.module.css";
import { DataGrid } from "@mui/x-data-grid";
import SecondaryButtom from "../Buttom/SecondaryButtom";
import Link from "next/link";
import NewProduct from "../NewProduct/NewProduct";

const Admin = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <div className={styles.gral}>
      <div className={styles.buttom}>
        <div>
          <SecondaryButtom text="Crear" onClick={handleOpenDialog} />
        </div>
        <Link href="/">
          <SecondaryButtom text="Volver" />
        </Link>
      </div>
      <div className={styles.adminGrid}>
        <li>Imagen</li>
        <li>Nombre</li>
        <li>Descripción</li>
        <li>Precio</li>
        <li>Editar</li>
        <li>Eliminar</li>
      </div>
      {openDialog && <NewProduct handleClose={() => setOpenDialog(false)} />}
    </div>
  );
};

export default Admin;
