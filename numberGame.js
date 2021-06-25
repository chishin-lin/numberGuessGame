//answer 0~99
let answer = Math.floor(Math.random() * 100);

let n1 = 0;
let n2 = 99;
while (true) {
  let guess = prompt(
    `Make your guess:(the Number is between : ${n1} ~ ${n2}).`
  );
  //超過99或小於0就提釋字窗，並繼續執行此迴圈(使用continue)
  if (guess < n1 || guess > n2) {
    alert("Please make a valid input.");
    continue;
  }

  if (guess == answer) {
    alert(`The Answer is ${answer} !`);
    alert("You win the game!");
    break;
  } else if (guess <= answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
