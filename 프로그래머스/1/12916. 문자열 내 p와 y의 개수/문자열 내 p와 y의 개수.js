function solution(s){
    var p = 0;
    var y = 0;
    var arr = [...s];

    arr.map(v => {
        if( v.toLowerCase() === 'p') {
            p++;
        }
        else if(v.toLowerCase() === 'y') {
            y++;
        }
    })
    return p == y ? true : false;
}