def validate_email(email):
  if not '@' in email:
    raise ValueError('email invalido, verifique se contem @ ')

  primeira_parte_email=[]
  primeira_parte_email=email.split('@')
  segunda_parte_email=primeira_parte_email[1].split('.')
  first_latter_of_email=primeira_parte_email[0][0]
  if not first_latter_of_email.isalpha():
    raise ValueError('primeira letra do email não pode ser um caracter especial')

  for letter in primeira_parte_email[0]:
    if  letter.isnumeric():
      raise ValueError('primeira parte do email não pode conter numeros')

  for letter in primeira_parte_email[1]:
    if  letter.isnumeric():
      raise ValueError('segunda parte do email não pode conter numeros')
  if (len(segunda_parte_email[1])>3):
      raise ValueError('extensão é de no maximo 3 digitos')
  for letter in segunda_parte_email[1]:
    if  letter.isnumeric():
      raise ValueError('extensão do email não pode conter numeros')
  return 'is valid email'