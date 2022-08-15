class Fridge :
  def __init__(self,price,color,volt):
    self.price = price
    self.__color=color
    self.__volt=volt

  @property
  def color(self):
    return self.__color

  @color.setter
  def color(self,new_color):
    self.__color = new_color


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.fridge = None

    def buy_fridge(self, fridge: Fridge):
        if fridge.price <= self.saldo_na_conta:
            self.saldo_na_conta -= fridge.price
            self.fridge = fridge
    def has_fridge(self):
      return True if (self.fridge)else False
    def __str__(self):
      return f"""
        person has fridge? : {self.has_fridge()}
    """

geladeira_topzera =Fridge(2000,'red',220)
pessoa_cozinheira = Pessoa("Jacquin", 10000)
pessoa_cozinheira.buy_fridge(geladeira_topzera)
print(pessoa_cozinheira)