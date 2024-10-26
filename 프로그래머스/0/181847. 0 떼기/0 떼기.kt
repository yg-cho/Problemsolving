class Solution {
    fun solution(n_str: String): String {
        val answer = firstZeroCheck(n_str)
        return answer
    }
    fun firstZeroCheck(str: String) = str.dropWhile { it == '0' }
        
}