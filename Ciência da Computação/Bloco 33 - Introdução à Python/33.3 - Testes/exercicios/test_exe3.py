from exe3 import validate_email
import pytest
def test_check_if_is_email_valid_return_a_message():
  assert (validate_email('brunofay@hotmail.com')=="is valid email") is True

def test_if_return_an_error_if_email_do_not_start_with_a_letter():
  with pytest.raises(ValueError):
    validate_email('-runofay@hotmail.com')

def if_return_an_error_if_email_includes_a_number_in_first_part():
  with pytest.reises(ValueError):
    validate_email('bruno1fay@hotmail.com')

def if_return_an_error_if_email_includes_a_number_in_second_part():
  with pytest.reises(ValueError):
    validate_email('brunofay@hot1mail.com')