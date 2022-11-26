var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catyears=0;
    let dogyears=0;
    if(humanYears>1)
      {
        catyears=15+9+(humanYears-2)*4;
        dogyears=15+9+(humanYears-2)*5;
      }
    else{
    dogyears=catyears=15;
    }
    
    return [humanYears,catyears,dogyears];
  }