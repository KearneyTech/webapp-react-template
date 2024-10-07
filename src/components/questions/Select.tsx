import React, { useState } from 'react';
import { useQuestions, useQuestionsDispatch } from './QuestionsContext.tsx';

export default function Select({handleSubmit}) {

    const questions = useQuestions();
    const dispatch = useQuestionsDispatch();
    const [selectValue, setSelectValue] = useState(questions?.select);

    function handleChange(e) {
        setSelectValue(e.target.value);
    }

    function handleButton() {
        if(!dispatch || selectValue === 'undefined'){return};
            dispatch({
                type: 'select',
                value: selectValue
        })
        handleSubmit('select');
    }

    return (
        <>
            <div>Select</div>
            <label  className="flex flex-col text-left text-white">
                Choose an option
                <select value={selectValue} onChange={handleChange} className="w-72 border border-white bg-transparent">
                    <option value="first">First</option>
                    <option value="second">Second</option>
                </select>
            </label>
            <button onClick={handleButton}>Next</button>
        </>
    );
}
