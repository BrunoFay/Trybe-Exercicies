from collections import Counter
class Estatisca:
  def __init__(self,list):
    self.__list=list

  def moda (self):
    data = Counter(self.__list)
    get_mode = dict(data)
    mode = [k for k, v in get_mode.items() if v == max(list(data.values()))]

    if len(mode) == n:
      return get_mode = "No mode found"
    else:
      return get_mode = "Mode is / are: " + ', '.join(map(str, mode))

  def mediana (self):
    if n % 2 == 0:
      median1 = self.__list[n//2]
      median2 = self.__list[n//2 - 1]
      return median = (median1 + median2)/2
    else:
      print("Median is: " + str(median))
      return median = self.__list[n//2]
  def media (self):

   return sum(self.__list)/len(self.__list)