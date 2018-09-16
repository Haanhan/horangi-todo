import Todos from "../components/todos";
import React from "react";
const MainView = ({
    logout, 
    updateTodoText, 
    addTodo, 
    todos, 
    updateTodo, 
    deleteTodo, 
    toggleEdit,
    todoText
}) => {
    return(
        <div className="container">
            <section className="section">
                <div className="level">
                    <h3 className="title is-3 level-left">To-do List</h3>
                    <button onClick={logout} className="button level-right">Sign out</button>
                </div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input
                            value={todoText}
                            onKeyPress={e=> {e.key === "Enter" ? addTodo() : {}}}
                            onChange={updateTodoText}
                            className="input is-large" type="text"/>
                    </div>
                    <div className="control">
                        <button className="button is-primary is-large"
                            onClick={addTodo} >
                            <span className="fa fa-plus"></span>
                        </button>
                    </div>
                </div>

                <div className="notification">
                    <span className="far fa-lightbulb"></span> Tip: Click on to-do item to edit.
                </div>

                <Todos todos={todos} 
                toggleEdit={toggleEdit}
                updateTodo={updateTodo} 
                deleteTodo={deleteTodo} />
            
            </section>
        </div>
    );
}


export default MainView;