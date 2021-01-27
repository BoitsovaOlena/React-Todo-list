import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import styles from './style.css';
import { updateTask, addTask } from '../../actions/tasks';

const Form = ({item})  => {
    const [text, changeText] = useState(item?.text || '');

    const dispatch = useDispatch();

    const taskChange = (e) => {
        changeText(e.target.value)
    }
    const taskSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: item?.id ||  Date.now(),
            text,
        }
        item ? dispatch(updateTask(newTask)) : dispatch(addTask(newTask))
        changeText('')
    }
    return (
        <form className={styles.form} onSubmit={taskSubmit}>
            <input 
                type="text" 
                id="name" 
                name="text" 
                placeholder="новая задача" 
                value = {text} 
                onChange = {taskChange}
            />
            <Button>Добавить</Button>
        </form>
    )
}
export default Form;