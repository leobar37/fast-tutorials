const sumFactory = () => {
  return (a, b) => {
    return a + b;
  };
};

const a = sumFactory();
const b = sumFactory();

console.log(a === b);
console.log(a === a);
console.log(b === b);
