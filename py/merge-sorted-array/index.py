from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        resultList = [];

        firstPointer = 0;
        secondPointer = 0;

        while firstPointer < m and secondPointer < n:
            firstEl = nums1[firstPointer];
            secondEl = nums2[secondPointer];

            if firstEl < secondEl:
                resultList.append(firstEl);
                firstPointer += 1;
            else:
                resultList.append(secondEl);
                secondPointer += 1;


        if firstPointer < m:
            resultList.extend(nums1[firstPointer:m])
        else:
            resultList.extend(nums2[secondPointer:n])
        
        for i in range(len(resultList)):
            if i > len(nums1) - 1:
                nums1.append(resultList[i])
            else:
                nums1[i] = resultList[i];
            

        