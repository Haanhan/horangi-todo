import React from "react";
import Todos from "../components/todos";
import { connect } from "react-redux";

class MainView extends React.Component{
    render(){
        console.log(this.props);
        console.log(this.state);
        return(
            <div className="container">
                <section className="section">
                    <h3 className="title is-3 is-centered">{this.props.email}'s To-do List</h3>
                    

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
}

const mapStateToProps = (state) => {
    return {
        email: state.user.email
    }
}

export default connect(mapStateToProps)(MainView);