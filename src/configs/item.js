export class Item {
  static lastId = 0;

  constructor(description) {
    this.id = Item.lastId++;
    this.description = description;
    this.done = false;
  }
}
