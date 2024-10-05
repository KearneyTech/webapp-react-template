import { Button, CardActions, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Card variant='outlined'>
                <CardContent>
                    <h1>Home</h1>
                    <p>
                        This is a place for me to play with a ReactJS front end.
                    </p>
                </CardContent>
                <CardActions>
                    <Button LinkComponent={Link} to='cube'>
                        Cube
                    </Button>
                    <Button LinkComponent={Link} to='questions'>
                        Questions
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}