import { observable, computed } from "mobx";

class todoStore {
  @observable list: Array<any>;
  constructor() {
    this.list = [];
  }

  addItem() {}
  deleteItem() {}
  changeItem() {}
  searchItem() {}
}

export default todoStore;
