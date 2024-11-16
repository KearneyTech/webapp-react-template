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
                    <Button component={Link} to='cube'>
                        Cube
                    </Button>
                    <Button component={Link} to='questions'>
                        Questions
                    </Button>
                    <Button component={Link} to='mui'>
                        Material UI
                    </Button>
                    <Button component={Link} to='chakraui'>
                        Chakra UI
                    </Button>
                    <Button component={Link} to='products'>
                        Products
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}