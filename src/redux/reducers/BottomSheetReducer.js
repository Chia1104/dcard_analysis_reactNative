const initialState = -1
export default function BottomSheetReducer (prevState = initialState, action) {
    const {type} = action
    switch (type) {
        case 'expanded':
            return prevState === 1
        case 'unexpanded':
            return prevState === -1
        default:
            return prevState
    }
}
