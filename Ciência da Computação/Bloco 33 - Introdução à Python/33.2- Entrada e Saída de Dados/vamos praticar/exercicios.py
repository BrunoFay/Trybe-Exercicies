""" def vertical_print_name(name):
    for ele in name:
      print(ele)

vertical_print_name('bruno') """

nums=input('insira valores para serem somados')
numsArr=nums.split()
sum = 0
for elem in numsArr:
    if not elem.isdigit():
         print(f'{elem} não é um numero')
         break
    else: sum+=int(elem)

print(sum)
