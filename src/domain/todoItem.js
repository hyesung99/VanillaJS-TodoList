import generateUniqueId from "../utils/generateId.js";

export default class TodoItem {

  #id; #text; #isCompleted;

  constructor({id, text, isCompleted=false}){
    if(typeof text !== "string"){
      throw new Error("todo의 내용은 string이어야 합니다.")
    }
    if(typeof isCompleted !== "boolean"){
      throw new Error("todo의 isCompleted멤버 변수가 boolean값이 아닙니다.")
    }

    if(!id) this.#id = generateUniqueId();
    this.#text = text;
    this.#isCompleted = isCompleted;
  }

  get id(){
    return this.#id
  }
  get text(){
    return this.#text
  }
  get isCompleted(){
    return this.#isCompleted
  }

  set id(newId){
   this.#id = newId 
  }
  set text(newText){
    if(typeof newText !== "string"){
      throw new Error("todo의 내용은 string이어야 합니다.")
    }
   this.#text = text
  }
  set isCompleted(newIsCompleted){
    if(typeof newIsCompleted !== "boolean"){
      throw new Error("todo의 isCompleted멤버 변수가 boolean값이 아닙니다.")
    }
   this.#isCompleted = newIsCompleted
  }
}