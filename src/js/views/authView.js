
import React from "react";
import { LOGIN, SIGNUP } from "../queries";
import { Mutation } from "react-apollo";


const AuthView = (props) => {
    let email, password;
    return (
        <div className="hero is-fullheight is-bold is-primary">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-mobile is-centered">
                        <div className="column is-one-third-desktop is-half-tablet">

                            <div className="box">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control has-icons-right">
                                            <input className="input is-medium" 
                                                 ref={n => {email = n}}
                                                type="text" 
                                                placeholder="Enter your email" />
                                            <span className="icon is-small is-right">
                                                <span className="fa fa-envelope"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control has-icons-right">
                                            <input className="input is-medium" 
                                                ref={n => {password = n}}
                                                type="password" 
                                                placeholder="Enter your password" />
                                            <span className="icon is-small is-right">
                                                <span className="fa fa-lock"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div>&nbsp;</div>
                                    {
                                        props.failAlert &&
                                        <div className="notification has-text-danger">{props.failAlert}</div>
                                    }
                                        
                                    <div className="control field">
                                        <button className={`button is-primary is-fullwidth is-medium ${props.isLoading && "is-loading"}`}
                                                onClick={ () =>  props.primaryFn(email.value, password.value)  }>
                                            {props.primaryBtnText}
                                        </button>
                                    </div>

                                    <div className="control field">
                                        <button type="button"
                                                className="button is-text has-text-link is-fullwidth is-medium"
                                                onClick={e => props.secondaryFn()}>
                                            {props.secondaryBtnText}
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthView;