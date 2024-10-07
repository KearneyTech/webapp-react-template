import React, { useState } from 'react';
import { useQuestions, useQuestionsDispatch } from './QuestionsContext.tsx';

export default function Checkbox({handleSubmit}) {

    const questions = useQuestions();
    const dispatch = useQuestionsDispatch();
    const [checkboxValue, setCheckboxValue] = useState(questions?.checkbox);

    function handleChange(e) {
        setCheckboxValue(!checkboxValue);
    }

    function handleButton() {
        if(!dispatch || checkboxValue === 'undefined'){return};

        dispatch({
            type: 'checkbox',
            value: checkboxValue?.toString()
        })

        handleSubmit('checkbox');
    }

    return (
        <>
            <div>Checkbox</div>
            <label  className="flex flex-col text-left text-white">
                In or out?
                <input type="checkbox" defaultChecked={checkboxValue} onChange={handleChange} className="border border-white bg-transparent w-72" />
            </label>
            <button onClick={handleButton}>Next</button>
        </>
    );
}
