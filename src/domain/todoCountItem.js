export default class TodoCountItem{
  #totalTodoCount;
  #completedTodoCount;

  constructor({totalTodoCount, completedTodoCount}){

    if(typeof totalTodoCount !== "number" && completedTodoCount !== "number" ){
      throw new Error("TodoCountItem의 인자는 number를 필요로 합니다")
    }

    this.#totalTodoCount = totalTodoCount
    this.#completedTodoCount = completedTodoCount
  }
  get totalTodoCount(){
    return this.#totalTodoCount
  }
  get completedTodoCount(){
    return this.#completedTodoCount
  }
}