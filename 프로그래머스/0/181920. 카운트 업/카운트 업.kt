class Solution {
    fun solution(start_num: Int, end_num: Int): IntArray {
       return IntArray(end_num - start_num + 1) { i -> start_num + i }
    }
}