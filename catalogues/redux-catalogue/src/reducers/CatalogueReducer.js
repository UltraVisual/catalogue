export default (state = { }, action) => {
    switch (action.type) {
        case 'DATA_ACTION':
            return {
                data: action.payload
            }
        case 'SINGLE_DATA_ACTION':
            return {
                singleData: action.payload
            }
        default:
            return state
    }
}
