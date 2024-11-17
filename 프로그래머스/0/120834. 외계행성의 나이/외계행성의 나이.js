function solution(age) {
    let alpabet = ["a","b","c","d","e","f","g","h","i","j"];
    var answer = age.toString().split("");
    let result = ""
   for (let i = 0; i < answer.length; i++) {
        result += alpabet[answer[i]]; 
    }
    return result;
}