// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

// Write a program that prints numbers from 1 to 100. Except, for the multiples of three, print "google" and for the multiples of five, print "facebook". And, for the multiples of both, print "amazon".  Please answer with the stackblitz link.

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log('google');
  } else if (i % 5 == 0) {
    console.log('facebook');
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log('amazon');
  } else {
    console.log(i);
  }
}
