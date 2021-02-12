import { Invoices, Performances, invoices } from "../data/invoices.js";
import { Plays, PlaysInfo, plays } from "../data/plays.js";
function statement(invoice: Invoices, plays: Plays) {
  let totalAmount: number = 0;
  let volumeCredits: number = 0; // 포인트
  let result: string = `청구 내역(고객명: ${invoice.customer})\n`; // 출력결과
  // 통화 format
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play: PlaysInfo = plays[perf.playID];
    let thisAmount = 0;
    switch (play.type) {
      case "tragedy": // 비극
        thisAmount = 40000; // 장르로 비용 측정
        if (perf.audience > 30) {
          // 규모로 비용측정
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy": // 희극
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
    // 포인트 적립(관객이 30명초과일 경우, 초과한 만큼 적립)
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if (play.type === "comedy") {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역을 출력한다.
    result += `${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점 \n`;
  return result;
}

for (let i = 0; i < invoices.length; i++) {
  const result: string = statement(invoices[i], plays);
  console.log(result);
}
