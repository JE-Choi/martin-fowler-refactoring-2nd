class HeatingPlan {
    _temperatureRange: { low: number, high: number };

    constructor(temperatureRange: { low: number, high: number }) {
        this._temperatureRange = temperatureRange;
    }

    withinRange = (bottom: number, top: number) => {
        return (bottom >= this._temperatureRange.low)
            && (top <= this._temperatureRange.high);
    }
}

export default HeatingPlan;