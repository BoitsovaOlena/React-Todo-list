import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form';
import Button from '../Button';
import Icon from '../Icon';
import styles from './style.css';
import { delTask} from '../../actions/tasks';


const Item = ({text, id}) => {
    const [isShowForm, changeIsShow] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        changeIsShow(false)
    }, [text, id])

    return (
        <li className={styles.item}>
            {
                isShowForm ? (
                    <Form 
                        item = {{id, text}}
                    />
                ) : (
                    <>
                        <p>{text}</p>
                        <Button type = "small" onClick={() => changeIsShow(!isShowForm)}>
                            <>
                                <span>Редактировать</span>
                                <Icon name="edit" />
                            </>
                        </Button>
                        <Button type = "small" onClick = {() => dispatch(delTask(id))}>
                            <>
                                <span>Удалить</span>
                                <Icon name="delete" />
                            </>
                        </Button>
                        {/* <Button type = "small" >Выполнено</Button> */}
                    </>
                )
            }

        </li>
    )

}

export default Item;