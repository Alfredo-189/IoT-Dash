import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Collapse, CardBody, Card } from 'reactstrap';

class NavList extends Component {

    state = { 
        collapse: false,
        CurrentRoute: '/demo'
    }

    toggle = (e) => {
        e.preventDefault()
        this.setState({ collapse: !this.state.collapse })
    }

    storeRoute = (route) => {
        this.setState({ CurrentRoute: route })
    }

    render() {

        const { listDetail } = this.props
        const { CurrentRoute, collapse } = this.state

        let cardStyle = {
            background: '#292B42',
            borderLeft: '4px solid #17A9F3'
        }

        return (
            <li className="pos-relative" style={ collapse ? cardStyle : {} }>
                <NavLink
                    to = {CurrentRoute}
                    onClick={this.toggle}
                    className = "nav-link main-list"
                    style={ collapse ? { marginLeft: '6px'} : {} }
                >
                    <img className="mt--5" src={listDetail.icon} alt="dash"/>
                    <p className="fs--16">{listDetail.name}</p>
                    {
                        listDetail.bottomText &&
                        <p className="fs--14 ml--35">{listDetail.bottomText}</p>
                    }
                </NavLink>
                <Collapse isOpen={collapse}>
                    <Card className="collapse-card">
                        <CardBody className="pa--0">
                            {
                                listDetail.child &&
                                listDetail.child.map((e,i) => {
                                    return(
                                        <NavLink
                                            to = {e.routepath}
                                            className = "nav-link child-list"
                                            key={i}
                                            onClick={() =>this.storeRoute(e.routepath)}
                                        >
                                            {/* {
                                                e.icon &&
                                                <img src={e.icon} alt="icon"/>
                                            } */}
                                            <span className="mr--10 circle-icon"><i className="far fa-circle"></i></span>
                                            <span className="fs--14">{e.listname}</span>
                                        </NavLink>
                                    )
                                })
                            }
                        </CardBody>
                    </Card>
                </Collapse>
            </li>
        );
    }
}

export default NavList;