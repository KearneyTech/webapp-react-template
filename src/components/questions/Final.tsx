import React from 'react';
import { useQuestions } from './QuestionsContext.tsx';

export default function Final({handleSubmit}) {
    const questions = useQuestions();

    

    return (
        <>
            <div>Final</div>
            <p>
                Text: {questions?.text}<br/>
                Select: {questions?.select}<br/>
                Radio: {questions?.radio}<br/>
                Checkbox: {questions?.checkbox.toString()}
            </p>
            <button onClick={()=>{handleSubmit('final')}}>Reset</button>
        </>
    );
}
