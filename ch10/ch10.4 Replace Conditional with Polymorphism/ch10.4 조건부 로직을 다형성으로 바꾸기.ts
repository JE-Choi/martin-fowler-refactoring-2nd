{
    type BirdType = {
        type: '유럽 제비' | '아프리카 제비' | '노르웨이 파랑 앵무';
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

        get plumage(): string { // 깃털상태
            return '알수없다.';
        }

        get airSpeedVelocity(): number | null {
            return null;
        }
    }

    class EuropeanSwallow extends Bird {
        get plumage(): string {
            return '보통이다.';
        }

        get airSpeedVelocity(): number | null {
            return 35;
        }
    }

    class AfricanSwallow extends Bird {

        get plumage(): string {
            return (this.bird.numberOfCocounts > 2) ? '그을렸다' : '예쁘다';
        }

        get airSpeedVelocity(): number | null {
            return 40 - 2 * this.bird.numberOfCocounts;
        }
    }

    class NorwegianBlueSwallow extends Bird {

        get plumage(): string {
            return (this.bird.voltage > 100) ? '그을렸다' : '예쁘다';
        }

        get airSpeedVelocity(): number | null {
            return (this.bird.isNailed) ? 0 : 10 + this.bird.voltage / 10;
        }
    }

    const createBird = (bird: BirdType): Bird => {
        switch (bird.type) {
            case '유럽 제비':
                return new EuropeanSwallow(bird);
            case '아프리카 제비':
                return new AfricanSwallow(bird);
            case'노르웨이 파랑 앵무':
                return new NorwegianBlueSwallow(bird);
            default:
                return new Bird(bird);
        }
    }
    const plumages = (birds: BirdType[]) => {
        return new Map(birds
            .map((b) => createBird(b))
            .map(bird => [bird.bird.name, bird.plumage]));
    }

    const speeds = (birds: BirdType[]) => {
        return new Map(birds
            .map((b) => createBird(b))
            .map(bird => [bird.bird.name, bird.airSpeedVelocity]));
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