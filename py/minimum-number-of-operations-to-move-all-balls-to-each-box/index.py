class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        result = [];

        for i in range(len(boxes)):
            currentBoxResult = 0;

            for j in range(len(boxes)):
                if j == i:
                    continue;

                if int(boxes[j]) == 1:
                    currentBoxResult += (abs(i - j))
            
            result.append(currentBoxResult);

        return result;
        