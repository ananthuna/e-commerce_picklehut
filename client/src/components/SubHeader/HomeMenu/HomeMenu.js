import { Box, Typography, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function HomeMenu() {
    const [open, setOpen] = useState(false)

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
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                gap: 1
            }}
                onMouseEnter={() => setOpen(!open)}
            >
                <BusinessCenterOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.7
                }}>
                    <Typography>Home</Typography>
                    <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '1rem' }} />
                </Box>
            </Box>
            <Menu
                disableScrollLock={true}
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 115,
                    horizontal: 130,
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={e => setOpen(false)}
            >
                {home && home.map((item, index) =>
                    <MenuItem key={index} onClick={() => setOpen(!open)}>
                        <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default HomeMenu