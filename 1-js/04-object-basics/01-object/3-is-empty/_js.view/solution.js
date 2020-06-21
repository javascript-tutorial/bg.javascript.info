function isEmpty(obj) {
  for (let key in obj) {
    // ако цикълът е стартирал, има свойство
    return false;
  }
  return true;
}
