import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Button, TextField, Typography } from '@mui/material';
const ContectWith = () => {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ marginTop: 8 }}>
                    <Typography variant="h6" style={{ color: '#2e3be9', marginBottom: 1, textAlign: 'center', fontWeight: "bold", }}>Contact With Me</Typography>
                    <Typography variant="h5" style={{ color: 'black', marginBottom: 1, fontSize: 30, textAlign: 'center', fontWeight: "bold" }}>Have an Project in Mind?</Typography>
                    <Typography sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: 2, color: "black", fontSize: 20 }}>
                        There are many variations of passages of Lorem Ipsum available but <br></br>
                    </Typography>
                    <Typography sx={{ marginLeft: { xs: 0, sm: 70 }, fontSize: 20 }}>
                        the majority have suffered alteration in some form.
                    </Typography>
                </Grid>
            </Grid>




        </Box >


        {/* input */}
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
                        <TextField
                            id="filled-basic"
                            variant="filled"
                            placeholder="Enter Your Name"
                            sx={{
                                marginLeft: 14.1,
                                width: '80%',
                                '& .MuiInputBase-root': {
                                    width: '101%',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
                        <TextField
                            id="filled-basic"
                            label="Enter Your Email"
                            variant="filled"
                            placeholder="Enter Your Email"
                            sx={{

                                width: '80%',
                                '& .MuiInputBase-root': {
                                    width: '100%',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '2px 20px 2px 0' }}>
                        <TextField
                            id="filled-basic"
                            label="Company (Optional)"
                            variant="filled"
                            placeholder="Company (Optional)"
                            sx={{
                                marginLeft: 16.1,
                                width: '100%',
                                '& .MuiInputBase-root': {
                                    width: '80%',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '2px 20px 2px 0' }}>
                        <TextField
                            id="filled-basic"
                            label="Enter Your Phone"
                            variant="filled"
                            placeholder="Enter Your Phone"
                            sx={{

                                width: '100%', marginLeft: 1.2,
                                '& .MuiInputBase-root': {
                                    width: '80%',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '2px 20px 2px 0' }}>
                        <TextField
                            id="filled-basic"
                            label="Tell me about Your Project"
                            variant="filled"
                            placeholder="Tell me about your Project"
                            multiline
                            rows={4}
                            sx={{
                                marginTop: 2,
                                width: '100%', marginLeft: 16,
                                '& .MuiInputBase-root': {
                                    width: '167%',
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            <Button variant="outlined" disabled sx={{ borderRadius: 10, backgroundColor: '#00d2ff', width: '200px', height: '60px' }}>
                <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Contact me</Typography>
            </Button>
        </Box>






    </>
}

export default ContectWith