const initialState = {
    a: 1,
    b: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_A':
            return {
                ...state,
                a: state.a + state.b
            }
        case 'UPDATE_B':
            return{
                ...state,
                b:state.a+state.b
            }
        default:
            return state
    }
}

export default reducer;