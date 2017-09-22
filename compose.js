function compose(fn) {
  return function(x) {
    const last = fn.pop();
    return fn.reduce((curr, pre) => {
      return pre(curr(x));
    }, last);
  };
}

function add(x) {
  return x + 1;
}
function double(x) {
  return x * x;
}
const ans = compose([double, add])(2);

console.log(ans, ans === 9);
