import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Badge, IconButton } from '@mui/material';
import { UserContext } from '../../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../../url'
import './cartIcon.css'

function cartIcon() {
    const navigate = useNavigate()
    const { cartitems, setCartitems } = useContext(UserContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        if (!user) return navigate('/')
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
            .then((res) => {
                setItems(res.data.items)
                setCartitems(res.data)
            }).catch((err) => {
                if (err.response.statusText === 'Unauthorized') {
                    localStorage.clear()
                    navigate('/')
                }
            })

    })

    useEffect(() => {
        setItems(cartitems.items)
    }, [cartitems])



    return (
        <Box>
            <IconButton className='iconButton' onClick={() => navigate('/cart')}>
                <Badge badgeContent={items && items.length}
                    sx={{
                        color: 'black',
                        "& .MuiBadge-badge": {
                            backgroundColor: "yellow"
                        }
                    }}>
                    <LocalMallOutlinedIcon className='cartIcon'
                        sx={{
                            fontSize: 30,
                            color: 'white',
                            // "&:hover": {
                            //     color: 'yellow',
                            //     cursor: "pointer"
                            // }
                        }} />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default cartIcon