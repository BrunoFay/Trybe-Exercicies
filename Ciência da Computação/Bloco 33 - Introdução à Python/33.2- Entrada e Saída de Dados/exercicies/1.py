name="bruno"
name_length=len(name)
arr_name= list(name)
while name_length > 0:
  result= ' '.join(arr_name)
  print(result)
  name_length -= 1
  arr_name.pop(-1)

