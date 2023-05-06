import { Box } from '@mui/material'
import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
// import Select from '../SelectButton/SelectButton'

const home = [
    'Home',
    'Best Offers',
    'up-coming offers',
    'new products',
    'best sell',
    'Mobiles',
    'laptops',
    'smart watches'
]
const laptop = [
    'Dell laptops',
    'hp laptops',
    'lenova laptops',
    'thin & light laptops',
    '2-in-1 laptops',
    'Gaming laptops',
    'Budget laptops'
]

const headphones = [
    'boat',
    'sony',
    'skull candy',
    'samsung',
    'jabra',
    'Audio Technica',
    'Generic',
    'Panasonic',
    'Apple',
    'iClever',
    'Yinyoo',
    'REEPUT',
    'ShopMagic'
]

const watches = [
    'Noise',
    'boAt',
    'Realme',
    'Samsung',
    'Apple',
    'Honor',
    'TAGG',
    'Redmi',
    'AJO',
    'Melbon'
]
function SubHeader() {

    return (
        <Box sx={{
            width: '100%',
            mt: 11.3,
            position: 'fixed',
            zIndex: '1000',
            bgcolor: 'white'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '3rem',
                gap: 4,
                ml: '6rem'
            }}>
                <HomeMenu prop={home} type={'Home'} />
                <HomeMenu prop={laptop} type={'Laptops'} />
                <HomeMenu prop={headphones} type={'headphones'} />
                <HomeMenu prop={watches} type={'Smart watches'} />
            </Box>
        </Box>
    )
}

export default SubHeader