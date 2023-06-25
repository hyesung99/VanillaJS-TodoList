import generateUniqueId from "../utils/generateId.js";

export default class TodoItem {

  constructor(text){
    this.id = generateUniqueId();
    this.text = text;
    this.isCompleted = false;
  }

}