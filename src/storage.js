const storage = localStorage

export const setItem = (key, value) => {
  try {
    storage.setItem(key, value)
  } catch(e){
    console.log(e.message);
  }
}

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;

  } catch(e) {
    console.log(e.message)
    return defaultValue
  }
}
