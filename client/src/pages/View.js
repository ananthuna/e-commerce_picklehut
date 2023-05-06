import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import ViewProduct from '../components/View/view'
// import SubHeader from '../components/SubHeader/SubHeader'


function View() {


    return (
        <Box>
            <Header />
            {/* <SubHeader /> */}
            <ViewProduct />
            <Footer />
        </Box>
    )
}

export default View