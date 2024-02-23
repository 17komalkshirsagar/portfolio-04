import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Avatar, AvatarGroup, Box, Card, Paper, Stack, Typography } from '@mui/material';
const Awesome = () => {
    return <>

        <Box sx={{ flexGrow: 1, marginTop: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{}}>
                    <Typography variant="h6" style={{ color: '#4a62e5', marginBottom: 1, textAlign: 'center', fontWeight: "bold" }}>My Resume</Typography>
                    <Typography variant="h1" style={{ color: 'black', marginBottom: 1, fontSize: 35, textAlign: 'center', marginBottom: 5, fontWeight: "bold" }}>My Services</Typography>
                    <Typography sx={{ fontSize: 20, color: "#c2c2c2", display: 'flex', justifyContent: "center", alignItems: "center", }}>
                        There are many variations of passages of Lorem Ipsum available but <br></br>
                    </Typography>
                    <Typography sx={{ color: "#c2c2c2", fontSize: 20, textAlign: "center" }}>
                        the majority have suffered alteration in some form.
                    </Typography>

                </Grid>
            </Grid>

            {/*  card*/}

            <Box sx={{ flexGrow: 1, padding: 5 }}>


                <Grid container spacing={2}>
                    {/* First Grid Item */}
                    <Grid item xs={12} sm={6}>
                        <Paper sx={{ p: 2, borderRadius: 4, backgroundColor: 'white' }}>
                            <Typography sx={{ marginTop: 2 }}>
                                <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/lineicon.svg" alt="" />
                            </Typography>
                            <Typography sx={{ marginTop: 2, marginLeft: 1 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus <br />
                                lectus tempus ut.ac venenatis Sed sodales erat a libero.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
                                    sx={{ width: 55, height: 55 }}
                                />
                                <Box sx={{ marginTop: 1 }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>Musharof Chy</Typography>
                                    <Typography>Founder @ LineIcons</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper sx={{ p: 2, borderRadius: 4, backgroundColor: 'white' }}>
                            <Typography sx={{ marginTop: 2 }}>
                                <img
                                    src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/ayro.svg"
                                    alt=""
                                    style={{ width: '15%', height: 'auto', maxHeight: '200px' }}
                                />
                            </Typography>
                            <Typography sx={{ marginTop: 2, marginLeft: 1 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus <br />
                                lectus tempus ut.ac venenatis Sed sodales erat a libero.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
                                    sx={{ width: 55, height: 55 }}
                                />
                                <Box sx={{ marginTop: 1 }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>Musharof Chy</Typography>
                                    <Typography>Founder @ LineIcons</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>

                    {/* 3 */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: 3 }}>
                        <Paper sx={{ p: 2, borderRadius: 4, backgroundColor: 'white' }}>
                            <Typography sx={{ marginTop: 2 }}>
                                <img
                                    src='https://portfolio-tailwind.preview.uideck.com/demos/personal/images/uidecks.svg'
                                    alt=""
                                    style={{ width: '15%', height: 'auto', maxHeight: '200px' }}
                                />
                            </Typography>
                            <Typography sx={{ marginTop: 2, marginLeft: 1 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus <br />
                                lectus tempus ut.ac venenatis Sed sodales erat a libero.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
                                    sx={{ width: 55, height: 55 }}
                                />
                                <Box sx={{ marginTop: 1 }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>Musharof Chy</Typography>
                                    <Typography>Founder @ LineIcons</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>










                    {/* Second Grid Item */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: 3 }}>
                        <Paper sx={{ p: 2, borderRadius: 4, backgroundColor: 'white' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/tailgrid.svg"
                                    alt=""
                                    style={{ width: '19%', height: 'auto', maxHeight: '200px' }}
                                />
                            </Typography>

                            <Typography sx={{ marginTop: 4, marginBottom: 3 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus <br />
                                lectus tempus ut.ac venenatis Sed sodales erat a libero.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{}}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/image-2.png"
                                    sx={{ width: 55, height: 55 }}
                                />
                                <Box sx={{ marginTop: 3 }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>Musharof Chy</Typography>
                                    <Typography>Founder @ LineIcons</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>

                </Grid>

            </Box>


        </Box >
    </>
}

export default Awesome



