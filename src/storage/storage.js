export default class Storage{
  storage;
  key;

  constructor({storage, key}){
    this.storage = storage
    this.key = key
  }

  getItem(){
    return JSON.parse(this.storage.getItem(this.key)) || [];
  }

  setItem(value){
    this.storage.setItem(this.key,value)
  }
}