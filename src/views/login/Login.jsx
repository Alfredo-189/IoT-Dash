import React, { Component } from 'react';
import { loginLeftBottomBlock, logindesign1, logindesign2, logindesign3 } from 'helper/constant'
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from 'redux/auth/actions';
import enhancer from "helper/formvalidation/loginFormValidation";

const {login} = AuthActions

class Login extends Component {

    handleLoginMethod = (e) => {
        e.preventDefault();
        let { values, isValid, handleSubmit } = this.props

        if(isValid) {
            console.log('Here is your form value', values)

            const data = {
                token: 'DEMOJWTTOKEN'
            }
            // using this method you can store token in redux
            this.props.login(data)
            this.props.history.push('/dashboard')

        }
        handleSubmit()
    }

    render() {

        const {
            handleChange,
            handleBlur,
            errors,
            touched,
            submitCount
        } = this.props;

        
        const Error = (props) => {
            const field1 = props.field;
                if ((errors[field1] && touched[field1]) || submitCount > 0) { return (<span className={props.class ? props.class : "error-msg"} >{errors[field1]}</span>) }

            else { return (<span></span>) }
        };

        return (
            <div className="login-container flex">
               <div className="left-side">
                    <div className="title color-white fs--20">
                        <div>ELASTIC FLEET</div>
                        <div className="bottom-block">
                            <img src={loginLeftBottomBlock} alt="loginblock"/>
                            <div className="text-block">
                                <div className="main-text fs--18">
                                    Vehicle Tracking For Your Field Service Business
                                </div>
                                <div className="sub-text fs--14">
                                    The smartest way to stay secure and keep an eye on your equipment
                                </div>
                                <div className="visit-website-button">
                                    VISIT WEBSITE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="back-horizontle-image">
                        <div className="horizontal-text-block">
                            <div className="fs--20 mb--20">
                                ELASTIC FLEET
                            </div>
                            <div className="main-text fs--18">
                                Vehicle Tracking For Your Field Service Business
                            </div>
                            <div className="sub-text fs--14">
                                The smartest way to stay secure and keep an eye on your equipment
                            </div>
                            <div className="visit-website-button">
                                VISIT WEBSITE
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <img className="design1" src={logindesign1} alt="ds1"/>
                        <img className="design2" src={logindesign2} alt="ds2"/>
                        <img className="design3" src={logindesign3} alt="ds3"/>
                        <div className="form-title fs--24">
                            Hello, Welcome!
                        </div>
                        <div className="form-disc fs--14 mt--10">
                            Log in to your account to get back to your vehicle tracking.
                        </div>
                        <div className="mt--24">
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control app-form-input" 
                                    aria-describedby="emailHelp" 
                                    placeholder="E-mail"
                                    id="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Error field="email" />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control app-form-input" 
                                    placeholder="Password" 
                                    autoComplete=""
                                    id="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                 <Error field="password" />
                            </div>
                            <div className="login-button" onClick={this.handleLoginMethod}>
                                LOG IN
                            </div>
                            <div className="mt--20">
                                Forgot your password ?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    enhancer,
    connect(null, {login})
)(Login);