import React from "react"
import { observer, inject } from "mobx-react"

@inject('todoStore') @observer
export default class TodoList extends React.Component {
  toggleWatched = (todo) => {
    this.props.todoStore.toggleWatched(todo);
  }
  render() {
    console.log(this.props);
    const { unwatchedTodos } = this.props.todoStore;
    if (unwatchedTodos) {
      var todoLis = unwatchedTodos.map((todo, i) => (
        <li key={todo.movie.data.id}>
          {console.log(todo)}
          <input
            type="checkbox"
            value={todo.watched}
            checked={todo.watched}
            onChange={() => this.toggleWatched(todo)}/>
          {todo.movie.data.title}
        </li>
      ));
    }
    return (
      <div>
        <h1>Todos</h1>
        <ul>{todoLis}</ul>
      </div>
    )
  }
}
