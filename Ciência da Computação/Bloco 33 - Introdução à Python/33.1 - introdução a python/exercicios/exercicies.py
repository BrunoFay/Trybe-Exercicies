def return_highest_value(v1, v2):
    return v1 if v1 > v2 else v2


print(return_highest_value(4, 4))


def arithmetic_average(list):
    sum = 0
    for elem in list:
        sum += elem
    return sum / len(list)


print(arithmetic_average([1, 2, 2, 15, 5]))


def star_shit(n):
    if n > 1:
      t= n*(f'{n* "*" }\n')
    return t


print(star_shit(2))

def highest_word_in_list(list):
    result= ''
    for elem in list:
      if len(elem)>len(result): result=elem
    return result

print (highest_word_in_list(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

import math


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price