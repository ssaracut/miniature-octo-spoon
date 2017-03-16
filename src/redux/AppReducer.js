const _initialState = {}

export default function (state = _initialState, action) {
    switch (action.type) {
        case 'LOAD_DATA':
            if (action.payload) {
                return { ...state, data: action.payload }
            }
            return state;
        default:
            return state;
    }
}