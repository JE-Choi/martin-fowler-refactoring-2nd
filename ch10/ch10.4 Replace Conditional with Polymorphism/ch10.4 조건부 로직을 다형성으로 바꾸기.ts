{
    type Bird = {
        type: string;
        name: string;
        numberOfCocounts: number;
        voltage: number;
        isNailed: boolean;
    }

    const plumage = (bird: Bird): string => { // 깃털상태
        switch (bird.type) {
            case '유럽 제비':
                return '보통이다.';
            case '아프리카 제비':
                return (bird.numberOfCocounts > 2) ? '그을렸다' : '예쁘다';
            case '노르웨이 파랑 앵무':
                return (bird.voltage > 100) ? '그을렸다' : '예쁘다';
            default:
                return '알수없다.';
        }
    }

    const airSpeedVelocity = (bird: Bird): number | null => {// 비행속도
        switch (bird.type) {
            case '유럽 제비':
                return 35;
            case '아프리카 제비':
                return 40 - 2 * bird.numberOfCocounts;
            case '노르웨이 파랑 앵무':
                return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default:
                return null;
        }
    }

    const plumages = (birds: Bird[]) => {
        return new Map(birds.map((b) => [b.name, plumage(b)]));
    }

    const speeds = (birds: Bird[]) => {
        return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
    }

    const bird1: Bird = {isNailed: false, name: "유럽 제비_name", numberOfCocounts: 1, type: "유럽 제비", voltage: 2};
    const bird2: Bird = {isNailed: false, name: "아프리카 제비_name", numberOfCocounts: 3, type: "아프리카 제비", voltage: 4};
    const bird3: Bird = {isNailed: false, name: "노르웨이 파랑 앵무_name", numberOfCocounts: 2, type: "노르웨이 파랑 앵무", voltage: 3};

    const birds: Bird[] = [bird1, bird2, bird3];
    console.log(plumages(birds));
    console.log(speeds(birds));

}