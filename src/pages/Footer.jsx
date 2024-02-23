import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Divider, IconButton, Typography } from '@mui/material';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return <>

        <Box sx={{ flexGrow: 1, backgroundColor: "black", marginTop: 5, minHeight: '600px', height: '100%', }}>
            <Grid container spacing={2}>

                <Grid xs={4}>
                    <Typography sx={{ color: "white", marginLeft: 18, marginTop: 5, fontWeight: "bold" }}><h3>Let's Talk!</h3></Typography>
                    <Typography sx={{ color: "white", marginLeft: 18, marginTop: 5 }}>Conteact Us</Typography>
                    <Typography sx={{ color: "white", marginLeft: 18, marginTop: 1 }}>closerpage@email.com
                        <br></br>
                        12 Hilton St, Manchester M1 1JF
                        <br></br>
                        +44 012 34 5678</Typography>
                </Grid>
                <Grid xs={8} sx={{ justifyContent: "center", alignContent: "center", display: "flex", gap: 30, }}>
                    <Box>
                        <Typography sx={{ color: "white", marginTop: 5, fontWeight: "bold" }}><h3>What I Do?</h3></Typography>
                        <Typography sx={{ color: "white", marginTop: 5 }}>The Studio</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Sponsoring</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>New Studio</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Contact me</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: "white", marginTop: 5 }}><h3>News</h3></Typography>
                        <Typography sx={{ color: "white", marginTop: 5 }}>The Studio</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Sponsoring</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>New Studio</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Contact me</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: "white", marginTop: 5 }}><h3>Quick Links</h3></Typography>
                        <Typography sx={{ color: "white", marginTop: 5 }}>The Studio</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Sponsoring</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>New Studio</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Contact me</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ height: 2, width: '95%', margin: '30px auto', backgroundColor: '#a7a7a7', marginTop: 15 }} />

            {/* icon */}
            <Box sx={{ padding: 1, marginLeft: 12, justifyContent: "center", display: "flex", alignContent: "center", }}>


                <Box sx={{ marginTop: 5, color: "white", }}>
                    <IconButton
                        className="hover-icon"
                        sx={{
                            '&:hover': {
                                backgroundColor: "#a7a7a7",
                                background: 'linear-gradient(45deg,#00d2ff ,#73e6ff)',
                                borderRadius: '60%',
                                padding: '5px',
                                color: '#a7a7a7',
                            },
                            fontSize: '50px',
                            height: '40px',
                            width: '40px', marginRight: '18px',
                        }}
                    >
                        <HighlightOffIcon sx={{ color: "#a7a7a7" }} />
                    </IconButton >

                    <IconButton className="hover-icon"
                        sx={{
                            '&:hover': {
                                background: 'linear-gradient(45deg,#00d2ff ,#73e6ff)',
                                borderRadius: '80%',
                                padding: '6px',
                                color: '#fff',
                            },
                            fontSize: '50px',
                            // fontSize: '40px', 
                            height: '40px',
                            width: '40px', marginRight: '10px',
                        }}>
                        <CameraAltIcon sx={{ color: "#a7a7a7" }} />
                    </IconButton>
                    <IconButton className="hover-icon"
                        sx={{
                            '&:hover': {
                                background: 'linear-gradient(45deg,#00d2ff ,#73e6ff)',
                                borderRadius: '70%',
                                padding: '6px',
                                color: '#fff',
                            },
                            fontSize: '40px',
                            height: '40px', marginRight: '10px',
                            width: '40px',
                        }}>

                        <InstagramIcon sx={{ color: "#a7a7a7" }} />
                    </IconButton>
                    <IconButton className="hover-icon"
                        sx={{
                            '&:hover': {
                                background: 'linear-gradient(45deg,#00d2ff ,#73e6ff)',
                                borderRadius: '70%',
                                padding: '6px',
                                color: '#fff',
                            },
                            fontSize: '40px', // Adjust the font size to increase the size of the icon
                            height: '40px', //  Adjust height if necessary
                            width: '40px', marginRight: '10px',
                        }}>
                        <GitHubIcon sx={{ color: "#a7a7a7" }} />
                    </IconButton>
                    <IconButton className="hover-icon"
                        sx={{
                            '&:hover': {
                                background: 'linear-gradient(45deg,#00d2ff ,#73e6ff)',
                                borderRadius: '70%',
                                padding: '6px',
                                color: '#fff',
                            },
                            fontSize: '40px',
                            height: '40px', marginRight: '10px',
                            width: '40px',
                        }}>
                        <LinkedInIcon sx={{ color: "#a7a7a7" }} />
                    </IconButton>
                </Box>

            </Box>
            <Typography
                sx={{
                    marginTop: 1,
                    marginLeft: 7,
                    justifyContent: "center",
                    display: "flex",
                    alignContent: "center",
                    color: "white",
                    fontWeight: "bold",
                }}
                style={{ marginBottom: '2px' }}
            >
                All rights reserved by © Portfolio creative 2024
            </Typography>




        </Box>



    </>
}

export default Footer