import React, { createContext, useReducer } from "react";

interface State {
    text: string;
    radio: string;
    select: string;
};

interface Action {
    type: 'text' | 'radio' | 'select',
    value: string
};

const initialQuestions:State = {
    text: '',
    radio: '',
    select: ''
};

export function QuestionsProvider({children}) {
    const [questions, dispatch] = useReducer(questionsReducer, initialQuestions);
    const QuestionsContext = createContext<State>(initialQuestions);
    const QuestionsDispatchContext = createContext(dispatch);
    
    
    function handleUpdate(value) {
        dispatch({
            type: 'text',
            value: value
        })
    }
    
    return (
        <QuestionsContext.Provider value={questions}>
            <QuestionsDispatchContext.Provider value={dispatch}>
                {children}
            </QuestionsDispatchContext.Provider>
        </QuestionsContext.Provider>
    )
}

function questionsReducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {
        case 'text': {
            return (
                {...state,
                    text: action.value
                }
            )
            break;
        }
        case 'radio': {
            return (
                {...state,
                    radio: action.value
                }
            )
            break;
        }
        case 'select': {
            return (
                {...state,
                    select: action.value
                }
            )
            break;
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}