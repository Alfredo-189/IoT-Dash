import React, { Component } from 'react';
import NavList from './NavList';
import { sidebarData } from './SidebarData'
import { Help, Language } from 'helper/constant'
import { NavLink } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

class Sidebar extends Component {

    render() {
        return (
            <div
                id = "sidebar"
                className = "sidebar sideBack"
            > 
                <div className="sidebar-header">
                    IoT Eye
                </div>
                <div className="sidebar-wrapper">
                    <Scrollbars style={{ height: 'calc(100vh - 75px)' }} autoHide>
                        <ul className="nav">
                            {
                                sidebarData.map((e,i) => {
                                    return(
                                        <NavList listDetail={e} key={i}/>   
                                    )
                                })
                            }
                            <li className="pos-relative">
                                <NavLink
                                    to = {'/'}
                                    onClick={(e) => e.preventDefault()}
                                    className = "nav-link main-list"
                                >
                                    <p className="fs--16">Help</p>
                                </NavLink>
                            </li>
                            <li className="pos-relative">
                                <NavLink
                                    to = {'/help'}
                                    className = "nav-link main-list"
                                >
                                    <img className="mt--5" src={Help} alt="help"/>
                                    <p className="fs--16">Help</p>
                                </NavLink>
                            </li>
                            <li className="pos-relative">
                                <NavLink
                                    to = {'/language'}
                                    className = "nav-link main-list"
                                >
                                    <img className="mt--5" src={Language} alt="language"/>
                                    <p className="fs--16">Language</p>
                                </NavLink>
                            </li>
                        </ul>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export default Sidebar;