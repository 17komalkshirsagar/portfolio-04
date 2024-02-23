import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import sky from '../assets/sky.jpg'

const Rest = () => {
    return <>
        <Box sx={{
            backgroundImage: `url(${sky})`, // Add the background image here
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
        }}>
            <Typography variant='h4' sx={{ textAlign: 'center', marginTop: 1 }}>
                Portfolio
            </Typography>
            <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 1 }}>
                <Grid item>
                    <Typography variant='h6'>Home</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>About</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Experience</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Services</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Portfolio</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Testimonials</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Contact</Typography>
                </Grid>
            </Grid>

            <Box container justifyContent="center" alignItems="center" marginTop={5} sx={{ display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                transition: 'background-color 0.3s, border-radius 0.3s',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderRadius: '0',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    padding: '20px',
                                }}
                            >
                                <FacebookIcon sx={{ color: 'white' }} />
                            </Box>
                        </Box>





                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                transition: 'background-color 0.3s, border-radius 0.3s',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderRadius: '0',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    padding: '20px',
                                }}
                            >
                                < YouTubeIcon sx={{ color: 'white' }} />
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                transition: 'background-color 0.3s, border-radius 0.3s',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderRadius: '0',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    padding: '20px',
                                }}
                            >
                                < LinkedInIcon sx={{ color: 'white' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                transition: 'background-color 0.3s, border-radius 0.3s',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderRadius: '0',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    padding: '20px',
                                }}
                            >
                                < InstagramIcon sx={{ color: 'white' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
}

export default Rest
