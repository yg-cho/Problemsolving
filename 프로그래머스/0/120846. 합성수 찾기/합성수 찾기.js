function solution(n) {
    var answer = 0;
    for(var i=4;i<=n;i++){
        var total = 0
        for(var j=1;j<=n;j++){ 
            if(i%j === 0){
                total++;
            }
        }
        if(total >= 3){
            answer++;
        }
    }
    return answer;
}