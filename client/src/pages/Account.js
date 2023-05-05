import { Box } from '@mui/system'
import React from 'react'
import Profile from '../components/Profile/Profile'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import SubHeader from '../components/SubHeader/SubHeader'


function Account() {
    return (
        <Box>
            <Header />
            <SubHeader />
            <Profile />
            <Footer />
        </Box>
    )
}

export default Account
