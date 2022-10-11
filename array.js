const arr = [1, 'hello', { name: 'Shashank' }];

console.log(arr);

arr.push('yolo');

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let j = 0;
while (j < arr.length) {
  console.log(arr[j++]);
}

let k = 0;

do {
  console.log(arr[k++]);
} while (k < arr.length);

arr.forEach(element => {
  console.log(element);
});

arr.map((e, i) => {
  console.log(i, e);
});

let singleDigitNumbers = [1, 2, 10];

let filtered = singleDigitNumbers.filter(function (el) {
  return el < 10;
}); 

console.log(filtered);