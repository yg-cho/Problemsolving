function solution(n) {
    var answer = n.toString(3)
    var str = [...answer]    
    return parseInt(str.reverse().join(""),3);
}