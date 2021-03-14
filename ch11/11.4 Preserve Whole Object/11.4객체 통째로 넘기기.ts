import {aRoom} from './Room';
import HeatingPlan from "./HeatingPlan";

{
    const low = aRoom.daysTempRange.low;
    const high = aRoom.daysTempRange.high;
    const aPlan: HeatingPlan = new HeatingPlan({low: 0, high: 20});
    if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
        console.log('방 온도가 지정 범위를 벗어났습니다.');
    }
}