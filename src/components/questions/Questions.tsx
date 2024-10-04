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
            <h1>Questions</h1>
            <DynamicComponent component={components[selectedComponent]} handleSubmit={handleViewSubmit} />
            <div>
                <ButtonGroup variant="outlined">
                    <Button onClick={handleText}>Text</Button>
                    <Button onClick={handleSelect}>Select</Button>
                    <Button onClick={handleRadio}>Radio</Button>
                    <Button onClick={handleCheckbox}>Checkbox</Button>
                </ButtonGroup>
            </div>
        </QuestionsProvider>
    );
}

export default Questions;
