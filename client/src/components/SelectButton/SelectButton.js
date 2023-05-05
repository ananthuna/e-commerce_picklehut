import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';


const CssSelect = styled(Select)({
    '.MuiOutlinedInput-notchedOutline': { border: 0 }
});


export default function BasicSelect({ categorys }) {
    const [option, setOption] = React.useState(1);

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    return (
        <Box sx={{
            width: '10rem',
            height: '3rem',
            ml: 1,
            mt: -1
        }}>
            {/* <FormControl fullWidth> */}
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <CssSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{
                    disableScrollLock: true,
                }}
                value={option}
                //   label="A"
                onChange={handleChange}
                sx={{ width: '10rem' }}
            // sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            >
                {categorys && categorys.map((item, index) =>
                    <MenuItem value={index + 1}>{item}</MenuItem>)}
                {/* <MenuItem value={2}>Camera</MenuItem>
                <MenuItem value={3}>Electrinics</MenuItem>
                <MenuItem value={4}> computer & laptop</MenuItem>
                <MenuItem value={5}>Mobile && Tablet</MenuItem>
                <MenuItem value={6}>Smart watch</MenuItem>
                <MenuItem value={7}>Air pode</MenuItem>
                <MenuItem value={8}>headphone</MenuItem>
                <MenuItem value={9}>Speakers</MenuItem>
                <MenuItem value={10}>Home theater</MenuItem> */}
            </CssSelect>
            {/* </FormControl> */}
        </Box>
    );
}