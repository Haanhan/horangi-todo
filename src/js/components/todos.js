import React from "react";

const TodoItem = ({todo, updateTodo, deleteTodo,toggleEdit}) => {
    let checkClass = todo.pending ? 
        "fa fa-spinner fa-spin" :
        todo.completed ? 
        "fa fa-check-circle" : 
        "far fa-circle"

    return(
    <a className="panel-block">
        <span className="is-size-4 has-text-info inline-s cursor-pointer" 
            onClick={()=>{updateTodo({...todo, completed: !todo.completed})}}>
            <span className={checkClass}></span>
        </span>
        
                    
        <p  onClick={()=>{toggleEdit(todo)}}
            className={todo.completed ? "has-text-grey-light flex-1" : "flex-1"}>
            {todo.text} 
        </p>
        
        <button className="button is-text is-danger is-inverted"
            onClick={() => {deleteTodo(todo.id)}}>
            <span className="icon">
                <span className="fa fa-trash"></span>
            </span>
        </button>
        
    </a>
  )
}

const TodoEdit =({todo, updateTodo, toggleEdit})=> {
    let inputVal = todo.text;
    return(
    <div className="panel-block">
        <div className="field has-addons flex-1">
            <div className="control is-expanded">
                <input className="input" 
                defaultValue={inputVal} 
                onKeyPress={e=> {e.key === "Enter" ? (()=>{ updateTodo({...todo, text: inputVal}); toggleEdit(todo)})() : {}}}
                onChange={e=>{inputVal = e.target.value}} 
                type="text"/>
            </div>
            <div className="control">
                <button className="button" onClick={()=>{toggleEdit(todo); inputVal = ""}}>
                    <span className="icon">
                        <span className="fa fa-times"></span>
                    </span>
                </button>
            </div>
            <div className="control">
                <button className="button is-primary" onClick={()=>{updateTodo({...todo, text: inputVal}); toggleEdit(todo)}}>
                    <span className="icon">
                        <span className="fa fa-check"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
)}

const Todos = ({todos, updateTodo, deleteTodo, toggleEdit}) => 
(   
    <div className="panel">        
    {
        todos.map(todo => todo.edit? 
            <TodoEdit key={todo.id} 
                todo={todo}
                toggleEdit={toggleEdit}
                updateTodo={updateTodo}/> : 
            <TodoItem key={todo.id} 
                todo={todo} 
                toggleEdit={toggleEdit}
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo}/>)
    }
    </div>
)

export default Todos;