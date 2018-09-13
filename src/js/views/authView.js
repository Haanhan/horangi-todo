
import React from "react";
const AuthView = (props) => {
    return (
        <div className="hero is-fullheight is-bold is-primary">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-mobile is-centered">
                        <div className="column is-one-third-desktop is-half-tablet">

                            <div className="box">
                                <form>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control has-icons-right">
                                            <input className="input is-medium" type="text" placeholder="Enter your email" />
                                            <span className="icon is-small is-right">
                                                <span className="fa fa-envelope"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control has-icons-right">
                                            <input className="input is-medium" type="password" placeholder="Enter your password" />
                                            <span className="icon is-small is-right">
                                                <span className="fa fa-envelope"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div>&nbsp;</div>
                                        
                                    <div className="field">
                                        <div className="control field">
                                            <button className="button is-primary is-fullwidth is-medium">Sign in</button>
                                        </div>
                                    </div>
                                

                                    <div className="control field">
                                        <button className="button is-fullwidth is-medium">Create new account</button>
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