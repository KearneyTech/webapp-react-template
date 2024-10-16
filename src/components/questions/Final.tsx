import React from 'react';
import { useQuestions } from './QuestionsContext.tsx';

export default function Final({handleSubmit}) {
    const questions = useQuestions();

    return (
        <div className="flex flex-col text-left text-black p-5">
            <div className='text-2xl'>Final Results</div>
            <p>
                Text: {questions?.text}<br/>
                Select: {questions?.select}<br/>
                Radio: {questions?.radio}<br/>
                Checkbox: {questions?.checkbox.toString()}
            </p>
            <button className='w-16 rounded-md bg-black text-white px-2 py-3 mx-auto my-1' onClick={()=>{handleSubmit('final')}}>Reset</button>
        </div>
    );
}
