let lastId = 0;

export default class TodoItem {
  constructor(todoText) {
    // set fields
    this.task = todoText;
    this.id = Date.now();
    this.completed = false;

    // verify uniqueness and save
    if (this.id <= lastId) {
      this.id = lastId + 1;
    }
    lastId = this.id;
  }
}
