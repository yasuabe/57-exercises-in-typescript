import * as readline from 'readline';

type callback = (s: string) => void;

const input  = (f: (name: string, cb: callback) => void) =>
  (cb: callback) => f('What is your name?', cb);
const concat = (n: string) => `Hello, ${n}, nice to meet you!`;
const output: callback = (s) => console.log(s);

function main() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  input((s, cb) => rl.question(s, cb))((n) => {
    output(concat(n));
    rl.close();
  });
};
main();