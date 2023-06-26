import generateUniqueId from "../utils/generateId.js";

export default class TodoItem {

  constructor({text, isCompleted=false}){
    if(typeof text !== "string"){
      throw new Error("todo의 내용은 string이어야 합니다.")
    }
    if(typeof isCompleted !== "boolean"){
      throw new Error("todo의 isCompleted멤버 변수가 boolean값이 아닙니다.")
    }

    this.id = generateUniqueId();
    this.text = text;
    this.isCompleted = isCompleted;
  }
}