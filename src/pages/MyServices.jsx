import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Chip, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddchartIcon from '@mui/icons-material/Addchart';
const MyServices = () => {
    return <>

        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{}}>
                    <Typography variant="h4" style={{ color: '#2e3be9', marginBottom: 1, textAlign: 'center', fontWeight: "bold" }}>What I Offer?</Typography>
                    <Typography variant="h5" style={{ color: 'black', marginBottom: 1, fontSize: 30, textAlign: 'center' }}>My Services</Typography>
                    <Typography sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        There are many variations of passages of Lorem Ipsum available but <br></br>
                    </Typography>
                    <Typography sx={{ marginLeft: { xs: 0, sm: 70 } }}>
                        the majority have suffered alteration in some form.
                    </Typography>
                </Grid>
            </Grid>




        </Box>

        {/* 4 card */}
        <Box sx={{ width: '100%', marginTop: 5, marginX: 6 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={3} sx={{ bgcolor: "" }}>
                    <Card sx={{

                        borderRadius: '12px',
                        width: '300px',
                        height: '300px',
                        '&:hover': {
                            background: '#194be5',
                            '& .MuiTypography-root': {
                                color: '#fff',
                            },
                        }
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ marginTop: 3 }}>
                                    <IconButton
                                        className="hover-icon"
                                        sx={{
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #dedede , #f5f5f5)',
                                                borderRadius: '50%',
                                                padding: '5px',
                                                color: '#fff',
                                            },
                                            fontSize: '90px',
                                            height: '80px',
                                            width: '80px',
                                        }}
                                    >
                                        <PersonSearchIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                        {/* <PersonSearchIcon sx={{ fontSize: 'inherit' }} /> */}
                                    </IconButton>
                                </Box>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: "center", alignContent: "center", display: "flex", }} gutterBottom>
                                    User Research
                                </Typography>

                                <Typography variant="" sx={{ justifyContent: "center", alignContent: "center", fontSize: 17, display: "flex", color: "black", marginLeft: 2 }}>
                                    Lorem ipsum, dolor sit amet conse ctetur adipisicing elit. Fugiat harum cumque provident doloremque, dolore saepe.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 2nd */}

                <Grid item xs={12} sm={6} md={3} sx={{ bgcolor: "" }}>
                    <Card sx={{
                        borderRadius: '12px',
                        width: '300px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        '&:hover': {
                            background: '#194be5',
                            '& .MuiTypography-root': {
                                color: 'linear-gradient(45deg, #dedede , #4944e1)',
                            },
                        }
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ marginTop: 3 }}>
                                    <IconButton
                                        className="hover-icon"
                                        sx={{
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #dedede , #f5f5f5)',
                                                borderRadius: '50%',
                                                padding: '5px',
                                                color: 'linear-gradient(45deg, #dedede , #4944e1)',
                                            },
                                            fontSize: '90px',
                                            height: '80px',
                                            width: '80px',
                                        }}
                                    >
                                        <AppsOutageIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                        {/* <PersonSearchIcon sx={{ fontSize: 'inherit' }} /> */}
                                    </IconButton>
                                </Box>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: "center", alignContent: "center", display: "flex", }} color="text.secondary" gutterBottom>
                                    Visula Desigen
                                </Typography>
                                <Typography variant="" sx={{ justifyContent: "center", alignContent: "center", display: "flex", color: "black", marginLeft: 2, fontSize: 17 }}>
                                    Lorem ipsum, dolor sit amet conseu  ctetur  adipis icing elit.jtho Fugiat uiu harum cumque provident dolore mque, dolore saepe.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 3 card */}

                <Grid item xs={12} sm={6} md={3} sx={{ bgcolor: "" }}>
                    <Card sx={{
                        borderRadius: '12px',
                        width: '300px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        '&:hover': {
                            background: '#194be5',
                            '& .MuiTypography-root': {
                                color: 'linear-gradient(45deg, #dedede , #4944e1)',
                            },
                        }
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ marginTop: 3 }}>
                                    <IconButton
                                        className="hover-icon"
                                        sx={{
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #dedede , #f5f5f5)',
                                                borderRadius: '50%',
                                                padding: '5px',
                                                color: 'linear-gradient(45deg, #dedede , #4944e1)',
                                            },
                                            fontSize: '90px',
                                            height: '80px',
                                            width: '80px',
                                        }}
                                    >
                                        <SupervisorAccountIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                        {/* <PersonSearchIcon sx={{ fontSize: 'inherit' }} /> */}
                                    </IconButton>
                                </Box>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: "center", alignContent: "center", display: "flex", }} color="text.secondary" gutterBottom>
                                    User Teasting
                                </Typography>
                                <Typography variant="" sx={{ justifyContent: "center", alignContent: "center", display: "flex", color: "black", marginLeft: 2, fontSize: 17 }}>
                                    Lorem ipsum, dolor sit amet conseu  ctetur  adipis icing elit.jtho Fugiat uiu harum cumque provident dolore mque, dolore saepe.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 4 card */}

                <Grid item xs={12} sm={6} md={3} sx={{ paddingX: 2 }}>
                    <Card sx={{
                        borderRadius: '12px',
                        width: '300px',
                        height: '300px',
                        '&:hover': {
                            background: '#194be5',
                            '& .MuiTypography-root': {
                                color: 'linear-gradient(45deg, #dedede , #4944e1)',
                            },
                        }
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ marginTop: 3 }}>
                                    <IconButton
                                        className="hover-icon"
                                        sx={{
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #dedede , #f5f5f5)',
                                                borderRadius: '50%',
                                                padding: '5px',
                                                color: 'linear-gradient(45deg, #dedede , #4944e1)',
                                            },
                                            fontSize: '90px',
                                            height: '80px',
                                            width: '80px',
                                        }}
                                    >
                                        < AddchartIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                        {/* <PersonSearchIcon sx={{ fontSize: 'inherit' }} /> */}
                                    </IconButton>
                                </Box>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: "center", alignContent: "center", display: "flex", }} color="text.secondary" gutterBottom>
                                    User Teasting
                                </Typography>
                                <Typography variant="" sx={{ justifyContent: "center", alignContent: "center", display: "flex", color: "black", marginLeft: 2, fontSize: 17 }}>
                                    Lorem ipsum, dolor sit amet conseu  ctetur  adipis icing elit.jtho Fugiat uiu harum cumque provident dolore mque, dolore saepe.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>



            </Grid>
        </Box>
        {/* creative protfolia */}

        <Box sx={{ flexGrow: 1, marginTop: 15 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{}}>
                    <Typography variant="h5" style={{ color: '#2e3be9', marginBottom: 1, textAlign: 'center', fontWeight: "bold" }}>Creative Portfolios</Typography>
                    <Typography variant="h4" style={{ color: 'black', marginBottom: 1, fontSize: 40, textAlign: 'center' }}>Recent Works</Typography>
                    <Typography sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: 1, fontSize: 20 }}>
                        There are many variations of passages of Lorem Ipsum available  <br></br>
                    </Typography>
                    <Typography sx={{ marginLeft: { xs: 0, sm: 70 }, fontSize: 20, color: "black", fontWeight: "black", marginRight: 1 }}>
                        the majority have suffered alteration in some form.
                    </Typography>

                </Grid>
            </Grid>


            <Box sx={{ gap: 2, marginTop: 2, justifyContent: "center", alignItems: "center", display: "flex" }}>
                <Chip
                    label="All"
                    sx={{
                        backgroundColor: '#426ec6', color: 'white', borderRadius: '16px', padding: '8px 10px',
                    }} />

                <Chip label="Web Design" variant="outlined" sx={{ color: 'black', padding: '18px 10px', '&:hover': { backgroundImage: 'linear-gradient(to right, #3b9efa, #2196F3)', color: 'white' } }} />
                <Chip label="Graphic Design" variant="outlined" sx={{ color: 'black', padding: '18px 10px', '&:hover': { backgroundImage: 'linear-gradient(to right, #3b9efa, #2196F3)', color: 'white' } }} />
                <Chip label="App" variant="outlined" sx={{ color: 'black', padding: '18px 10px', '&:hover': { backgroundImage: 'linear-gradient(to right, #3b9efa, #2196F3)', color: 'white' } }} />

            </Box>
            {/* 4 images */}
            <Box sx={{ p: 10 }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{}}>
                        <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg"
                            alt="" style={{ width: '90%', height: 'auto', maxWidth: '100%' }} />
                        <Typography sx={{ marginTop: 2, fontWeight: "bold", }}><h2>Startup landing page</h2></Typography>
                        <Typography sx={{ marginTop: 1, }}>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Maecenas vitae dolor  <br></br> libero.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{}}>
                        <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-02.jpg"
                            alt="" style={{ width: '90%', height: 'auto', maxWidth: '100%' }} />
                        <Typography sx={{ marginTop: 2, fontWeight: "bold", }}><h2>Job portal landing page</h2></Typography>
                        <Typography sx={{ marginTop: 1, }}>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Maecenas vitae dolor  <br></br> libero.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ marginTop: 1 }}>
                        <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-03.jpg"
                            alt="" style={{ width: '90%', height: 'auto', maxWidth: '100%' }} />
                        <Typography sx={{ marginTop: 2, fontWeight: "bold", }}><h2> landing page</h2></Typography>
                        <Typography sx={{ marginTop: 1, }}>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Maecenas vitae dolor  <br></br> libero.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ marginTop: 1 }}>
                        <img src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-04.jpg"
                            alt="" style={{ width: '90%', height: 'auto', maxWidth: '100%' }} />
                        <Typography sx={{ marginTop: 2, fontWeight: "bold", }}><h2>Business landing page</h2></Typography>
                        <Typography sx={{ marginTop: 1, }}>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit. Maecenas vitae dolor  <br></br> libero.</Typography>
                    </Grid>
                </Grid>
            </Box>


        </Box>
    </>

}
export default MyServices

