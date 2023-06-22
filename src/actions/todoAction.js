import { setItem, getItem } from "../storage.js";

export const getTodosFromStorage = () => {
  return getItem('todos', [])
};

export const setTodosToStorage = (newTodoList) => {
  setItem('todos', JSON.stringify(newTodoList))
};