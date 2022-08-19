from pydoc import describe
import requests
from parsel import Selector

URL='http://books.toscrape.com/catalogue/the-grand-design_405/index.html'
response= requests.get(URL).text
selector= Selector(text=response)
title=selector.css('div.col-sm-6.product_main > h1 ::text').get()
price=selector.css('div.col-sm-6.product_main > p.price_color ::text').re_first(r"\d*\.\d{2}")
describe=selector.css('#content_inner > article > p ::text').get()
image=selector.css('#product_gallery > div > div > div > img ::attr(src)').get()
sufix = '...more'
book_quantity= selector.css('#content_inner > article > div.row > div.col-sm-6.product_main > p.instock.availability').re_first("\d")
if describe.endswith(sufix):
  describe= describe[:-len(sufix)]
print(book_quantity)