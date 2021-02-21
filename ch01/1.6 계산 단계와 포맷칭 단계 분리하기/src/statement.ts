import {Invoices, Performances} from "../data/invoices.js";
import {Plays, PlaysInfo} from "../data/plays.js";
import {StatementDataType} from "../data/type.js";
import createStatementData from "./createStatementData.js";
type Params = {
  invoice: Invoices;
  plays: Plays;
};

/**
 * 통화 format
 * @param aNumber
 */
const usd = (aNumber: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
};

const statement = ({invoice, plays}: Params): string => {
  return renderPlainText(createStatementData(invoice, plays));
};

const renderPlainText = (data: Partial<StatementDataType>): string => {
  let result: string = `청구 내역(고객명: ${data.customer})\n`; // 출력결과

  for (let perf of data.performances!) {
    // 청구 내역을 출력한다.
    result += `${perf.play?.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount!)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점 \n`;
  return result;
};

export const htmlStatement = ({invoice, plays}: Params): string => {
  return renderHtml(createStatementData(invoice, plays));
};

const renderHtml = (data: Partial<StatementDataType>): string => {
  let result = `<h1>청구 내역(고객명: ${data.customer})</h1>\n`;
  result += `<table>\n`;
  result += `<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>`;
  for (let perf of data.performances!) {
    result += `<tr><td>${perf.play?.name}</td><td>${perf.audience}석</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += `</table>\n`;
  result += `<p>총액: <em>${usd(data.totalAmount!)}</em></p>`;
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
  return result;
};

export default statement;
