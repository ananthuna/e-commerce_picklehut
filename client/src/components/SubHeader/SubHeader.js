import { Box } from '@mui/material'
import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
// import Select from '../SelectButton/SelectButton'

function SubHeader() {

    return (
        <Box sx={{
            width: '100%',
            pt: 11.3
        }}>
            <Box sx={{
                bgcolor: 'lightgrey',
            }}>
                <HomeMenu />
            </Box>
        </Box>
    )
}

export default SubHeader