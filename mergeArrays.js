function mergeArray(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
  
    while(current < (arr1.length + arr2.length)) {
      let unmerged1 = arr1[index1];
      let unmerged2 = arr2[index2];
  
      if(unmerged1 < unmerged2) {
        merged[current] = unmerged1;
        index1++;
      }
      else {
        merged[current] = unmerged2;
        index2++;
      }
  
      current++;
    }
    return merged;
  }
  
  console.log(mergeArray([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]))