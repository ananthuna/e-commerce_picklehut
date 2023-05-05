import * as React from 'react';
import Logo from './logo/logo';
import Cart from './cartIcon/cartIcon';
import Account from './accountIcon/accountIcon';
import SearchBar from './SearchBar/SearchBar'
import './header.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Adminicon from './adminicon/AdminIcon';
import { UserContext } from '../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../url';
import HeadsetIcon from '@mui/icons-material/Headset';


export default function PrimarySearchAppBar() {
    const { user, setUser } = React.useContext(UserContext)
    const navigate = useNavigate()
    // const [open, setOpen] = React.useState(false)

    const loginData = {
        email: 'kashi@gmail.com',
        password: 'Kashi@123',
        token: ''
    }
    const Data = JSON.stringify(loginData);
    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    React.useEffect(() => {
        let User = JSON.parse(localStorage.getItem("user"))
        setUser(User)

        if (!User) {
            axios.post(`${baseUrl}/api/user/login`, Data, customConfig).then((response) => {
                if (!response.data.err) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                } else {
                    console.log('header login err');
                    console.log(response.data.err);
                }
            })
        }

    }, [])

    // const handleScroll = () => {
    //     console.log('position');
    //     console.log(window.pageYOffset);
    //     if (window.pageYOffset > 499) {
    //         setOpen(true)
    //     } else {
    //         setOpen(false)
    //     }
    // }

    // React.useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);





    return (
        <Box className='header'
            sx={{
                backgroundColor: "#1c2a5e",
            }}
        >
            <Box sx={{
                position: 'relative',
                width: '12rem',
                height: '4rem',
                display: { xs: 'none', sm: 'block' }
            }}>
                <Logo />
            </Box>
            <Box sx={{
                bgcolor: 'white',
                borderRadius: 1
            }}>
                <SearchBar />
            </Box>
            <Box sx={{
                display: 'flex',
                gap: 4
            }}>
                <Box sx={{
                    color: 'white',
                    display: 'flex',
                    "&:hover": {
                        cursor: "pointer",
                    }
                }}>
                    <HeadsetIcon sx={{
                        fontSize: 50
                    }} />
                    <Box >
                        <Typography sx={{
                            "&:hover": {
                                color: 'yellow',
                            }
                        }}>(+91)7012031852</Typography>
                        <Typography>Call us now</Typography>
                    </Box>
                </Box>
                {user ? (
                    <Box className='right-items'>
                        {user.isAdmin ? (
                            <Box>
                                <IconButton>
                                    <Adminicon />
                                </IconButton>
                            </Box>
                        ) : (
                            <Box sx={{
                                display: 'flex',
                                gap: '10px'
                            }}>
                                {/* <IconButton> */}
                                <Cart />
                                {/* </IconButton> */}
                                {/* <IconButton> */}
                                <Account />
                                {/* </IconButton> */}
                            </Box>
                        )}
                    </Box>

                ) : (
                    <Box className='right-items'>
                        <Typography className='selection' onClick={() => navigate('/login')}>Login</Typography>
                        <Typography color='white' >/</Typography>
                        <Typography className='selection' color='white' onClick={() => navigate('/signup')}>Signup</Typography>
                    </Box>
                )
                }
            </Box >
        </Box >
    );
}

