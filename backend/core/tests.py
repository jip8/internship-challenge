from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from core.services.lcm_service import LCMCalculator

class LCMCalculatorTest(TestCase):
    def test_range_lcm_normal(self):
        # Test case: start < end
        self.assertEqual(LCMCalculator.range_lcm(1, 5), 60)

    def test_range_lcm_swapped(self):
        # Test case: start > end
        self.assertEqual(LCMCalculator.range_lcm(5, 1), 60)

    def test_range_lcm_same(self):
        # Test case: start == end
        self.assertEqual(LCMCalculator.range_lcm(5, 5), 5)

    def test_range_lcm_single_number(self):
        # Test case: single number
        self.assertEqual(LCMCalculator.range_lcm(1, 1), 1)
        self.assertEqual(LCMCalculator.range_lcm(10, 10), 10)

    def test_range_lcm_positive_numbers(self):
        # Test case: positive numbers
        self.assertEqual(LCMCalculator.range_lcm(1, 10), 2520)
        self.assertEqual(LCMCalculator.range_lcm(10, 1), 2520)

    def test_range_lcm_negative_input(self):
        # Test case: negative input
        with self.assertRaises(ValueError):
            LCMCalculator.range_lcm(-1, 5)
        with self.assertRaises(ValueError):
            LCMCalculator.range_lcm(1, -5)
        with self.assertRaises(ValueError):
            LCMCalculator.range_lcm(-5, -1)

    def test_range_lcm_zero_input(self):
        # Test case: zero input
        with self.assertRaises(ValueError):
            LCMCalculator.range_lcm(0, 5)
        with self.assertRaises(ValueError):
            LCMCalculator.range_lcm(1, 0)
        with self.assertRaises(ValueError):
            LCMCalculator.range_lcm(0, 0)


class LCMViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('lcm')

    def test_lcm_view_success(self):
        response = self.client.get(self.url + '?x=1&y=5')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'result': 60})

    def test_lcm_view_same(self):
        response = self.client.get(self.url + '?x=5&y=5')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'result': 5})

    def test_lcm_view_negative_input(self):
        response = self.client.get(self.url + '?x=-1&y=5')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_lcm_view_missing_input(self):
        response = self.client.get(self.url + '?x=1')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
