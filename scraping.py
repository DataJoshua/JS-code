import requests as r
from bs4 import BeautifulSoup

url = "https://realpython.github.io/fake-jobs/"
req = r.get(url)

soup = BeautifulSoup(req.content, "html.parser")


