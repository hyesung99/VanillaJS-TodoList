import TodoCountItem from '../domain/todoCountItem.js'
import todoStorage from '../storage/todoStorage.js';

export default class TodoCountItemsHandler{
  #todoCountItem;

  constructor(){
    this.updateTodoCount()
  }
  
  updateTodoCount(){
    const todoData = todoStorage.getItem()
    this.#todoCountItem = new TodoCountItem({
      totalTodoCount : todoData.length,
      completedTodoCount: todoData.filter((todo) => todo.isCompleted === true).length
    })
  }

  get totalTodoCount(){
    return this.#todoCountItem.totalTodoCount
  }

  get completedTodoCount(){
    return this.#todoCountItem.completedTodoCount
  }

  get todoCount(){
    return {
      totalTodoCount : this.#todoCountItem.totalTodoCount,
      completedTodoCount : this.#todoCountItem.completedTodoCount
    }
  }
}