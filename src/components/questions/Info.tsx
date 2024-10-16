import Button from '@mui/material/Button';
import React from 'react';

export default function Info({handleSubmit}) {
    function handleButton() {
        handleSubmit('info');
    }

    return (
        <div className="flex flex-col text-left text-black p-5">
            <p>Make selections for the final output.</p>
            <button className='w-16 rounded-md bg-black text-white px-2 py-3 mx-auto my-1' onClick={handleButton}>Begin</button>
        </div>
    );
}
