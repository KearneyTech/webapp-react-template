import React, {useReducer} from 'react';
import { QuestionsProvider } from './QuestionsContext.tsx';

function Questions() {
    return (
        <QuestionsProvider>
            <h1>Questions</h1>
        </QuestionsProvider>
    );
}

export default Questions;
