import {invoices} from "../data/invoices.js";
import {plays} from "../data/plays.js";
import statement, {htmlStatement} from "./statement.js";
import {createStatementDataTest} from "./createStatementDataTest.js";
// for (let i = 0; i < invoices.length; i++) {
//   if (invoices[i]) {
//     const result: string = statement({invoice: invoices[i]!, plays});
//     console.log(result);
//     // console.log(htmlStatement({invoice: invoices[i]!, plays}));
//   }
// }

createStatementDataTest();
