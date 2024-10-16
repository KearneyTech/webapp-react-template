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
        <div className="flex flex-col text-left text-black p-5">
            <fieldset className="flex flex-col text-left text-black w-9/12 mx-auto mb-2">
                Which do you prefer?
                <label><input type="radio" name='radios' value='option1' onChange={handleChange} checked={radioValue === 'good'} className="border border-white bg-transparent w-4" /> Good</label>
                <label><input type="radio" name='radios' value='option2' onChange={handleChange} checked={radioValue === 'better'} className="border border-white bg-transparent w-4" /> Better</label>
                <label><input type="radio" name='radios' value='option3' onChange={handleChange} checked={radioValue === 'best'} className="border border-white bg-transparent w-4" /> Best</label>
            </fieldset>
            <button className='w-16 rounded-md bg-black text-white px-2 py-3 mx-auto my-1' onClick={handleButton}>Next</button>
        </div>
    );
}
