import React, { useState, useReducer } from 'react';
import { QuestionsProvider } from './QuestionsContext.tsx';
import DynamicComponent from '../DynamicComponent.tsx';
import Info from './Info.tsx';
import Text from './Text.tsx';
import Select from './Select.tsx';
import Radio from './Radio.tsx';
import Checkbox from './Checkbox.tsx';
import Final from './Final.tsx';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

function Questions() {
    const [selectedComponent, setSelectedComponent] = useState('info');

    const components = {
        info: Info,
        text: Text,
        select: Select,
        radio: Radio,
        checkbox: Checkbox,
        final: Final
    };

    const nextViewMap = new Map();
    nextViewMap.set('info', 'text');
    nextViewMap.set('text', 'select');
    nextViewMap.set('select', 'radio');
    nextViewMap.set('radio', 'checkbox');
    nextViewMap.set('checkbox', 'final');
    nextViewMap.set('final', 'info');

    function handleText() {
        setSelectedComponent('text');
    }

    function handleSelect() {
        setSelectedComponent('select');
    }

    function handleRadio() {
        setSelectedComponent('radio');
    }

    function handleCheckbox() {
        setSelectedComponent('checkbox');
    }

    function handleViewSubmit(arg) {
        setSelectedComponent(nextViewMap.get(arg));
    }

    return (
        <QuestionsProvider>
            <div className='flex flex-col p-4 max-w-md bg-gradient-to-r from-[#c6edc9] to-[#0ec699] text-black rounded-xl text-center'>
                <h1 className='text-3xl mb-4'>Questions</h1>
                <DynamicComponent component={components[selectedComponent]} handleSubmit={handleViewSubmit} />
                <div className='mt-4'>
                    <button onClick={handleText} className='rounded-md bg-black text-white px-5 py-3 m-1'>Text</button>
                    <button onClick={handleSelect} className='rounded-md bg-black text-white px-5 py-3 m-1'>Select</button>
                    <button onClick={handleRadio} className='rounded-md bg-black text-white px-5 py-3 m-1'>Radio</button>
                    <button onClick={handleCheckbox} className='rounded-md bg-black text-white px-5 py-3 m-1'>Checkbox</button>
                </div>
            </div>
        </QuestionsProvider>
    );
}

export default Questions;
