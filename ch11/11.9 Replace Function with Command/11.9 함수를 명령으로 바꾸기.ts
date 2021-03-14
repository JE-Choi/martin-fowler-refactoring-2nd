/**
 * 건강보험 애플리케이션에서 사용하는 점수 계산 함수이다.
 */
import {Medical} from "./Medical";

{
    class Score {
        candidate;
        medicalExam: Medical;
        scoringGuide


        constructor(candidate, medicalExam: Medical, scoringGuide) {
            this.candidate = candidate;
            this.medicalExam = medicalExam;
            this.scoringGuide = scoringGuide;
        }

        execute = () => {
            let result = 0;
            let healthLevel = 0;
            let highMedicalRiskFlag = false;

            if (this.medicalExam.isSmoker) {
                healthLevel += 10;
                highMedicalRiskFlag = true;
            }
            result -= Math.max(healthLevel - 5, 0);
            return result;
        }
    }
}