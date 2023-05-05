import React from 'react'
import Header from '../components/Header/header'
import Banner from '../components/Banner/banner'
import Footer from '../components/Footer/footer'
import Products from '../components/Products/Products'
import { Box } from '@mui/material'
import SubHeader from '../components/SubHeader/SubHeader'

function Home() {


  return (
    <Box>
      <Header />
      <SubHeader />
      <Banner />
      <Products />
      <Footer />
    </Box>
  )
}

export default Home
