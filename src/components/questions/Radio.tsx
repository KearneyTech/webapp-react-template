import React, { useState } from 'react';
import { useQuestions, useQuestionsDispatch } from './QuestionsContext.tsx';

export default function Radio({handleSubmit}) {

    const questions = useQuestions();
    const dispatch = useQuestionsDispatch();
    const [radioValue, setRadioValue] = useState(questions?.radio);

    function handleChange(e) {
        //setTextValue(e.target.value);
    }

    function handleButton() {
        if(!dispatch || radioValue === 'undefined'){return};
            dispatch({
                type: 'radio',
                value: radioValue
        })
        handleSubmit('radio');
    }

    return (
        <>
            <div>Radio</div>
            <label  className="flex flex-col text-left text-black">
                What do you want to say?
                <input type="radio" value={radioValue} onChange={handleChange} className="border-2 border-black bg-transparent w-72" />
                <button onClick={handleButton}>Next</button>
            </label>
        </>
    );
}
