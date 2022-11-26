const rps = (p1, p2) => {
    let a='scissors,paper paper,rock rock,scissors';
    let pw1=a.includes(p1+','+p2);
    return p1==p2 ? "Draw!":(pw1? "Player 1 won!":"Player 2 won!");
  }