import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React from 'react';

import AsyncImage from '../AsyncImage';

export default function ProductCard (props) {
    return(
        <div className='product-list-container'>
            <Grid container spacing={4}>
                {
                    props.data.map((item, index) => {
                        return(
                            <Grid item xs={3} key={index} className="product-list-card" id={`product-item-${index}`}>
                                <Card sx={{ maxWidth: 345, height: 500 }} onClick={() => props.onClick(item)}>
                                    {/* <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.image_link}
                                        alt={`${item.title}_${item.gtin}`}
                                        className='product-image'
                                        loading="lazy"
                                    /> */}
                                    <AsyncImage src={item.image_link} alt={`${item.title}_${item.gtin}`} className='product-image' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className='product-title'>
                                        {item.title.length < 43 ? item.title : item.title.substring(0,40) + "..."}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary"className='product-gender'>
                                        {item.gender}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary"className='product-gtin'>
                                        {item.gtin}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary"className='product-sale_price'>
                                        <b>Selling Price:</b> {item.sale_price}
                                        </Typography><Typography variant="body2" color="text.secondary"className='product-price'>
                                        <b>Product Price:</b>{item.price}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}