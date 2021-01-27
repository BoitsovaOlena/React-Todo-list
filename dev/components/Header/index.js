import React from 'react';
import { NavLink } from 'react-router-dom';
import picture from './task2.png';
import styles from './style.css';

const Header = () => (
    <>
        <img className={styles.img} src={picture} alt="Task" />
        <header>
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <NavLink
                          activeStyle={{
                            color: 'grey'
                          }}
                          to="/"
                          exact
                        >
                            О продукте
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                          activeStyle={{
                            color: 'grey'
                          }}
                          to="/task"
                        >
                            Мои задачи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                          activeStyle={{
                            color: 'grey'
                          }}
                          to="/сontact"
                        >
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
    </>
);
export default Header;