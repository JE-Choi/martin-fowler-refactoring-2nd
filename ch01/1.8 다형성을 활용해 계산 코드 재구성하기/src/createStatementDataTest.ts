import createStatementData from "./createStatementData";
import {invoices} from "../data/invoices.js";
import {plays} from "../data/plays.js";
export const createStatementDataTest = (): void => {
  const result = createStatementData(invoices[0]!, plays);
  console.log(result.performances!.length);

  for (let i = 0; i < result.performances.length; i++) {
    let ss = equals(result.performances[i], expectResult[i]);
    console.log(ss);
  }
};

const expectResult = [
  {
    playID: "hamlet",
    audience: 55,
    play: {name: "Hamlet", type: "tragedy"},
    amount: 65000,
    volumeCredits: 25,
  },
  {
    playID: "as_like",
    audience: 35,
    play: {name: "As You Like It", type: "comedy"},
    amount: 58000,
    volumeCredits: 12,
  },
  {
    playID: "othello",
    audience: 40,
    play: {name: "Othello", type: "tragedy"},
    amount: 50000,
    volumeCredits: 10,
  },
];

function equals(x, y) {
  if (x === y) return true;
  // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false;
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    // other properties were tested using x.constructor === y.constructor

    if (!y.hasOwnProperty(p)) return false;
    // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) continue;
    // if they have the same strict value or identity then they are equal

    if (typeof x[p] !== "object") return false;
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!equals(x[p], y[p])) return false;
    // Objects and Arrays must be tested recursively
  }

  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    // allows x[ p ] to be set to undefined
  }

  return true;
}
