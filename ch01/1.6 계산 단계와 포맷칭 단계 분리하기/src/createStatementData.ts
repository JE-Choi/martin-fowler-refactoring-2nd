import {Plays, PlaysInfo} from "./../../1.6 계산 단계와 포맷칭 단계 분리하기/data/plays.js";
import {invoices, Invoices, Performances} from "./../../1.6 계산 단계와 포맷칭 단계 분리하기/data/invoices.js";
import {StatementDataType} from "../data/type.js";
const createStatementData = (invoices: Invoices, plays: Plays) => {
  const enrichPerformance = ({aPerformance}: {aPerformance: Performances}) => {
    const data: Performances = Object.assign({}, aPerformance); // 얕은 복사 수행
    const result = {
      ...data,
      play: playFor({aPerformance: data}),
      amount: amountFor({aPerformance: data}),
      volumeCredits: volumeCreditsFor({aPerformance: data}),
    };
    return result;
  };
  const playFor = ({aPerformance}: {aPerformance: Performances}) => {
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
   * 총액
   * @param data
   */
  const tatalAmount = (data: Partial<StatementDataType>) => {
    return data.performances?.reduce((total: number, p) => total + p.amount, 0) || 0;
  };

  /**
   * 포인트 누적계산
   */
  const totalVolumeCredits = (data: Partial<StatementDataType>) => {
    return data.performances?.reduce((total: number, p) => total + p.volumeCredits, 0) || 0;
  };

  const result: Partial<StatementDataType> = {};
  result.customer = invoices.customer;
  result.performances = invoices.performances.map((o: Performances) => {
    return enrichPerformance({aPerformance: o});
  });
  result.totalAmount = tatalAmount(result); // 총액
  result.totalVolumeCredits = totalVolumeCredits(result); // 포인트
  return result;
};
export default createStatementData;
