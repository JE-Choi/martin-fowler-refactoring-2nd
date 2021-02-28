import {Plays, PlaysInfo} from "../../1.6 계산 단계와 포맷칭 단계 분리하기/data/plays.js";
import {invoices, Invoices, Performances} from "../../1.6 계산 단계와 포맷칭 단계 분리하기/data/invoices.js";
import {StatementDataType} from "../data/type.js";
import PerformanceCalculator, {ComedyCalculator, TragedyCalculator} from "./PerformanceCalculator.js";
const createPerformanceCalculator = (aPerformance, aPlay) => {
  switch (
    aPlay.type // ← 장르에 대응하는, 공연료 계산기 생성
  ) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw Error(`알 수 없는 장르: ${aPlay.type}`);
  }
};
const createStatementData = (invoices: Invoices, plays: Plays) => {
  const enrichPerformance = ({aPerformance}: {aPerformance: Performances}) => {
    const calculator = createPerformanceCalculator(aPerformance, playFor({aPerformance}));
    const data: Performances = Object.assign({}, aPerformance); // 얕은 복사 수행
    const result = {
      ...data,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
    return result;
  };
  const playFor = ({aPerformance}: {aPerformance: Performances}) => {
    return plays[aPerformance.playID];
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
