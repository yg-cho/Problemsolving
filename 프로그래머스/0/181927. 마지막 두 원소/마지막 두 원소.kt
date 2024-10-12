class Solution {
    fun solution(num_list: IntArray): IntArray {
        return if(num_list.size <= 1) {
            num_list + (num_list.lastOrNull() ?: 0) * 2
        }
        else {
            val last = num_list.last()
            val seclast = num_list[num_list.size-2]
            
            val newElement = if (last > seclast) {
                last - seclast
            } else {
                last * 2
            }
            num_list + newElement
        }
        
    }
}