import {Plays} from "../data/plays.js";
import {Invoices, Performances} from "../data/invoices.js";
import {StatementDataType} from "../data/type.js";
import PerformanceCalculator from "./PerformanceCalculator.js";

class StatementDataCreator {
  constructor(public invoices: Invoices, public plays: Plays) {}

  private enrichPerformance = ({aPerformance}: {aPerformance: Performances}) => {
    const calculator: PerformanceCalculator = PerformanceCalculator.create(aPerformance, this.playFor({aPerformance}));
    const data: Performances = Object.assign({}, aPerformance); // 얕은 복사 수행
    const result = {
      ...data,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
    return result;
  };

  private playFor = ({aPerformance}: {aPerformance: Performances}) => {
    return this.plays[aPerformance.playID];
  };

  /**
   * 총액
   * @param data
   */
  private tatalAmount = (data: Partial<StatementDataType>) => {
    return data.performances?.reduce((total: number, p) => total + p.amount, 0) || 0;
  };

  /**
   * 포인트 누적계산
   */
  private totalVolumeCredits = (data: Partial<StatementDataType>) => {
    return data.performances?.reduce((total: number, p) => total + p.volumeCredits, 0) || 0;
  };

  create() {
    const result: Partial<StatementDataType> = {};
    result.customer = this.invoices.customer;
    result.performances = this.invoices.performances.map((o: Performances) => {
      return this.enrichPerformance({aPerformance: o});
    });
    result.totalAmount = this.tatalAmount(result); // 총액
    result.totalVolumeCredits = this.totalVolumeCredits(result); // 포인트
    return result;
  }
}
export default StatementDataCreator;
