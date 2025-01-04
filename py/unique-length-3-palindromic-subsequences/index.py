class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        map = {};

        for index in range(len(s)):
            char = s[index];

            if char not in map:
                map[char] = {};

            if map[char].get("min") is None:
                map[char]["min"] = index;
            else:
                map[char]["max"] = index;

        result = set();
        
        for letter in map:
            min = map[letter].get("min")
            max = map[letter].get("max")


            if min is None or max is None or max - min <= 1:
                continue;

            for i in range(min + 1, max):
                result.add(f"{letter}{s[i]}{letter}")
            
        return len(result);
        