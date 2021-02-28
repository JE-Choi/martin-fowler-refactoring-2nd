{
    let tpHd = "untitled";

    // 변수 캡슐화 → 데이터에 접근하는 set, getter만들기
    function title() {
        return tpHd
    };

    function setTitle(arg) {
        tpHd = arg
    };

    let result = "";
    const obj = {
        'articleTitle': 'articleTitle'
    }
    result += `<h1>${title()}</h1>`; // 값 참조도 됨.
    setTitle(obj['articleTitle']); // 값 수정도 되고
    console.log(tpHd);
    console.log(result);

}