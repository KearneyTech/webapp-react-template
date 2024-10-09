import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

export default function MaterialUI() {
    return (
        <>
            <Typography variant='h2'>Material UI</Typography>
            <Card>
                <CardHeader
                    title="Card Component"
                    subheader="Just playing around"
                />
                <CardMedia
                    component="img"
                    height='90'
                    image='/images/pch.jpeg'
                    alt='Image alt tag'
                    />
                <CardContent>
                    <Typography>
                        This is a card component. There is a header (CardHeader), image (CardMedia), and this copy (CardContent). I don't have much content.
                        But, if I did, it would go here.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
