function solution(n)
{
    var answer = [...String(n)];
    var changeNumber = (arg) => Number(arg);
    var newAnswer = Array.from(answer,changeNumber);
    
    return newAnswer.reduce((acc, cur) => acc + cur);
}