import {invoices} from "../data/invoices.js";
import {plays} from "../data/plays.js";
import statement, {htmlStatement} from "./statement.js";
import {createStatementDataTest} from "./test/createStatementDataTest.js";
import {statementTest} from "./test/statementTest.js";

statementTest();
createStatementDataTest();
