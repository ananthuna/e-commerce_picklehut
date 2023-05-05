import { Box } from '@mui/system'
import React from 'react'
import CartItems from '../components/Cart/CartItems'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import SubHeader from '../components/SubHeader/SubHeader'

function Cart() {
    return (
        <Box>
            <Header />
            <SubHeader />
            <CartItems />
            <Footer />
        </Box>
    )
}

export default Cart