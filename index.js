let d = 2;

let c = 2;

console.log(d == c);

let dc = { key: 1, val: 2 };
let dj = { key: 1, val: 2 };

if (dj !== dc) {
}

dc = {
  ...dc,
  key: 4,
};

console.log(dc);
console.log(dj);

console.log(dc === dj);
