function append(value, array = []) {
    array.push(value)
    return array
  }
  
  console.log(append(1))  // [1]
  console.log(append(2))  // [2], [1, 2]가 아니