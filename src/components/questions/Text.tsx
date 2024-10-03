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
        <>
            <div>Text</div>
            <label  className="flex flex-col text-left text-black">
                What do you want to say?
                <input type="text" value={textValue} onChange={handleChange} className="border border-black bg-transparent w-72" />
                <button onClick={handleButton}>Next</button>
            </label>
        </>
    );
}
