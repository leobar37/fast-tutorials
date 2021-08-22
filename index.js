function* fibonnacci() {
  let a = 1,
    b = 1;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}

let c = 0;
console.time();
for (const d of fibonnacci()) {
  console.log(d);
  if (c == 1000) {
    break;
  }
  c += 1;
}

console.timeEnd();
