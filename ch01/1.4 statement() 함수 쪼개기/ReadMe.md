# ch01. 리팩터링: 첫번째 예시

| 입/출력, 과정 |                    처리                    |
| ------------- | :----------------------------------------: |
| 입력          |                  공연요청                  |
| 과정          | 1. 연극의 장르(비극/희극) 2. 규모를 기초로 |
| 출력          |                  비용측정                  |

<br/>

> ☺ 추가기능: 포인트 지급
>
> - 공연료와 별개, 다음 의뢰시 공연료 할인가

## 추가한 부분

- 매개변수를 객체 리터럴로 받음.
- 매개변수 불변을 위해, readonly속성 추가
- 함수쪼개기
  - 반복문쪼개기
    - 성능 신경 쓰지 말고, 일단 쪼개기
  - 문장 슬라이드하기
    - 변수 초기화 문장을 사용하는 로직앞으로 옮긴다.
  - 함수 추출하기
    - 별도 함수로 분리하기
  - 변수 인라인하기
    - 사용하는 곳에서 함수 호출하기
