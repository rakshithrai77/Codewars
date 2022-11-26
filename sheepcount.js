function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum=0;
    arrayOfSheep.filter((item)=>{
      if (item===true)
      {
        sum+=1
      }
      return item;})
      return sum;
  }