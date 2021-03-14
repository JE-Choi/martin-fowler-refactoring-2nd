/**
 * 건강보험 애플리케이션에서 사용하는 점수 계산 함수이다.
 */
import {Medical} from "./Medical";

{
    const score = (candidate, medicalExam: Medical, scoringGuide) => {
        let result = 0;
        let healthLevel = 0;
        let highMedicalRiskFlag = false;

        if (medicalExam.isSmoker) {
            healthLevel += 10;
            highMedicalRiskFlag = true;
        }
        result -= Math.max(healthLevel - 5, 0);
        return result;
    }
}