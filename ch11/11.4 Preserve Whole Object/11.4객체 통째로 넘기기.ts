import {aRoom} from './Room';
import HeatingPlan from "./HeatingPlan";

{
    const aPlan: HeatingPlan = new HeatingPlan({low: 0, high: 20});
    if (!aPlan.withinRange({bottom: aRoom.daysTempRange.low, top: aRoom.daysTempRange.high})) {
        console.log('방 온도가 지정 범위를 벗어났습니다.');
    }
}