import { Invoices, Performances, invoices } from "../data/invoices.js";
import { Plays, PlaysInfo, plays } from "../data/plays.js";

const statement = ({
  invoice,
  plays,
}: {
  invoice: Readonly<Invoices>;
  plays: Readonly<Plays>;
}): string => {
  const playFor = ({
    aPerformance,
  }: {
    aPerformance: Readonly<Performances>;
  }) => {
    return plays[aPerformance.playID];
  };

  /**
   * 설명: 한번의 공연에 대한 요금을 계산함
   * @description 🙄 불변하는 값은 매개변수로 전달
   * @param aPerformance
   * @param play
   */
  const amountFor = ({
    aPerformance,
  }: {
    aPerformance: Readonly<Performances>;
  }): number => {
    let result = 0; // 변수를 초기화하는 코드
    switch (playFor({ aPerformance }).type) {
      case "tragedy": // 비극
        result = 40000; // 장르로 비용 측정
        if (aPerformance.audience > 30) {
          // 규모로 비용측정
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor({ aPerformance }).type}`);
    }
    // 함수 안에서 값이 바뀌는 변수 반환
    return result;
  };

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
    const play: PlaysInfo = playFor({ aPerformance: perf });
    let thisAmount = amountFor({ aPerformance: perf });
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
};

export default statement;
