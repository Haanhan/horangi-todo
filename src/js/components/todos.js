import React from "react";

export default class extends React.Component{
    render(){
        return (
            <div className="panel">
                <div className="panel-block">
                    
                    <p style={{flex: 1}}>{this.props.todo}</p>
                    
                    <button className="button is-text is-danger is-inverted">
                        <span className="icon">
                            <span className="fa fa-trash"></span>
                        </span>
                    </button>
                    
                </div>

                <div className="panel-block">
                    
                    <div style={{flex: 1}} className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input" value={this.props.todo} type="text"/>
                        </div>
                        <div className="control">
                            <button className="button">
                                <span className="icon">
                                    <span className="fa fa-times"></span>
                                </span>
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-primary">
                                <span className="icon">
                                    <span className="fa fa-check"></span>
                                </span>
                            </button>
                        </div>
                        
                    </div>
                    
                </div>

            </div>

        );
    }
}