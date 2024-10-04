import React from 'react';

export default function Info({handleSubmit}) {
    function handleButton() {
        handleSubmit('info');
    }

    return (
        <>
            <div>Info</div>
            <p>Make selections for the final output.</p>
            <button onClick={handleButton}>Next</button>
        </>
    );
}
