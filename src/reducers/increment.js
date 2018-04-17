const initialState = {
    count: 1
};

export default function changeCount(state = initialState, action) {
    switch (action.type) {
        case 'INC':
            return {...state, count: state.count + 1};
        case 'DEC':
            return {...state, count: state.count--};
        default:
            return state;
    }
}