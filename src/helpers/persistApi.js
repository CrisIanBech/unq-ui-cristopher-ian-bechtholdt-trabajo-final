const save = (key, value) => {
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
  
    localStorage.setItem(key, value);
  }
  
const get = (key) => {
    const value = localStorage.getItem(key);
  
    if (!value) {
      return null;
    }
  
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }
  
  const remove = (key) => {
    localStorage.removeItem(key);
  }

  export { get, remove, save };
