function filter(arr, predicate) {
    if(!arr.length){
      return []
    }
  
    if (predicate(arr[0])){
      return [arr[0],...filter(arr.slice(1), predicate)]
    }
  
    return filter(arr.slice(1), predicate)
  }
  
  console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x < 5))