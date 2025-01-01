class Solution:
    def maxScore(self, s: str) -> int:
        zeros = 1 if int(s[0]) == 0 else 0;
        ones = 0;
        bestSoFar = 0;

        for index in range(1, len(s)):
            if int(s[index]) == 1:
                ones += 1;

        bestSoFar = zeros + ones;

        for index in range(1, len(s) - 1):
            if int(s[index]) == 0:
                zeros += 1;
            else:
                ones -= 1;
            
            bestSoFar = max(bestSoFar, zeros + ones);

        return bestSoFar;
        