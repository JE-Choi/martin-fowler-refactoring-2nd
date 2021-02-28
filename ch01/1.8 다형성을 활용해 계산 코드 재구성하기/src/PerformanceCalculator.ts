import {Performances} from "../data/invoices";
import {PlaysInfo} from "../data/plays";
/**
 * 공연료 계산기 클래스
 */
class PerformanceCalculator {
  performance;
  play;
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  /**
   * 설명: 한번의 공연에 대한 요금을 계산함
   * @description 🙄 불변하는 값은 매개변수로 전달
   * @param param0
   */
  get amount(): number {
    throw "서브클래스에서 처리하도록 설계되었습니다.";
  }

  /**
   * 적립포인트 계산
   * @param param0
   */
  get volumeCredits() {
    let result: number = 0; // 포인트
    // 포인트 적립(관객이 30명초과일 경우, 초과한 만큼 적립)
    result += Math.max(this.performance.audience - 30, 0);
    return result;
  }
}

export class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    // 규모로 비용측정
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
export class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}
export default PerformanceCalculator;
