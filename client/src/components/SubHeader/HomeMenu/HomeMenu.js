import { Box, Typography, MenuItem } from '@mui/material'
import React from 'react'
// import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './HomeMenu.css'

function HomeMenu({ prop, type }) {
    // const [open, setOpen] = useState(false)


    return (
        <Box sx={{
            position: 'relative'
        }}
            className='dropdown dropdown-6'
        >
            <Box sx={{
                display: 'flex',
                gap: 1
            }}
            >
                <Box

                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.7
                    }}>
                    <Typography>{type}</Typography>
                    <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '1rem' }} />
                </Box>
            </Box>
            <Box sx={{bgcolor:'white'}} className='dropdown_menu dropdown_menu--animated dropdown_menu-6'>
                {prop && prop.map((item, index) =>
                    <MenuItem key={index} >
                        <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                )}
            </Box>
        </Box>
    )
}

export default HomeMenu