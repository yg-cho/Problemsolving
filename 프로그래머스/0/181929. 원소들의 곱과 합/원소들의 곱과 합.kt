class Solution {
    fun solution(num_list: IntArray): Int {
        return if (num_list.size <= 1) {
            (num_list.lastOrNull() ?: 0) * 2
        } else {
            val multiply = num_list.reduce { acc, num -> acc * num }
            val sum = num_list.reduce { acc, num -> acc + num }
        
            if(multiply > sum*sum){
                0
            } else {
                1
            }
        }
    }
}