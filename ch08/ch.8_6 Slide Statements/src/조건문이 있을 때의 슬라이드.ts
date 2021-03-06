{
    let result: string;
    let array: string[] = [];
    if (array.length === 0) {
        result = "생성";
    } else {
        result = array.pop()! + "ㅎㅎ";
    }
    array.push(result);
    console.log(result);
}