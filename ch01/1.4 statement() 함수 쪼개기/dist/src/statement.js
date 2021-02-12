"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoices_js_1 = require("../data/invoices.js");
var plays_js_1 = require("../data/plays.js");
function statement(invoice, plays) {
    var totalAmount = 0;
    var volumeCredits = 0; // 포인트
    var result = "\uCCAD\uAD6C \uB0B4\uC5ED(\uACE0\uAC1D\uBA85: " + invoice.customer + ")\n"; // 출력결과
    // 통화 format
    var format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format;
    for (var _i = 0, _a = invoice.performances; _i < _a.length; _i++) {
        var perf = _a[_i];
        var play = plays[perf.playID];
        var thisAmount = 0;
        switch (play.type) {
            case "tragedy": // 비극
                thisAmount = 40000; // 장르로 비용 측정
                if (perf.audience > 30) {
                    // 규모로 비용측정
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy": // 희극
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error("\uC54C \uC218 \uC5C6\uB294 \uC7A5\uB974: " + play.type);
        }
        // 포인트 적립(관객이 30명초과일 경우, 초과한 만큼 적립)
        volumeCredits += Math.max(perf.audience - 30, 0);
        // 희극 관객 5명마다 추가 포인트를 제공한다.
        if (play.type === "comedy") {
            volumeCredits += Math.floor(perf.audience / 5);
        }
        // 청구 내역을 출력한다.
        result += play.name + ": " + format(thisAmount / 100) + " (" + perf.audience + "\uC11D)\n";
        totalAmount += thisAmount;
    }
    result += "\uCD1D\uC561: " + format(totalAmount / 100) + "\n";
    result += "\uC801\uB9BD \uD3EC\uC778\uD2B8: " + volumeCredits + "\uC810 \n";
    return result;
}
for (var i = 0; i < invoices_js_1.invoices.length; i++) {
    var result = statement(invoices_js_1.invoices[i], plays_js_1.plays);
    console.log(result);
}
