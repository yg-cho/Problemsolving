function solution(arr, divisor) {
    const asc = (a,b) => a-b;
    var answer = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%divisor === 0){
            answer.push(arr[i])
            console.log(arr[i])
        }
    }
    if(answer.length <= 0 ){
        answer.push(-1)
    }
    return answer.length < 0 ? answer : answer.sort(asc);
}