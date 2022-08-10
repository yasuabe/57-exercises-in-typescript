import * as readline from 'readline';

type callback = (s: string) => void;

const nonEmpty = (data: string): boolean => typeof data === "string" && data.trim().length > 0;

const input  = (f: (name: string, cb: callback) => void) =>
  (cb: callback) => f('What is the input string? ', cb);
const concat = (n: string) =>
  nonEmpty(n) ? `${n} has ${n.length} characters!` : "Error: need non empty string";

const output: callback = (s) => console.log(s);

function main() {
  let rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
  });
  input((s, cb) => rl.question(s, cb))((n) => {
    output(concat(n));
    rl.close();
  });
};
main();