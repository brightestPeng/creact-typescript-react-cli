import todoStore from "./todo-store";

class RootStore {
  todoStore: todoStore;
  constructor() {
    this.todoStore = new todoStore();
  }
}

export default RootStore;
