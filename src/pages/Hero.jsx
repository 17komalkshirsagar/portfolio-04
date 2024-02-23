import { Button, CardActions, IconButton, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Paper } from '@mui/material';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Hero = () => {
    return <>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box sx={{ textAlign: 'center', marginTop: 20, marginRight: 20 }}>
                    <Typography variant="h6" style={{ color: 'blue', marginBottom: 1, marginRight: "29%" }}>Hey There 👋 I am</Typography>
                    <Typography variant="h4" fontWeight="bold" color="black" sx={{ marginBottom: 1, marginRight: 20, }}>Daniel Jack</Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 25, }}>Professional{' '}
                        <Box component="span" fontWeight="bold" color="black">
                            Graphic Designer
                        </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2, fontSize: 19, marginRight: "-6%" }}>Lorem ipsum dolor sit amet, consectetur  elit. <br />Aenean interdum consequat kower convallis.</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, marginRight: 5 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                height: '52px',
                                width: '150px',
                                fontSize: 15,
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #3f24f6, #673AB7)',
                                color: 'white',
                                borderRadius: 20,
                            }}
                        > Click me</Button>
                        <Button
                            variant="outlined"
                            sx={{
                                height: '52px',
                                width: '150px',
                                fontSize: 15,
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #18181A, #3a3a38)',
                                color: 'white',
                                borderRadius: 20,
                            }}
                        > Learn More</Button>
                    </Box>
                </Box>
            </Grid>



            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/hero-image.png" alt="Daniel Jack" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            </Grid>
        </Grid>


        {/* 2geid */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{}}>
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginTop: 10, justifyContent: "center", alignItems: "center", display: 'flex' }}>
                <Box sx={{ marginBottom: 15 }}>
                    <Typography variant="h6" style={{ color: 'blue', marginBottom: 1, fontSize: 25 }}>ABOUT ME</Typography>
                    <Typography variant="h4" fontWeight="bold" color="black" sx={{ marginBottom: 1, fontSize: 50 }}>Better design,</Typography>
                    <Typography variant="h4" fontWeight="bold" color="black" sx={{ marginBottom: 1, fontSize: 50 }}>better experience</Typography>

                    <Typography variant="body1" sx={{ marginBottom: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Aenean interdum consequat cidunt ut mi Vestibulum sit amet.</Typography>

                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box sx={{ marginTop: { xs: 5, md: 10 }, marginLeft: { xs: 2, md: 15 } }}>
                    <Typography variant="h4" fontWeight="bold" color="black" sx={{ marginBottom: 1, fontSize: { xs: 30, md: 50 } }}>Better experience</Typography>

                    <Typography variant="body1" sx={{ marginBottom: 1, fontSize: { xs: 19, md: 19 } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Aenean interdum consequat cidunt ut mi
                        <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 20 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Aenean interdum consequat cidunt <br />ut mi Vestibulum sit amet. convallis.
                        </Typography>
                    </Typography>
                </Box>






                {/* icon */}
                <Box sx={{ padding: 1, marginLeft: { xs: 2, md: 12 } }}>
                    <Box sx={{ marginTop: { xs: 2, md: 3 } }}>
                        <IconButton
                            className="hover-icon"
                            sx={{
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #764BA2 , #667EEA)',
                                    borderRadius: '60%',
                                    padding: '5px',
                                    color: '#fff',
                                },
                                fontSize: '40px', // Adjust the font size to increase the size of the icon
                                height: '40px', //  Adjust height if necessary
                                width: '40px', // OAdjust width if necessary
                            }}
                        >
                            <HighlightOffIcon />
                        </IconButton >

                        <IconButton className="hover-icon"
                            sx={{
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #764BA2 , #667EEA)',
                                    borderRadius: '80%',
                                    padding: '6px',
                                    color: '#fff',
                                },
                                fontSize: '50px',
                                // fontSize: '40px', // Adjust the font size to increase the size of the icon
                                height: '40px', //  Adjust height if necessary
                                width: '40px',
                            }}>
                            <CameraAltIcon />
                        </IconButton>
                        <IconButton className="hover-icon"
                            sx={{
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #764BA2 , #667EEA)',
                                    borderRadius: '70%',
                                    padding: '6px',
                                    color: '#fff',
                                },
                                fontSize: '40px', // Adjust the font size to increase the size of the icon
                                height: '40px', //  Adjust height if necessary
                                width: '40px',
                            }}>

                            <InstagramIcon />
                        </IconButton>
                        <IconButton className="hover-icon"
                            sx={{
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #764BA2 , #667EEA)',
                                    borderRadius: '70%',
                                    padding: '6px',
                                    color: '#fff',
                                },
                                fontSize: '40px', // Adjust the font size to increase the size of the icon
                                height: '40px', //  Adjust height if necessary
                                width: '40px',
                            }}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton className="hover-icon"
                            sx={{
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #764BA2 , #667EEA)',
                                    borderRadius: '70%',
                                    padding: '6px',
                                    color: '#fff',
                                },
                                fontSize: '40px', // Adjust the font size to increase the size of the icon
                                height: '40px', //  Adjust height if necessary
                                width: '40px',
                            }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>

                </Box>




            </Grid>

        </Grid>






    </>
}

export default Hero

