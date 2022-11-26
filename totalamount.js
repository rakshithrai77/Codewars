function points(games) {
    let sum=0;
    for (let item of games)
      {
        if(Number(item[0])>Number(item[2]))
          sum+=3;
        else if(Number(item[0])===Number(item[2]))
          sum+=1;
      }
    return sum;
  }