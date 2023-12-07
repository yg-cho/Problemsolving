function solution(n) {
    var answer = Math.sqrt(n);
    var sqrt = answer+1;
    return answer % 1 == 0 ? (sqrt*sqrt) : -1;
}