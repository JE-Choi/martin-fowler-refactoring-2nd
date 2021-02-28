{
    class Data {
        private title = "untitled";

        // 변수 캡슐화 → 데이터에 접근하는 set, getter만들기
        getTitle() {
            return this.title
        };

        setTitle(arg) {
            this.title = arg
        };
    }

    let result = "";
    const obj = {
        'articleTitle': 'articleTitle'
    }
    const data = new Data();
    result += `<h1>${data.getTitle()}</h1>`; // 값 참조도 됨.
    data.setTitle(obj['articleTitle']); // 값 수정도 되고
    console.log(data.getTitle());
    console.log(result);

}