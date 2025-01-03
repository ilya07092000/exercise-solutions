class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        result = 0;
        overallSum = sum(nums);

        leftSideSum = 0;
        rightSideSum = None;

        for num in nums[:-1]:
            leftSideSum += num;
            rightSideSum = overallSum - leftSideSum;

            if leftSideSum >= rightSideSum:
                result += 1;


        return result;