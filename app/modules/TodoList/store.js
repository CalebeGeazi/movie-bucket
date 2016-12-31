import { computed, observable, action, autorun, extendObservable } from "mobx";
import storage from "../../libs/storage";

class Todo {
  movie;
  @observable priority = 0;
  @observable watched = false;
  @observable rating = 0;
  @observable comments = "";
  @observable onToWatchList = true;

  constructor(movie) {
    this.movie = movie;
  }
}


class TodoStore {
  @observable todos;
  @computed get toJson() {
    // The storage representation of the notes collection.
    return this.todos.slice();
  }

  constructor() {
    extendObservable(this, {
      todos: this.load()
    });

    this.persist();
  }

  @computed get watchedTodos() {
    return this.todos.filter(
      todo => todo.watched
    );
  }
  @computed get unwatchedTodos() {
    return this.todos.filter(
      todo => !todo.watched
    );
  }
  @action createTodo(movie) {
    this.todos.push(new Todo(movie));
  }

  @action toggleWatched(todo) {
    todo.watched = !todo.watched;
    console.log(todo.watched);
  }

  load() {
    return storage.get('TodoStore') || [];
  }
  persist() {
    // Whenever the Json representation of the todos changes, store them.
    autorun(() => {
      storage.set('TodoStore', this.toJson);
    });
  }
}

export default new TodoStore();
