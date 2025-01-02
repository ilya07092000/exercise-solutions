from types import List, str

vowels = {"a","e","i","o","u"};

class Solution:
    def isValid(self, string: str):
        return string[0] in vowels and string[-1] in vowels; 

    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        prefix_sum = [1 if self.isValid(words[0]) else 0]

        for index in range(1, len(words)):
            value = 1 if self.isValid(words[index]) else 0;

            prefix_sum.append(prefix_sum[index - 1] + value);

        results = [];

        for query in queries:
            start, end = query;

            if start == 0:
                results.append(prefix_sum[end]);
            else:
                results.append(prefix_sum[end] - prefix_sum[start - 1])

        return results;
        