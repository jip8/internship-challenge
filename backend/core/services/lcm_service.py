class LCMCalculator:
    @staticmethod
    def gcd(a: int, b: int) -> int:
        while b != 0:
            a, b = b, a % b
        return a

    @classmethod
    def lcm(cls, a: int, b: int) -> int:
        return (a * b) // cls.gcd(a, b)

    @classmethod
    def range_lcm(cls, start: int, end: int) -> int:
        if start <= 0 or end <= 0:
            raise ValueError('[ERROR-CODE-1] - The numbers must be positive.')
        if start > end:
            start, end = end, start

        result = start
        for number in range(start + 1, end + 1):
            result = cls.lcm(result, number)
        return result
