
const formatMoney = (m) => {
  m = parseFloat((m + '').replace(/[^\d\.]/g, '')).toFixed(2) + '';
  console.log(m);
}

console.log(formatMoney(120.123));

console.log(formatMoney(120));
console.log(formatMoney(1200000));