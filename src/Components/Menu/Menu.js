import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/menu.scss';
import { FcTodoList, FcStatistics, FcAbout } from 'react-icons/fc';
import { BsArrowLeftRight } from 'react-icons/bs';
import { IconContext } from "react-icons";

const Menu = () => {
    const [shortMenu, setShortMenu] = useState(false);
    const changeMenu = () => {
        setShortMenu(!shortMenu);
    }
    return (
        <div className={shortMenu ? 'menu-wrapper-short' :'menu-wrapper-large'}>
            <div onClick={changeMenu}>
                <IconContext.Provider  value={{ size: '2em', color: 'grey' }}>
                    <BsArrowLeftRight />
                </IconContext.Provider>
            </div>
            {
                shortMenu ? (
                    <>
                        <NavLink to="/">
                            <IconContext.Provider value={{ size: '3em' }}>
                                <FcAbout />
                            </IconContext.Provider>
                        </NavLink>
                        <NavLink to="/todo">
                            <IconContext.Provider value={{ size: '3em' }}>
                                <FcTodoList />
                            </IconContext.Provider>
                        </NavLink>
                        <NavLink to="/statistic">
                            <IconContext.Provider value={{ size: '3em' }}>
                                <FcStatistics />
                            </IconContext.Provider>
                        </NavLink>
                    </>
                ) : (
                    <div className='link-wrapper'>
                        <NavLink to="/">
                            <IconContext.Provider value={{ size: '3em' }}>
                                <FcAbout />
                            </IconContext.Provider>
                            <h1>Main</h1>
                        </NavLink>
                        <NavLink to="/todo">
                            <IconContext.Provider value={{ size: '3em' }}>
                                <FcTodoList />
                            </IconContext.Provider>
                            <h1>To Do List</h1>
                        </NavLink>
                        <NavLink to="/statistic">
                            <IconContext.Provider value={{ size: '3em' }}>
                                <FcStatistics />
                            </IconContext.Provider>
                            <h1>Statistic</h1>
                        </NavLink>
                    </div>
                )
            }
        </div >
    )
}

export default Menu