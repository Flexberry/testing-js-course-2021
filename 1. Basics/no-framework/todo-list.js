import TodoItem from './todo-item.js';

class TodoList {

  /* names: [
      {
        name: 'Сврить борщ',
        isDone: false
      },
      {
        name: 'Сходить в тренажерный зал',
        isDone: false
      }
    ]
  */

  constructor(names = []) {
    this.items = names.map((name) => new TodoItem(name));
  }

  addItem(name) {
    this.items.push(new TodoItem(name));
  }

  done(index) {
    this.items[index].done();
  }

  clear() {
    this.items = this.items.filter((item) => !item.isDone);
  }
}

export default TodoList;
