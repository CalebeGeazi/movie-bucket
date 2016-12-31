import React from "react"
import { observer, inject } from "mobx-react"
import TodoInfo from "./components/todoInfo";

@inject('todoStore') @observer
export default class TodoList extends React.Component {
  toggleWatched = (todo) => {
    this.props.todoStore.toggleWatched(todo);
  }

  render() {
    const { todos, unwatchedTodos } = this.props.todoStore;
    const todoLis = unwatchedTodos ? unwatchedTodos.map((todo, i) => (
      <div key={todo.movie.data.id} className="col-lg-1 col-md-2 col-sm-3 col-xs-4 movieInfo-snippet">
        <TodoInfo todo={todo} type="snippet" toggleWatched={this.toggleWatched} />
      </div>
    )) : "";

    return (
      <div>
        {todoLis}
      </div>
    )
  }
}
