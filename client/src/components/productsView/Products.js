import { Button, Grid, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './product.css'
import { baseUrl } from '../../url'
import axios from 'axios'




function Products({ tab, items }) {
    const navigate = useNavigate()
    const { setDetails } = useContext(UserContext)
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        if (!user) return navigate('/')
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/wishlist/list`, customConfig)
            .then((res) => {
                setWishlist(res.data.items)
            }).catch((err) => {
                navigate('/')
            })
    }, [])


    const handleView = (item) => () => {
        if (item) setDetails(item)
        navigate('/view')
    }

    const handleIcon = (id) => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const Data = {
            itemId: id
        }
        axios.post(`${baseUrl}/api/wishlist/list`, Data, customConfig)
            .then((res) => {
                setWishlist(res.data.items)
                // console.log(res.data.items);
            }).catch((err) => {
                // console.log(err);
                navigate('/')
            })
    }

    const handleCart = (product) => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        // console.log(user.token);
        let data = {
            itemId: product._id,
            quantity: 1,
            price: product.price - (product.price * product.offer) / 100
        }
        const Data = JSON.stringify(data)


        axios.post(`${baseUrl}/api/cart/cartitems`, Data, customConfig)
            .then((res) => {
                // console.log(res.data)
                // navigate('/')
            })
    }



    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#415e6b' }}>
            <Grid container spacing={0} sx={{ bgcolor: '#F6F3F3' }}>
                {items.map((item, index) =>
                    <Grid item xs={6} sm={3} md={2} key={item._id} >
                        <Box key={item._id} sx={{ ml: -1, width: '100%', position: 'relative' }}>
                            <Box >
                                {wishlist && wishlist.map((wish, index) =>
                                    wish.itemId === item._id &&

                                    <FavoriteIcon key={index} onClick={() => handleIcon(item._id)} className='like_btn1' style={{ color: "#d0012e" }} />
                                )}

                                <FavoriteIcon onClick={() => handleIcon(item._id)} className='like_btn2' />
                            </Box>
                            <Box className='box' sx={{
                                width: '15rem',
                                height: '17rem',
                                position: 'relative',
                                mt: '0.5rem',
                                pt: '1rem',
                                mb: '5rem',
                                // pl: '1rem',
                                // pr: '1.7rem',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: '#F6F3F3',
                                // gap:-5
                            }} >
                                <Box className='boxitems' sx={{
                                    bgcolor: 'white',
                                    width: '14rem',
                                    border: 1,
                                    borderColor: 'lightgrey',
                                    '&:hover': {
                                        color: 'blue',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // gap:-10
                                }} >
                                    <Box sx={{
                                        width: '15rem',
                                        height: '12rem',
                                        position: 'absolute'
                                    }}
                                        onClick={handleView(item)}
                                    >
                                        <img alt='img' src={baseUrl + '/' + item.url} width='82%' height='100%'></img>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: '1rem',
                                        gap: 0.5,
                                        // position: 'relative',
                                        pt: '11rem'
                                    }}
                                        onClick={handleView(item)}
                                    >
                                        <Typography className='boxZoom' sx={{
                                            fontSize: '1rem',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            color: 'lightgrey'

                                        }}>
                                            brant
                                        </Typography>
                                        <Typography className='boxZoom' sx={{
                                            fontSize: '1rem',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

                                        }}>
                                            {item.name}
                                        </Typography>
                                        <Rating name="read-only" value={3} size='small' readOnly />
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 1
                                        }}>
                                            <Typography color='#d0012e' ><b>Rs.{item.price - (item.price * item.offer) / 100}</b></Typography>
                                            <Typography color='black'>{'-' + item.offer + '%'}</Typography>
                                            <Typography color='lightgrey'><s>{'Rs.'+item.price}</s></Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        mt: -1.5,
                                        pl: 2.3,
                                        mb: 1
                                    }}>
                                        <button className='add_to_cart_button'
                                            onClick={() => handleCart(item)}
                                        >+ ADD TO CART</button>
                                    </Box>
                                </Box>
                            </Box>
                            {/* <Box sx={{
                                mt:-3,
                                zIndex:100
                            }}>
                                <Button
                                    variant="outlined"
                                    size='small'
                                    onClick={() => handleCart(item)}
                                >+ add to cart</Button>
                            </Box> */}
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box >
    )
}

export default Products