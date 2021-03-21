{
    type BirdType = {
        type: string;
        name: string;
        numberOfCocounts: number;
        voltage: number;
        isNailed: boolean;
    }

    class Bird {
        bird: BirdType;

        constructor(bird: BirdType) {
            this.bird = bird;
        }

        get plumage():string { // 깃털상태
            switch (this.bird.type) {
                case '유럽 제비':
                    return '보통이다.';
                case '아프리카 제비':
                    return (this.bird.numberOfCocounts > 2) ? '그을렸다' : '예쁘다';
                case '노르웨이 파랑 앵무':
                    return (this.bird.voltage > 100) ? '그을렸다' : '예쁘다';
                default:
                    return '알수없다.';
            }
        }
        get airSpeedVelocity (): number | null{
            switch (this.bird.type) {
                case '유럽 제비':
                    return 35;
                case '아프리카 제비':
                    return 40 - 2 * this.bird.numberOfCocounts;
                case '노르웨이 파랑 앵무':
                    return (this.bird.isNailed) ? 0 : 10 + this.bird.voltage / 10;
                default:
                    return null;
            }
        }
    }

    const plumage = (bird: BirdType): string => { // 깃털상태
        return new Bird(bird).plumage;
    }

    const airSpeedVelocity = (bird: BirdType): number | null => {// 비행속도
        return new Bird(bird).airSpeedVelocity;
    }

    const plumages = (birds: BirdType[]) => {
        return new Map(birds.map((b) => [b.name, plumage(b)]));
    }

    const speeds = (birds: BirdType[]) => {
        return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
    }

    const bird1: BirdType = {isNailed: false, name: "유럽 제비_name", numberOfCocounts: 1, type: "유럽 제비", voltage: 2};
    const bird2: BirdType = {isNailed: false, name: "아프리카 제비_name", numberOfCocounts: 3, type: "아프리카 제비", voltage: 4};
    const bird3: BirdType = {
        isNailed: false,
        name: "노르웨이 파랑 앵무_name",
        numberOfCocounts: 2,
        type: "노르웨이 파랑 앵무",
        voltage: 3
    };

    const birds: BirdType[] = [bird1, bird2, bird3];
    console.log(plumages(birds));
    console.log(speeds(birds));

}