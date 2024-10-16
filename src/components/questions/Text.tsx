import React, { useState } from 'react';
import { useQuestions, useQuestionsDispatch } from './QuestionsContext.tsx';

export default function Text({handleSubmit}) {

    const questions = useQuestions();
    const dispatch = useQuestionsDispatch();
    const [textValue, setTextValue] = useState(questions?.text);

    function handleChange(e) {
        setTextValue(e.target.value);
    }

    function handleButton() {
        if(!dispatch || textValue === 'undefined'){return};
            dispatch({
                type: 'text',
                value: textValue
        })
        handleSubmit('text');
    }

    return (
        <div className="flex flex-col text-left text-black p-5">
            <label className='w-9/12 mx-auto mb-2'>
                What do you want to say?
                <input type="text" value={textValue} onChange={handleChange} className="border border-black bg-transparent w-9/12" />
            </label>
            <button className='w-16 rounded-md bg-black text-white px-2 py-3 mx-auto my-1' onClick={handleButton}>Next</button>
        </div>
    );
}
