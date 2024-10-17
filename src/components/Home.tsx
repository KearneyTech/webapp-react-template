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
                    <p>
                        Take a look at a component below.
                    </p>
                </CardContent>
                <CardActions>
                    <Button component={null} LinkComponent={Link} to='cube'>
                        Cube
                    </Button>
                    <Button component={null} LinkComponent={Link} to='questions'>
                        Questions
                    </Button>
                    <Button component={null} LinkComponent={Link} to='mui'>
                        Material UI
                    </Button>
                    <Button component={null} LinkComponent={Link} to='chakraui'>
                        Chakra UI
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}