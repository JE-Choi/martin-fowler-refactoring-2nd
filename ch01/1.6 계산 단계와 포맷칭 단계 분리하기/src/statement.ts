import {Invoices, Performances} from "../data/invoices.js";
import {Plays} from "../data/plays.js";
type Params = {
  invoice: Invoices;
  plays: Plays;
};
type StatementDataType = {customer: Invoices["customer"]; performances: Invoices["performances"]};

const statement = ({invoice, plays}: Params): string => {
  let statementData: StatementDataType = {
    customer: invoice.customer,
    performances: invoice.performances,
  };
  return renderPlainText({data: statementData, plays});
};

const renderPlainText = ({data, plays}: Readonly<{data: StatementDataType} & Pick<Params, "plays">>): string => {
  const playFor = ({aPerformance}: {aPerformance: Readonly<Performances>}) => {
    return plays[aPerformance.playID];
  };

  /**
   * 설명: 한번의 공연에 대한 요금을 계산함
   * @description 🙄 불변하는 값은 매개변수로 전달
   * @param param0
   */
  const amountFor = ({aPerformance}: {aPerformance: Readonly<Performances>}): number => {
    let result = 0; // 변수를 초기화하는 코드
    switch (playFor({aPerformance})?.type) {
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
        throw new Error(`알 수 없는 장르: ${playFor({aPerformance})?.type}`);
    }
    // 함수 안에서 값이 바뀌는 변수 반환
    return result;
  };
  /**
   * 적립포인트 계산
   * @param param0
   */
  const volumeCreditsFor = ({aPerformance}: {aPerformance: Readonly<Performances>}): number => {
    let result: number = 0; // 포인트
    // 포인트 적립(관객이 30명초과일 경우, 초과한 만큼 적립)
    result += Math.max(aPerformance.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if (playFor({aPerformance: aPerformance})?.type === "comedy") {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result;
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

  /**
   * 포인트 누적계산
   */
  const totalVolumeCredits = (): number => {
    let volumeCredits: number = 0; // 포인트
    for (let perf of data.performances) {
      volumeCredits += volumeCreditsFor({aPerformance: perf});
    }
    return volumeCredits;
  };

  /**
   * 합계
   */
  const totalAmount = (): number => {
    let result: number = 0;
    for (let perf of data.performances) {
      result += amountFor({aPerformance: perf});
    }
    return result;
  };

  let result: string = `청구 내역(고객명: ${data.customer})\n`; // 출력결과

  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += `${playFor({aPerformance: perf})?.name}: ${usd(amountFor({aPerformance: perf}))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점 \n`;
  return result;
};

export default statement;
