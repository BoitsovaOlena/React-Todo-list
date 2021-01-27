import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { increment} from '../../actions/counter';
import Item from '../Item';
import Button from '../Button';
import styles from './style.css';

const List = () => {
	const tasks = useSelector(store => store.tasks);
	const counter = useSelector(store => store.counter);
	const dispatch = useDispatch();


	return (
		tasks.length ? (
			<>
				<ul className={styles.list}>
			{
				tasks 
					.filter((item, index) => ( index < counter))              
					.map(({text, id}) => (
						<Item 
							key={id} 
							id={id} 
							text={text} 
						/>
					))
			}
				</ul>
				<Button onClick = {() => dispatch(increment())}>
					{
					counter < tasks.length ? 'показать еще' : 'все задачи отображены'
					}
				</Button>
			</>
		) : (<></>)
    )

}
export default List;