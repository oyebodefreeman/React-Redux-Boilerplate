
const initialState = {
    count: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_NUMBER":
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}