import Storage from "./storage.js";

const todoStorage = new Storage({
  storage: localStorage, 
  key : 'todos'
});

export default todoStorage