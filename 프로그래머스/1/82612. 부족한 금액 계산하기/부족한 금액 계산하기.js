function solution(price, money, count) {
    var answer = 0;
    var sum = 0;
    for(var i=0;i<count;i++){
        sum = sum+price;
        answer = answer+sum;
    }
    return answer>money ? answer-money : 0;
}