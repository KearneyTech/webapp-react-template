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
        <div className="flex flex-col text-left text-black p-5">
            <label className="flex flex-col text-left w-9/12 mx-auto mb-2">
                Choose an option
                <select value={selectValue} onChange={handleChange} className="w-9/12 border border-black bg-transparent">
                    <option value="first">First</option>
                    <option value="second">Second</option>
                </select>
            </label>
            <button className='w-16 rounded-md bg-black text-white px-2 py-3 mx-auto my-1' onClick={handleButton}>Next</button>
        </div>
    );
}
