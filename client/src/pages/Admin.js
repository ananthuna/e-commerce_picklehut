import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Adminpage from '../components/Adminpage/Adminpage'
import { Box } from '@mui/material'
import SubHeader from '../components/SubHeader/SubHeader'

function Admin() {
    return (
        <Box>
            <Header />
            <SubHeader />
            <Adminpage />
            <Footer />
        </Box>
    )
}

export default Admin
