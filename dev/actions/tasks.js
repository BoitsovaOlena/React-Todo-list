export const addTask = (task) => ({ type: 'ADD_TASK', payload: task});
export const updateTask = (task) => ({ type: 'UPDATE_TASK', payload: task });
export const delTask = (taskId) => ({ type: 'DEL_TASK', payload: taskId });
