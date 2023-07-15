export const isSqaure = (n: number): boolean => {
  if (n < 0) return false;
  if (n === 0) return true;

  let left = 2;
  let right = Math.floor(n / 2);

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid ** 2;

    if (square == n) return true;
    else if (square < n) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};

console.log(isSqaure(-1));
console.log(isSqaure(0));
console.log(isSqaure(3));
console.log(isSqaure(4));
console.log(isSqaure(25));
console.log(isSqaure(26));
