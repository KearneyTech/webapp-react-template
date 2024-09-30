import React, { useReducer, useState } from 'react';
import { QuestionsProvider } from './QuestionsContext.tsx';
import DynamicComponent from '../DynamicComponent.tsx';
import Text from './Text.tsx';

function Questions() {
    const [selectedComponent, setSelectedComponent] = useState('A');

    const components = {
        A: Text
    };

    return (
        <QuestionsProvider>
            <h1>Questions</h1>
            <DynamicComponent component={components[selectedComponent]} />
        </QuestionsProvider>
    );
}

export default Questions;
