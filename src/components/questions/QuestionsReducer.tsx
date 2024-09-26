
interface State {
    text: string;
    radio: string;
    select: string;
};

interface Action {
    type: 'text' | 'radio' | 'select'
};

const questions = {

};

function questionsReducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {
        case 'text':
            
            break;
    
        default:
            return state;
    }
}