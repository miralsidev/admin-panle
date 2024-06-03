
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import TextField from '@mui/material/TextField'; // Make sure to import TextField correctly

function NavBar() {
    return (
        <>
            <div className='' style={{ position: 'sticky', top: 0, zIndex: 2 ,boxShadow:"0 4px 8px 0 rgba(109, 74, 85, 0.2), 0 4px 8px 0 rgba(109, 74, 85, 0.2)"}}>
                <Navbar className='m-3 rounded-3'>
                    <Container>
                        <Navbar.Brand href="#home" >
                            Deshbord
                        </Navbar.Brand>
                  
                        <TextField 
                            label="Search"
                            InputLabelProps={{
                                style: { color: '#6D4A55' },
                            }}
                            size="small" 
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 1,
                                border: 'none',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                       
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#6D4A55',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6D4A55',
                                    },
                                },
                            }}
                        />
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NavBar;

