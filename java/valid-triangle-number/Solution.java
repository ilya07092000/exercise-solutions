import java.util.Arrays;

class Solution {
    public int triangleNumber(int[] nums) {
        Arrays.sort(nums);
        int result = 0;

        for (int last = nums.length - 1; last >= 2; last -= 1) {
            int leftPointer = 0;
            int rightPointer = last - 1;

            while (leftPointer < rightPointer) {
                int twoSum = nums[leftPointer] + nums[rightPointer];

                if (twoSum > nums[last]) {
                    int length = rightPointer - leftPointer;

                    result += length;
                    rightPointer -= 1;
                } else {
                    leftPointer += 1;
                }
            }
        }

        return result;
    }
}