import { Box, Rating, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { UserContext } from '../../Context/Context'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from 'axios';
import { baseUrl } from '../../url'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DoneIcon from '@mui/icons-material/Done';
import SelectButton from '../SelectButton/SelectButton'
import './view.css'
// import QuantityBtn from './QuantityButton/QuantityBtn';
import QuantityBtn from './QuantityButton/QuantityBtn'



function view() {
    const navigate = useNavigate()
    const { details } = useContext(UserContext)
    const [product, setProduct] = useState({})

    const colors = [
        'Red',
        'White',
        'Gold',
        'Yellow'
    ]

    useEffect(() => {

        console.log(details)
        if (details) localStorage.setItem("myObject", JSON.stringify(details));

        let item = localStorage.getItem("myObject");
        setProduct(JSON.parse(item))
        console.log('views');
        console.log(details);
    }, [])





    const handleCart = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        console.log(user.token);
        let data = {
            itemId: product._id,
            quantity: 1,
            price: product.price - (product.price * product.offer) / 100
        }
        const Data = JSON.stringify(data)


        axios.post(`${baseUrl}/api/cart/cartitems`, Data, customConfig)
            .then((res) => {
                console.log(res.data)
                navigate('/')
            })
    }
    const handleOrder = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        console.log(user.token);
        let data = {
            itemId: product._id,
            quantity: 1,
            price: product.price - (product.price * product.offer) / 100
        }
        const Data = JSON.stringify(data)
        axios.post(`${baseUrl}/api/cart/cartitems`, Data, customConfig)
            .then((res) => {
                console.log(res.data)
                navigate('/cart')
            })
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: '5.6rem'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: '#f7f7f7',
                p: 2

            }}>
                <Typography><b>Vivo iQOO 7 Legend - 4000 mAh Lithium-Polymer</b></Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    pr: 3
                }}>
                    <HomeOutlinedIcon sx={{ fontSize: 18 }} />
                    <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: 13 }}>Mobile</Typography>
                </Box>
            </Box>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                mt: '2rem',
                mb: '1rem',
                ml: '2rem'
            }}>
                <Box sx={{
                    width: '40%',
                    height: '87%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 7
                }}>

                    <Box sx={{
                        width: '30rem',
                        height: '30rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 1,
                        borderRadius: 2,
                        borderColor: 'lightgrey'
                    }}>
                        <img src={baseUrl + '/' + product.url} alt='img' width={350} height={300}></img>
                    </Box>
                </Box>
                <Box sx={{
                    width: '43%',
                    height: '87%',
                    p: 1
                }}>
                    <Typography
                        sx={{
                            pl: '0rem',
                            fontSize: '1.4rem',
                            maxWidth: '22rem'
                        }}><b>Vivo iQOO 7 Legend - 4000 mAh Lithium-Polymer</b></Typography>
                    <hr />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: 1
                    }}>
                        <FiberManualRecordIcon sx={{
                            fontSize: '0.5rem',
                            mt: 0.8
                            // color: 'lightgrey'
                        }} />
                        <Typography sx={{
                            fontSize: '0.8rem',
                            color: 'grey',
                            maxWidth: '35rem'
                        }}>16.82cm (6.62) 120Hz AMOLED Display with 1300 peak brightness along with 300Hz Touch Sampling Rate</Typography>
                    </Box>
                    <hr />
                    <Rating name="read-only" value={3} size='small' readOnly />
                    <hr />
                    <Box>
                        <Typography sx={{ color: '#ff0000' }}><b>Save -{product.offer + '%'}</b></Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                            // justifyContent: 'center'
                        }}>
                            <Typography sx={{ fontSize: '1.5rem', color: '#d62148' }} ><b>Rs.{product.price - (product.price * product.offer) / 100}</b></Typography>
                            <Typography color='lightgrey'><s>{'Rs.' + product.price}</s></Typography>
                        </Box>
                    </Box>
                    <hr />
                    <Box sx={{
                        display: 'flex',
                        gap: 4
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: '1rem' }} ><b><DoneIcon sx={{ fontSize: 20 }} /> Brant :</b></Typography>
                            <Typography sx={{ fontSize: '1rem' }}><b><DoneIcon sx={{ fontSize: 20 }} /> Movement :</b></Typography>
                            <Typography ><b><DoneIcon sx={{ fontSize: 20 }} /> Availability :</b></Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 15, color: '#8b8b8b' }}>vivo</Typography>
                            <Typography sx={{ fontSize: 15, color: '#8b8b8b' }}>Mobile</Typography>
                            <Typography sx={{ fontSize: 15, color: '#34dd8d' }}><b>20 In stock</b></Typography>
                        </Box>
                    </Box>
                    <hr />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: '0.9rem' }}><b>Color</b></Typography>
                            <Box sx={{
                                bgcolor: '#f5f5f5',
                                width: '10rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                                // height: '2rem'
                            }}>
                                <SelectButton categorys={colors} />
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '0.9rem' }}><b>Quantity</b></Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 1,
                                width: '100%',
                                // mt: 1
                            }}>
                                <QuantityBtn item={product} />
                                <Button onClick={handleCart} variant="contained"
                                    sx={{
                                        boxShadow: 0,
                                        borderRadius: 0,
                                        bgcolor: '#fdd700',
                                        "&:hover": {
                                            backgroundColor: "#1c2a5e",
                                            boxShadow: 0,
                                        },
                                        height: '2.5rem',
                                        mt: 2
                                    }} startIcon={<ShoppingCartIcon />}>ADD TO CART</Button>
                                <Button onClick={handleOrder} variant="contained"
                                    sx={{
                                        boxShadow: 0,
                                        borderRadius: 0,
                                        bgcolor: '#1c2a5e',
                                        "&:hover": { backgroundColor: "#fdd700", boxShadow: 0 },
                                        height: '2.5rem',
                                        mt: 2
                                    }} startIcon={<LocalMallIcon />}>BUY NOW</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        mt: 1
                    }}>
                        <Typography sx={{
                            color: '#ff274e'
                        }}><b>HURRY! ONLY 20 LEFT IN STOCK.</b></Typography>
                    </Box>
                    <hr />
                    {/* {product && <Box sx={{
                        pt: '1rem',
                        // pl: '2rem'
                    }}>
                        <Typography sx={{ fontSize: '1.5rem', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{product.name}</Typography>
                        <Typography>{product.description}</Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: 1
                        }}>
                            <Typography sx={{ fontSize: '1.5rem' }} ><b>₹{product.price - (product.price * product.offer) / 100}</b></Typography>
                            <Typography color='lightgrey'><s>{product.price}</s></Typography>
                            <Typography color='green'>{product.offer + '% OFF'}</Typography>
                        </Box>
                        <Typography>{product.weight}g</Typography>
                    </Box>} */}

                </Box>
            </Box>
        </Box >
    )
}

export default view