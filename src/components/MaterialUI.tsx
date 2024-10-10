import { Avatar, Card, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

export default function MaterialUI() {
    return (
        <>
            <Typography variant='h2'>Material UI</Typography>
            <Card>
                <CardHeader
                    title="Card Component"
                    subheader="Just playing around"
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}}>CC</Avatar>
                    }
                />
                <CardMedia
                    component="img"
                    height='90'
                    image='/images/pch.jpeg'
                    alt='Image alt tag'
                    />
                <CardContent>
                    <Typography mb={1}>
                        This is a card component. There is a header (CardHeader), image (CardMedia), and this copy (CardContent). 
                    </Typography>
                    <Divider variant='middle'/>
                    <Typography mt={1}>
                        That's a divider up there. I don't have much content.
                        But, if I did, it would go here.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
