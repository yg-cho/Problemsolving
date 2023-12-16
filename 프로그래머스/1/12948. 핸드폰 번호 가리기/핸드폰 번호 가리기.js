function solution(phone_number) {
    var answer = [...phone_number];
    var number = [];
    
    answer.map((v,i) => {
        if(i < answer.length-4){
            number.push('*')
        }
        else {
            number.push(v);
        }
    });
    console.log(number)
    return number.join("")
}