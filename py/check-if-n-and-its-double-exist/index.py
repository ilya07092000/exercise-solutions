from types import List

class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        dict = {};

        for index, el in enumerate(arr):
            multiply = el * 2;
            divided = el / 2;

            if multiply in dict or divided in dict:
                return True;

            dict[el] = index;

        return False;