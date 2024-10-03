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
            <label  className="flex flex-col text-left text-black">
                Choose an option
                <select value={selectValue} onChange={handleChange} className="w-72 border border-black bg-transparent">
                    <option value="first">First</option>
                    <option value="second">Second</option>
                </select>
                <button onClick={handleButton}>Next</button>
            </label>
        </>
    );
}
