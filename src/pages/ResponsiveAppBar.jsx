import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import { ClickAwayListener, Grow, MenuList, Paper, Popper } from '@mui/material';

function ResponsiveAppBar() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return <>
        <Box sx={{ display: "flex", marginTop: 3, }}>


            <Box sx={{ marginLeft: "5%" }}>

                <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/logo.svg" alt="" />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, marginX: "18%", }}>

                <Typography sx={{ fontSize: '20px', marginTop: 1 }}>Home</Typography>
                <Typography sx={{ fontSize: '20px', marginTop: 1 }}>About</Typography>
                <Typography sx={{ fontSize: '20px', marginTop: 1 }}>Services</Typography>

                <Typography sx={{ fontSize: '20px', marginTop: 1 }}>Contact</Typography>


                <Box>
                    <Button
                        sx={{ fontSize: '20px', marginLeftL: 4 }}
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <Typography sx={{ fontSize: '20px', color: "black", marginTop: -0.0 }}>Pricing</Typography>
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Box>




            </Box>
            {/* Button */}
            <Button
                variant="outlined"
                sx={{

                    height: '60px',
                    width: '230px',
                    fontSize: 15,
                    paddingLeft: 5,
                    alignItems: 'center',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #2196F3, #673AB7)',
                    color: 'white',
                    transition: '0.2s',
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: 'space-between',  // Added this line
                    // '&:hover': {
                    //     background: 'linear-gradient(45deg, #c5757d, #4CAF50)',
                    //     height: 60,
                    //     width: '220px',
                    //     borderRadius: 10,
                    // },
                }}
            >
                Downlod CV
                <Box sx={{ display: "flex", paddingRight: 5 }}>
                    <ArrowForwardIcon />
                </Box>
            </Button>
        </Box >



    </>
}



export default ResponsiveAppBar;