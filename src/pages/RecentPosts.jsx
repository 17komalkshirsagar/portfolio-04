import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const RecentPosts = () => {
    return <>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ marginTop: 5 }}>
                    <Typography variant="h6" style={{ color: '#2e3be9', marginBottom: 1, textAlign: 'center', fontWeight: "bold" }}>What I Offer?</Typography>
                    <Typography variant="h5" style={{ color: 'black', marginBottom: 2, fontSize: 30, textAlign: 'center' }}>From The Blog</Typography>
                    <Typography sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: 1 }}>
                        There are many variations of passages of Lorem Ipsum available but <br></br>
                    </Typography>
                    <Typography sx={{ marginLeft: { xs: 0, sm: 70 } }}>
                        the majority have suffered alteration in some form.
                    </Typography>
                </Grid>
            </Grid>






        </Box>




        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ padding: 8 }}>
            <Grid xs={4}>
                <Card sx={{ maxWidth: 400, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 300, width: '100%', objectFit: 'cover' }}
                        image="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-1.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                            UI/UIX Desing Tend 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16 }}>
                            Automate your Business for more results, Creating Business that.
                        </Typography>

                        {/* Read More link and bottom line */}
                        <Box style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ cursor: 'pointer', '&:hover': { color: 'blue' }, marginTop: 1 }}
                            >
                                <a href="#">Read More</a>
                            </Typography>

                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid xs={4}>
                <Card sx={{ maxWidth: 400, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 300, width: '100%', objectFit: 'cover' }}
                        image="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-2.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                            UI/UIX Desing Tend 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16 }}>
                            Automate your Business for more results, Creating Business that.
                        </Typography>

                        {/* Read More link and bottom line */}
                        <Box style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ cursor: 'pointer', '&:hover': { color: 'blue' }, marginTop: 1 }}
                            >
                                <a href="#">Read More</a>
                            </Typography>

                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid xs={4}>
                <Card sx={{ maxWidth: 400, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 300, width: '100%', objectFit: 'cover' }} // Adjust height and width
                        image="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-3.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                            UI/UIX Desing Tend 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16 }}>
                            Automate your Business for more results, Creating Business that.
                        </Typography>

                        {/* Read More link and bottom line */}
                        <Box style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ cursor: 'pointer', '&:hover': { color: 'blue' }, marginTop: 1 }}
                            >
                                <a href="#">Read More</a>
                            </Typography>

                        </Box>
                    </CardContent>
                </Card>
            </Grid>


        </Grid >
    </>
}

export default RecentPosts