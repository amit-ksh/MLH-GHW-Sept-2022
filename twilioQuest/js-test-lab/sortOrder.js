const first = process.argv[2].toLowerCase();
const second = process.argv[3].toLowerCase();

if (first < second) {
  console.log(-1);
} else if (first === second) {
  console.log(0);
} else {
  console.log(1);
}
