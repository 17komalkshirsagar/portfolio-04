import { Box, Card, CardContent, Chip, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from 'react'

const MyResume = () => {
    return <>

        <Box sx={{ flexGrow: 1, marginTop: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{}}>
                    <Typography variant="h6" style={{ color: '#2e3be9', marginBottom: 1, textAlign: 'center', fontWeight: "bold" }}>My Resume</Typography>
                    <Typography variant="h2" style={{ color: 'black', marginBottom: 1, fontSize: 30, textAlign: 'center', marginBottom: 5, fontWeight: "bold" }}>My Services</Typography>
                    <Typography sx={{ fontSize: 23, color: "#c2c2c2", display: 'flex', justifyContent: "center", alignItems: "center", }}>
                        There are many variations of passages of Lorem Ipsum available but <br></br>
                    </Typography>
                    <Typography sx={{ color: "#c2c2c2", fontSize: 23, textAlign: "center" }}>
                        the majority have suffered alteration in some form.
                    </Typography>

                </Grid>
            </Grid>




        </Box>

        {/* card */}
        <Box sx={{ padding: 8, justifyContent: "space-evenly" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                <Grid item xs={12} sm={4}>
                    <Paper
                        sx={{
                            borderRadius: 2,
                            height: '100%',
                            width: '85%',
                            transition: 'box-shadow 0.5s ease-in-out', // Faster transition speed
                            '&:hover': {
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Larger shadow
                            }
                        }}
                    >
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography sx={{ fontSize: 20, marginTop: 5 }} color="text.secondary" gutterBottom>
                                    <h3> Platinum Package</h3>
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur<br></br> grdhtg adipiscing elitdsdg egn<br></br> Sollicitudin dignissim.
                                </Typography>

                                <Typography sx={{ color: "blue" }}>
                                    <h1>$189</h1>
                                </Typography>
                                <Chip
                                    label="See Deatials"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 6,
                                        color: 'black',
                                        padding: '18px 10px',
                                        height: '50px',
                                        width: '150px',
                                        '&:hover': {
                                            backgroundImage: 'linear-gradient(to right, #3b9efa, #1445de)',
                                            color: 'white'
                                        }
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Paper
                        sx={{
                            borderRadius: 2,
                            height: '100%',
                            width: '85%',
                            transition: 'box-shadow 0.5s ease-in-out', // Faster transition speed
                            '&:hover': {
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Larger shadow
                            }
                        }}
                    >
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography sx={{ fontSize: 20, marginTop: 5 }} color="text.secondary" gutterBottom>
                                    <h3> Gold Package</h3>
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur<br></br> grdhtg adipiscing elitdsdg egn<br></br> Sollicitudin dignissim.
                                </Typography>

                                <Typography sx={{ color: "blue" }}>
                                    <h1>$99</h1>
                                </Typography>
                                <Chip
                                    label="See Deatials"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 6,
                                        color: 'black',
                                        padding: '18px 10px',
                                        height: '50px',
                                        width: '150px',
                                        '&:hover': {
                                            backgroundImage: 'linear-gradient(to right, #3b9efa, #1445de)',
                                            color: 'white'
                                        }
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper
                        sx={{
                            borderRadius: 2,
                            height: '100%',
                            width: '85%',
                            transition: 'box-shadow 0.5s ease-in-out', // Faster transition speed
                            '&:hover': {
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Larger shadow
                            }
                        }}
                    >
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography sx={{ fontSize: 20, marginTop: 5 }} color="text.secondary" gutterBottom>
                                    <h3> Silver Package</h3>
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur<br></br> grdhtg adipiscing elitdsdg egn<br></br> Sollicitudin dignissim.
                                </Typography>

                                <Typography sx={{ color: "blue" }}>
                                    <h1>$499</h1>
                                </Typography>
                                <Chip
                                    label="See Deatials"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 6,
                                        color: 'black',
                                        padding: '18px 10px',
                                        height: '50px',
                                        width: '150px',
                                        '&:hover': {
                                            backgroundImage: 'linear-gradient(to right, #3b9efa, #1445de)',
                                            color: 'white'
                                        }
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>










            </Grid>
        </Box>

    </>
}

export default MyResume