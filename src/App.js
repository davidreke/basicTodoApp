import React , {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: 'buy some milk' },
      {id: 2, content: 'finish redux lessons'}
    ]
  }

  addTodo = (todo) => {
    todo.id =Math.random();
    let newTodos = [...this.state.todos, todo]
    this.setState(
      {todos: newTodos}
    )
  }

  deleteTodo = (id) => {
    const newTodoList = this.state.todos.filter(todo => {return todo.id !==id})
    this.setState({
      todos: newTodoList
    })
  }

  render() {
    return (
      <div className="App">
       <h1 className='center blue-text'>Todo's</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
       <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
