import { invoices } from "../data/invoices.js";
import { plays } from "../data/plays.js";
import statement from "./statement.js";
for (let i = 0; i < invoices.length; i++) {
  if (!!invoices[i]) {
    const result: string = statement({ invoice: invoices[i]!, plays });
    console.log(result);
  }
}
