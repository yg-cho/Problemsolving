function solution(n) {
    var num = n;
    var str = String(num);
    var newArr = Array.from(str)
    return Number(newArr.sort().reverse().join(""));
}