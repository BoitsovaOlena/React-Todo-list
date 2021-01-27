import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import styles from './style.css';

const Product = () => (
    <div className={styles.wrapp}>
        <p>Привет!</p>
        <p>Используй То-до list чтобы не забыть о важных делах, встречах или звонках. Или просто чтобы составить список покупок.</p>
        <Button >
            <Link to="/task">Попробуй сейчас</Link>
        </Button>
    </div>
);
export default Product;