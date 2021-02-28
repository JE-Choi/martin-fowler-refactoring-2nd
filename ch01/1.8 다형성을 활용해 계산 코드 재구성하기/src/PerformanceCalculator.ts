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
  get amount() {
    let result = 0; // 변수를 초기화하는 코드
    switch (this.play.type) {
      case "tragedy": // 비극
        result = 40000; // 장르로 비용 측정
        if (this.performance.audience > 30) {
          // 규모로 비용측정
          result += 1000 * (this.performance.audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (this.performance.audience > 20) {
          result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }
    // 함수 안에서 값이 바뀌는 변수 반환
    return result;
  }

  /**
   * 적립포인트 계산
   * @param param0
   */
  get volumeCredits() {
    let result: number = 0; // 포인트
    // 포인트 적립(관객이 30명초과일 경우, 초과한 만큼 적립)
    result += Math.max(this.performance.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if (this.play.type === "comedy") {
      result += Math.floor(this.performance.audience / 5);
    }
    return result;
  }
}

export default PerformanceCalculator;
