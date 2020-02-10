function myArray(...args){
  let privateArr = [...args];

  const get = () => privateArr
  const append = item => {
    privateArr = [...privateArr, item]
    return privateArr
  }
  const prepend = item => {
    privateArr = [item, ...privateArr]
    return privateArr
  }

  const deleteItem = index => {
    privateArr = privateArr.filter((item, i) => index !== i)
    return privateArr
  }

  return {
    get,
    append,
    prepend,
    deleteItem,
  }
}


const sampleArray = myArray(5, 6, 8)

console.log(sampleArray.get())
console.log(sampleArray.append(900))
console.log(sampleArray.prepend(100))
console.log(sampleArray.deleteItem(2))