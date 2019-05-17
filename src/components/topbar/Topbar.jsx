import React, { Component, Fragment } from 'react';
import { userImage, downloadIcon, selectMenuarrow } from 'helper/constant';
import Select, { components } from 'react-select';
import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from 'redux/auth/actions';
import { withRouter } from "react-router-dom";
import { Popover, PopoverBody } from 'reactstrap';

const { logout } = AuthActions

const DropdownIndicator = (props) => {
    return components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {
          props.isFocused ?
            <img className="mr-10" src={selectMenuarrow} alt="arrow" /> :
            <img className="mr-10" src={selectMenuarrow} alt="arrow" />
        }
      </components.DropdownIndicator>
    );
};

const colourStyles = {
    control: styles => ({
      ...styles,
      border: 0,
      borderRadius: '5px',
      fontSize: '13px',
      fontFamily: 'open-sans'
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        color: '#3D4060',
        padding: '15px 10px',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    }
};

const selectOptions = [
    {
        id: 1,
        option: 'Default'
    },
    {
        id: 2,
        option: 'option2'
    },
    {
        id: 3,
        option: 'option3'
    }
]
  
  

class Topbar extends Component {

    state = {
        profilePopover: false,
        selectedoption: 1
    }

    userSignout = () => {
        this.props.logout()
    }

    selectOptionsMethod = (selected) => {
        this.setState({selectedoption: selected.id})
    }

    profilePopovertoggle = () => {
        this.setState({
            profilePopover: !this.state.profilePopover
        })
    }

    render() {

        console.log(this.props.location.pathname)
        const {selectedoption} = this.state
        
        return (
                <div className="headerBack">
                    <ul className="list-inline ma--0 flex align-center">
                        <li className="list-inline-item ml--10">
                            {/* <div className="mini-drawer-menu-icon">
                                <span className="topbar-app-title fs--32">FLEET TRACKING</span>
                            </div> */}
                        </li>
                        {
                            (this.props.location.pathname !== '/dashboard' && this.props.location.pathname !== '/send-notifications') &&
                            <Fragment>
                                <li className="list-inline-item cursor-pointer mr--35 ml-auto">
                                    <img src={downloadIcon} alt="download"/>
                                </li>
                                <li className="list-inline-item cursor-pointer mr--35">
                                    <Select
                                        styles={colourStyles}
                                        name="colors"
                                        components={{ DropdownIndicator }}
                                        placeholder="Select option"
                                       onChange={this.selectOptionsMethod}
                                        getOptionLabel={(option) => option.option}
                                        getOptionValue={(option) => option.id}
                                        value={selectOptions.filter(option => option.id === selectedoption)}
                                        options={selectOptions}
                                        className="basic-select"
                                        classNamePrefix="custom-select"
                                    />
                                </li>
                            </Fragment>
                        }
                        {/* <li className={classNames(
                            'list-inline-item', 
                            'cursor-pointer', 
                            'mr--35', 
                            (this.props.location.pathname === '/dashboard' || this.props.location.pathname === '/send-notifications') && 'ml-auto'
                        )}>
                            <img src={envelop} alt="envelop"/>
                        </li>
                        <li className="list-inline-item cursor-pointer mr--35">
                            <img src={bellIcon} alt="bell"/>
                        </li> */}
                        <li className="list-inline-item cursor-pointer">
                            <img id="profilePopover" onClick={this.profilePopovertoggle} className="user-proifle-icon" src={userImage} alt="user"/>
                        </li>
                    </ul>
                    <Popover 
                        className="language-popover-width" 
                        placement="bottom" 
                        isOpen={this.state.profilePopover} 
                        target="profilePopover" 
                        toggle={this.profilePopovertoggle}
                        trigger="hover"
                    >
                        <PopoverBody className="pa--0">
                            <div className="container-fluid grid-popover pa--0">
                                <ul className="list-inline plr--10 ma--0 cursor-pointer" onClick={this.userSignout}>
                                    <li className="list-inline-item pa--5">
                                        <i className="fas fa-sign-out-alt"></i>
                                    </li>
                                    <li className="list-inline-item pa--5">
                                       Logout
                                    </li>
                                </ul>   
                            </div>
                        </PopoverBody>
                    </Popover>
                </div>
        );
    }
}

export default compose(
    withRouter,
    connect(null, {logout})
)(Topbar);