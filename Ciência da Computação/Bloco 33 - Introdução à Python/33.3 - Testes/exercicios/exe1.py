def fizzbuzz(n):
  if not isinstance(n,int) or isinstance(n,float):
    raise ValueError('o valor passado não é um numero ')
  result= list(range(1,n))
  if n % 3 == 0 and n%5 == 0:
    result.append('fizzBuzz')
    return result
  elif n % 3 == 0:
    result.append('fizz')
    return result
  elif n % 5 == 0:
    result.append('buzz')
    return result
  else:
    return 'o numero não é divisivel por 3 ou 5'

