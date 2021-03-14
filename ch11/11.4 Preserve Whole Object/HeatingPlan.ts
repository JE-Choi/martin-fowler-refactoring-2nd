class HeatingPlan {
    _temperatureRange: { low: number, high: number };

    constructor(temperatureRange: { low: number, high: number }) {
        this._temperatureRange = temperatureRange;
    }

    withinRange = (aNumberRange: { bottom: number, top: number }) => {
        return (aNumberRange.bottom >= this._temperatureRange.low)
            && (aNumberRange.top <= this._temperatureRange.high)
    }
}

export default HeatingPlan;