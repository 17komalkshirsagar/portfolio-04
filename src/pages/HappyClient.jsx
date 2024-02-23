import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Button, Chip, FormControl, Input, InputBase, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
// import { InputUnstyled } from '@mui/material/un';

const HappyClient = () => {


    return <>

        <Grid container spacing={3}>
            <Grid item xs={12} sx={{ background: "#1d3b62", padding: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: "bold", marginBottom: 1, marginTop: 5 }}>
                    Some of My Happy Clients
                </Typography>
                <Typography sx={{ color: "white", fontSize: 20 }}>
                    There are many variations of passages of Lorem Ipsum available.
                </Typography>
                <Typography sx={{ fontSize: 20, color: "white", marginBottom: 1 }}>
                    The majority have suffered alteration in some form.
                </Typography>
                <Box sx={{ marginTop: 4, display: "flex", justifyContent: "center", gap: 5, marginBottom: 15 }}>
                    <img
                        src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/uideck.svg"
                        alt=""
                        style={{ width: '150px', height: 'auto' }}
                    />
                    <img
                        src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/tailgrids.svg"
                        alt=""
                        style={{ width: '150px', height: 'auto' }}
                    />
                    <img
                        src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/lineicons.svg"
                        alt=""
                        style={{ width: '150px', height: 'auto' }}
                    />
                    <img
                        src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/ayroui.svg"
                        alt=""
                        style={{ width: '150px', height: 'auto' }}
                    />
                    <img
                        src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/plainadmin.svg"
                        alt=""
                        style={{ width: '150px', height: 'auto' }}
                    />
                </Box>
            </Grid>
        </Grid>




        {/* double screen page 1+2+1 */}
        <Box sx={{ position: 'relative', backgroundColor: 'white', padding: 2 }}>
            <Box
                sx={{
                    height: '40vh',
                    width: '70vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4e9ffe',
                    padding: 2,
                    marginTop: -10,
                    marginLeft: "10%",
                    borderRadius: 7
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "white", marginTop: 5 }}>Want to work to togther and create <br></br><Typography sx={{ fontWeight: "bold", color: "white", marginTop: 1, alignContent: "center", justifyContent: "center", fontSize: 25, display: "flex" }}>amzaing product together with me ?</Typography></Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                    <InputBase
                        fullWidth
                        sx={{
                            width: '500px',
                            height: '60px',
                            fontSize: 20,
                            alignItems: 'center',
                            background: 'linear-gradient(45deg, #d1d7df, ##bed5fc)',
                            display: 'flex',
                            border: "2px solid lightblue",
                            borderRadius: 25,
                            px: 2,
                            // outline: "none",
                            // outlineColor: "transparent",
                            gap: 5,

                        }}
                        placeholder="Enter Your Email"

                    />
                </Box>
            </Box>
        </Box >



        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ marginTop: 8 }}>
                    <Typography variant="h4" style={{ color: '#2e3be9', marginBottom: 1, textAlign: 'center', fontWeight: "bold" }}>Education & Experience</Typography>
                    <Typography variant="h5" style={{ color: 'black', marginBottom: 8, fontSize: 30, textAlign: 'center', fontWeight: "bold" }}>My Resume</Typography>
                    <Typography sx={{ display: 'flex', justifyContent: "center", alignItems: "center", color: "#808ca0", fontSize: 20 }}>
                        There are many variations of passages of Lorem Ipsum available but <br></br>
                    </Typography>
                    <Typography sx={{ marginLeft: { xs: 0, sm: 70 }, color: "#808ca0", fontSize: 20, marginBottom: 5 }}>
                        the majority have suffered alteration in some form.
                    </Typography>
                </Grid>
            </Grid>




        </Box>

        {/* steeper */}








    </>
}

export default HappyClient 