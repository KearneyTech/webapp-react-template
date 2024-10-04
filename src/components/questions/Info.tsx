import Button from '@mui/material/Button';
import React from 'react';

export default function Info({handleSubmit}) {
    function handleButton() {
        handleSubmit('info');
    }

    return (
        <>
            <div>Info</div>
            <p>Make selections for the final output.</p>
            <Button onClick={handleButton}  variant="outlined">Next</Button>
        </>
    );
}
