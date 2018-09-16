import {GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO} from "../queries";
import {graphql} from "react-apollo";
import React from "react";
import MainView from "./mainView";
import LoadingView from "./loadingView";
import {client} from "../index";


class MainViewContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoText: "",
            todos: [],
        }
    }
    shouldComponentUpdate(newProps){
        if(newProps.data.error && !newProps.data.todos){
            newProps.history.push("/login");
            return false
        }
        return true;
    }

    componentDidUpdate(prevProps){
        if(this.props.data.todos !== prevProps.data.todos){
            this.setState({
                ...this.state,
                todos: [...this.props.data.todos]
            })
        }
    }

    componentDidMount(){
        this.props.data.refetch();
    }

    logout = () =>{
        localStorage.removeItem("x-auth");
        this.props.history.push("/login");
    }
    toggleEdit = (todo) => {
        let todosCopy = [...this.state.todos];
        let index = todosCopy.findIndex(x => x.id === todo.id);
        if(index < 0) return;
        todosCopy[index] = {...todo, "Symbol(id)":`TodoType:${todo.id}`, edit: !todo.edit};

        this.setState({
            ...this.state,
            todos: todosCopy
        })
    }

    updateTodoText = ({target}) => {
        this.setState({
            ...this.state,
            todoText: target.value
        })
    }

    addTodo = () => {
        client.mutate({
            mutation: ADD_TODO, 
            variables: {
                "text": this.state.todoText
            }
        })
        .then(({data}) => {
            this.props.data.refetch();
        })
        .catch(e => {
        })
        this.setState({...this.state, todoText: ""})
    }

    deleteTodo = (id) =>{
        client.mutate({
            mutation: DELETE_TODO,
            variables: { id }
        })
        .then(res => {
            this.props.data.refetch();
        });        
    }

    updateTodo = ({id, text, completed}) => {
        client.mutate({
            mutation: UPDATE_TODO, 
            variables: { id, text, completed }
        })
        .then(({data}) => {
        })
        .catch(e => {

        })

        let todosCopy = [...this.state.todos];
        let index = todosCopy.findIndex(x => x.id === id);
        if(index < 0) return;
        todosCopy[index] = {...todosCopy[index], text: text, completed: completed, pending: true};
        this.setState({ ...this.state,  todos: todosCopy });
    }

    render(){
        return(
            this.props.data.loading ?
                <LoadingView/> :
                <MainView logout={this.logout} 
                    toggleEdit={this.toggleEdit}
                    todoText={this.todoText}
                    updateTodoText={this.updateTodoText}
                    updateTodo={this.updateTodo}
                    addTodo={this.addTodo}
                    deleteTodo={this.deleteTodo}
                    todos={this.state.todos} />
        );
    }
}

export default graphql(GET_TODOS)(MainViewContainer);
