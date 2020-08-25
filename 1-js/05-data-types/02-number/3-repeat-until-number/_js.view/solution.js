
function readNumber() {
  let num;

  do {
    num = prompt("Моля въведете число:", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;
  
  return +num;
}