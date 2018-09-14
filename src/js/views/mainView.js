import Todos from "../components/todos";
import React from "react";
const MainView = (props) => {
    return(
        <div className="container">
            <section className="section">
                <div className="level">
                    <h3 className="title is-3 level-left">To-do List</h3>
                    <button onClick={props.logout} className="button level-right">Sign out</button>
                </div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input is-large" type="text"/>
                    </div>
                    <div className="control">
                        <button className="button is-primary is-large">
                            <span className="fa fa-plus"></span>
                        </button>
                    </div>
                </div>

                <Todos/>
            
            </section>
        </div>
    );
}


export default MainView;