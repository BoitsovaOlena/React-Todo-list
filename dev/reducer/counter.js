const reducer = (store = 2, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return store + 2;
        }
        // case 'DECREMENT': {
        //     return store - 1;
        // }
        // case 'CHANGE': {
        //     return store + action.payload
        // }
        default: {
            return store;
        }
    }
};

export default reducer;