function solution(numbers) {
    var answer = 0;
    for(var i=0;i<numbers.length;i++){
        answer = answer + numbers[i]
    }
    return 45-answer;
}