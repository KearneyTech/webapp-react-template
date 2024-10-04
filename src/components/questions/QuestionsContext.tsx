import React, { createContext, Dispatch, useContext, useReducer } from "react";

interface State {
    text: string;
    radio: string;
    select: string;
    checkbox: boolean;
};

interface Action {
    type: 'text' | 'radio' | 'select' | 'checkbox',
    value: string
};

const initialQuestions:State = {
    text: '',
    radio: '',
    select: '',
    checkbox: false
};

const QuestionsContext = createContext<State|null>(null);
const QuestionsDispatchContext = createContext<Dispatch<Action>|null>(null);

export function QuestionsProvider({children}) {
    const [questions, dispatch] = useReducer(questionsReducer, initialQuestions);
    
    return (
        <QuestionsContext.Provider value={questions}>
            <QuestionsDispatchContext.Provider value={dispatch}>
                {children}
            </QuestionsDispatchContext.Provider>
        </QuestionsContext.Provider>
    )
}

export function useQuestions() {
    return useContext(QuestionsContext)
}

export function useQuestionsDispatch() {
    return useContext(QuestionsDispatchContext)
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
        }
        case 'radio': {
            return (
                {...state,
                    radio: action.value
                }
            )
        }
        case 'select': {
            return (
                {...state,
                    select: action.value
                }
            )
        }
        case 'checkbox': {
            const value = (action.value === 'true') ? true : false;

            return (
                {...state,
                    checkbox: value
                }
            )
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}