import React, { useReducer, useState } from 'react';
import { QuestionsProvider } from './QuestionsContext.tsx';
import DynamicComponent from '../DynamicComponent.tsx';
import Info from './Info.tsx';
import Text from './Text.tsx';
import Select from './Select.tsx';
import Radio from './Radio.tsx';
import Checkbox from './Checkbox.tsx';
import Final from './Final.tsx';

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

    return (
        <QuestionsProvider>
            <h1>Questions</h1>
            <DynamicComponent component={components[selectedComponent]} />
            <div>
                <button onClick={handleText}>Text</button>
                <button onClick={handleSelect}>Select</button>
                <button onClick={handleRadio}>Radio</button>
                <button onClick={handleCheckbox}>Checkbox</button>
            </div>
        </QuestionsProvider>
    );
}

export default Questions;
