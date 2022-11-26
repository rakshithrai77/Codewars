function positiveSum(arr) {
    let sum=0;
    for(let item of arr)
      {
         sum= item < 0 ? sum : sum+item;
      }
    return sum;
  }