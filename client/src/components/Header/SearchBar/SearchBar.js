import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import IconButton from "@mui/material/IconButton";
import styled from '@emotion/styled';
import InputAdornment from '@mui/material/InputAdornment';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { ClickAwayListener } from '@mui/base';
// import Menu from '@mui/material/Menu';
import SelectButton from '../../SelectButton/SelectButton'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '&::placeholder': {
    fontStyle: 'italic',
    color: 'green'
  },
  "& .MuiInputBase-root": {
    // color: 'b'
  }
});


function SearchBar() {

  const [searchInput, setSearchInput] = useState("");
  // const [list, setList] = useState([])
  // const [open, setOpen] = useState(false)

  const categorys = [
    'All Collections',
    'Mobiles & Tablets',
    'laptops & computers',
    'Smart watches',
    'Electronics',
    'Camera',
    'Headphones',
    'Speakers',
    'Home Theaters'
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // const text = e.target.value
    // const index = text.length
    // setList([...countries.filter(e => e.name.slice(0, index) === text)])
    // console.log(countries.filter(e => e.name.slice(0, index) === text));
    // if (list.length > 0) {
    // setOpen(true)
    // }
    // if (list.length === 0) setOpen(false)
    // console.log(countries.filter((item) => item.name.toLocaleLowerCase() === searchInput.toLocaleLowerCase()));
  };




  return (
    <Box sx={{
      width: '100%',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      pt: 0.4
    }}>
      <Box sx={{
        borderRight: 1,
        borderColor: 'grey.500',
        height: '2.5rem'
      }}>
        <SelectButton categorys={categorys} />
      </Box>
      <Box>
        <form>
          <CssTextField
            id="search-bar"
            className="text"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              )
            }}
            placeholder="Search our product..."
            size="small"
            onChange={handleChange}
            value={searchInput}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: 'black',
              ml: 1,
              mr: 1,
              '&:hover': {
                backgroundColor: 'black',
              }
            }} startIcon={< SearchIcon />}>
            search
          </Button>
        </form>
      </Box>
    </Box>
  )
}
export default SearchBar