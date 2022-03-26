import React from "react";

import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import AsyncImage from "../AsyncImage";
import "../css/productDetail.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductDetails (props) {
    console.log("props.product", props.product.additional_image_link)
    return(
        <div className="modal-body">
            <Modal
                    open={props.open}
                    onClose={props.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <span onClick={props.handleClose} className="close-button"> <CloseIcon sx={{fontSize: 30}} /></span>
                        <Typography gutterBottom variant="h5" component="div" className='product-title'>
                            {props.product.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" className='product-title'>
                            {props.product.gtin}
                        </Typography>
                        {
                            props.product && props.product.additional_image_link && props.product.additional_image_link.length ? props.product.additional_image_link.map((src,index) => <AsyncImage className="product-additional-image" src={src} alt={props.product && props.product.title ?  `${props.product.title}_${props.product.gtin}_${index}` : ""} loading="lazy" />) : <Typography gutterBottom variant="h4" component="div" className='product-title'>No Image to display</Typography>
                        }
                        
                    </Box>
                </Modal>
        </div>
    )
}