let Storage = localStorage.getItem('TODOS');

const LIST = Storage ? JSON.parse(Storage): [];

const reducer = (store = LIST, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            store = [action.payload, ...store];
            localStorage.setItem('TODOS', JSON.stringify(store))
            return store;
        }
        case 'UPDATE_TASK': {
            store = store.map(task => (task.id === action.payload.id) ? action.payload : task);
            localStorage.setItem('TODOS', JSON.stringify(store))
            return store;
        }
        case 'DEL_TASK': {
            store = store.filter(task => task.id !== action.payload)
            localStorage.setItem('TODOS', JSON.stringify(store))

            return store;
        }
        default: {
            return store
        }
    }
} 

export default reducer;