LEFT = "L"
RIGHT = "R"


class Solution:
    def canChange(self, start: str, target: str) -> bool:
        longer_str = start if len(start) > len(target) else target

        l_count = 0
        r_count = 0

        for index in range(len(longer_str)):
            start_char = start[index]
            target_char = target[index]

            if target_char == LEFT:
                l_count += 1

                if r_count > 0:
                    return False

            if start_char == RIGHT:
                r_count += 1

                if l_count > 0:
                    return False

            if target_char == RIGHT:
                if r_count == 0:
                    return False

                r_count -= 1

            if start_char == LEFT:
                if l_count == 0:
                    return False

                l_count -= 1

        return l_count == 0 and r_count == 0;
