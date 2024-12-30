from typing import List

class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        if len(spaces) == 0:
            return s;

        result = '';
        lastPointer = 0;

        for spaceIndex in spaces:
            result += s[lastPointer:spaceIndex];
            result += ' ';

            lastPointer = spaceIndex;

        result += s[lastPointer:]

        return result;

        