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
        <div className="flex flex-col text-left text-black p-5">
            <label  className="flex text-left w-9/12">
                In or out?
                <input type="checkbox" defaultChecked={checkboxValue} onChange={handleChange} className="ml-2 border-4 border-black bg-transparent w-4" />
            </label>
            <button className='w-16 rounded-md bg-black text-white px-2 py-3 mx-auto my-1' onClick={handleButton}>Next</button>
        </div>
    );
}
