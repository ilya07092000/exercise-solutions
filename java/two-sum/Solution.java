class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i += 1) {
            Integer index = map.get(target - nums[i]);

            if (index != null) {
                return new int[] { index, i };
            }

            map.put(nums[i], i);
        }

        return new int[] {};
    }
}