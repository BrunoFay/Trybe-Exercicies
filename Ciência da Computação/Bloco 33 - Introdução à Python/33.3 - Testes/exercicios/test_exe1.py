from exe1 import fizzbuzz
def test_fizzbuzz_function():
  assert (fizzbuzz(3) == [1,2,"fizz"]) is True
  assert (fizzbuzz(5) == [1,2,3,4,"buzz"]) is True
  assert (fizzbuzz(15) == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,"fizzBuzz"]) is True

import pytest
def test_fizzbuzz_function_as_error():
  with pytest.raises(ValueError,match='o valor passado não é um numero '):
    fizzbuzz('a')


def test_fizzbuzz_function_return_message_when_number_is_not_divisible_by_3_or_5():


   assert (fizzbuzz(2)=='o numero não é divisivel por 3 ou 5') is True