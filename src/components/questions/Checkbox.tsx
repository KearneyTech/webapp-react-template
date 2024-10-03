import React, { useState } from 'react';
import { useQuestions, useQuestionsDispatch } from './QuestionsContext.tsx';

export default function Checkbox({handleSubmit}) {

    const questions = useQuestions();
    const dispatch = useQuestionsDispatch();
    const [checkboxValue, setCheckboxValue] = useState(questions?.checkbox);
    console.log(`Checkbox: ${questions?.checkbox}`);

    function handleChange(e) {
        console.log(e.target.checked, checkboxValue);
        setTimeout(()=>{setCheckboxValue(e.target.checked)}, 100);
        console.log(`sending ${checkboxValue}`);
    }

    function handleButton() {
        if(!dispatch || checkboxValue === 'undefined'){return};

        dispatch({
            type: 'checkbox',
            value: true//checkboxValue
        })

        handleSubmit('checkbox');
    }

    return (
        <>
            <div>Checkbox</div>
            <label  className="flex flex-col text-left text-black">
                In or out?
                <input type="checkbox" defaultChecked={checkboxValue} onChange={handleChange} className="border-2 border-black bg-transparent w-72" />
                <button onClick={handleButton}>Next</button>
            </label>
        </>
    );
}
