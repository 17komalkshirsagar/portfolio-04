<Box sx={{ position: 'relative', backgroundColor: 'blue', padding: 2 }}>
    <Box
        sx={{
            height: '30vh',
            width: '60vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            padding: 2,
            marginTop: -10,
            marginLeft: "20%"
        }}
    >




        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white", marginTop: 5 }}>Subscribe to our newsletter</Typography>
        <Typography variant="h6" sx={{ marginTop: 2, }}>
            Don't lose a chance to be among the first to know about our upcoming news and updates.
        </Typography>
        {/* line-height: "1.5rem" */}
        <Box sx={{ display: "flex", marginTop: 5 }} >


            <Box sx={{ height: 150, width: 150, }}>
                <Stack direction="row" spacing={1}  >
                    <Button variant="outlined" sx={{ height: "3rem", width: "8rem", gap: 1, backgroundColor: "primary", color: "darkwhite", fontWeight: "bold" }}>Subscribe <Box sx={{ gap: 1 }}></Box></Button>

                </Stack>
            </Box>
        </Box>
    </Box>
</Box>