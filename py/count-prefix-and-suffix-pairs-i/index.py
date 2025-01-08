class Solution:
    def isPrefixAndSuffix(self, w1, w2):
        prefix = w2[:len(w1)];
        suffix = w2[(len(w2) - len(w1)):];

        return prefix == w1 and suffix == w1;


    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        result = 0;
        
        for i in range(len(words) - 1):
            for j in range(i + 1, len(words)):
                w1 = words[i];
                w2 = words[j];

                if (len(w1) > len(w2)):
                    continue;

                if self.isPrefixAndSuffix(w1, w2):
                    result += 1;

        return result;
        