function maxSum (array) {
    if(array.length === 0){
      return 0
    }
  
    return array[0] + maxSum(array.slice(1))
  }
  
  console.log(maxSum([1,2,3]));
  console.log(maxSum([4,6,-3,5,-2,1]));