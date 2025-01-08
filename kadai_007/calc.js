let num = 11;
let A = num % 3;
let B = num % 5;
let C = num % 15;
switch (C) {
  case 0:
    console.log('3と5の倍数です');
    break;
  default:
    if(B === 0){
      console.log('5の倍数です');
    }
    else if(A === 0){
      console.log('3の倍数です');
    }
    else {
      console.log(num);
    }
    break;
}