import React, { useState } from 'react';
import { useQuestions, useQuestionsDispatch } from './QuestionsContext.tsx';

export default function Radio({handleSubmit}) {

    const questions = useQuestions();
    const dispatch = useQuestionsDispatch();
    const [radioValue, setRadioValue] = useState(questions?.radio);

    function handleChange(e) {
        console.log(e.target.value);
        setRadioValue(e.target.value);
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
                <input type="radio" name='radios' value='option1' onChange={handleChange} checked={radioValue === 'option1'} className="border border-black bg-transparent w-72" />
                <input type="radio" name='radios' value='option2' onChange={handleChange} checked={radioValue === 'option2'} className="border border-black bg-transparent w-72" />
                <input type="radio" name='radios' value='option3' onChange={handleChange} checked={radioValue === 'option3'} className="border border-black bg-transparent w-72" />
            </label>
            <button onClick={handleButton}>Next</button>
        </>
    );
}
