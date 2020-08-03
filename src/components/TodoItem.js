export default class TodoItem {
  constructor(todoText) {
    this.task = todoText;
    this.id = Date.now();
    this.completed = false;
  }
}
