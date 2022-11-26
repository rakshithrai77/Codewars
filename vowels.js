function getCount(str) {
    let vowels="aeiou";
    let count=0;
    for (let a of str)
      {
        count+=vowels.includes(a)?1:0;
      }
    return count;
  }