import React from 'react';
import styles from './products.module.css';
import { Box, Button, Modal, Typography } from '@mui/material';


const Products = ({ name, img, price, description}) => {

    const [showComponent, setShowComponent] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button className={styles.cards}

                onClick={() => {
                    setShowComponent(true);
                    handleOpen();
                }}>


                <img src={img} alt={img} />


                <h2>{name}</h2>
                <h3>${price}</h3>


            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <div
                        className={styles.box}
                    >
                        <div>
                            <div style={{ display: "flex", width: "800px", height: "400px" }}>
                                <img
                              
                                    src={img} alt='logo'
                                    style={{
                                        borderRadius: "40px 0px 0px 40px",
                                        width: "400px",
                                        height: "400px",
                                    }}
                                />
                                <div style={{ padding: "10px"}}>
                                    <Box style={{ width:'auto'}}>
                                        <Typography style={{ fontSize: "40px", textAlign: "center", marginTop:'20%' }}>
                                            {name}
                                        </Typography>
                                        <Typography style={{ fontSize: "20px", marginTop: "30px", textAlign:"center"}}>
                                             {description}
                                        </Typography>
                                    
                                        <Typography style={{textAlign:"center", marginTop:'5vh'}}>${price}</Typography>
                                    </Box>
                   

                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Products;
