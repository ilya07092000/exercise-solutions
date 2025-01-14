from types import List

class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        frequencyDict = {}
        result = []

        for i in range(len(A)):
            n1 = A[i]
            n2 = B[i]
            currentResult = 0

            frequencyDict[n1] = (frequencyDict.get(n1) or 0) + 1
            frequencyDict[n2] = (frequencyDict.get(n2) or 0) + 1

            if n1 == n2:
                currentResult += 1
            else:
                if frequencyDict[n1] == 2:
                    currentResult += 1;
                if frequencyDict[n2] == 2: 
                    currentResult += 1;

            result.append((result[i - 1] if i > 0 else 0) + currentResult); 

        return result;
