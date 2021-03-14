import {aRoom} from './Room';
import HeatingPlan from "./HeatingPlan";

{
    const low = aRoom.daysTempRange.low;
    const high = aRoom.daysTempRange.high;
    const aPlan: HeatingPlan = new HeatingPlan({low: 0, high: 40});
    if (!aPlan.withinRange(low, high)) {
        console.log('방 온도가 지정 범위를 벗어났습니다.');
    }
}