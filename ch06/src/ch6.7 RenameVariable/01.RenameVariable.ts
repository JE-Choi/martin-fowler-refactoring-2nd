let tpHd = "untitled";
let result = "";
const obj = {
    'articleTitle': 'articleTitle'
}
result += `<h1>${tpHd}</h1>`; // 값 참조도 됨.
tpHd = obj['articleTitle']; // 값 수정도 되고
console.log(tpHd);
console.log(result);