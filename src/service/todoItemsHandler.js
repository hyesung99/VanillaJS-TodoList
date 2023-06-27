import TodoItem from "../domain/todoItem.js";
import todoStorage from "../storage/todoStorage.js";

export default class TodoItemsHandler {
  #todoItems;
  constructor() {
    const initialTodoItems = todoStorage.getItem()
    if(initialTodoItems.length > 0){
      this.#todoItems = initialTodoItems.map((todoItem)=>
        todoItem = new TodoItem({
          text : todoItem.text,
          isCompleted : todoItem.isCompleted,
        })
      )
    }else{
      this.#todoItems = [];
    }
  }

  addTodo({text}) {
    this.#todoItems.push(new TodoItem({text, isCompleted:false}))
    todoStorage.setItem(this.todoItemsToJSON())
  }
  
  deleteTodo({targetId}){
    this.#todoItems = this.#todoItems.filter((todo) => "todo-item-"+todo.id !== targetId);
    todoStorage.setItem(this.todoItemsToJSON())
  }
  
  toggleTodo({targetId}){
    const targetTodo = this.#todoItems.find(todo => "todo-item-"+todo.id === targetId)
    if(targetTodo) {
      targetTodo.isCompleted = !targetTodo.isCompleted
    }
    todoStorage.setItem(this.todoItemsToJSON())
  }

  todoItemsToJSON(){
    return this.#todoItems.map((todoItem)=> todoItem = {
      id : todoItem.id,
      text : todoItem.text,
      isCompleted : todoItem.isCompleted,
    })
  }

  get todoItems(){
    return this.#todoItems
  }

  set todoItems(newTodoItems){
    this.#todoItems = newTodoItems
  }
}