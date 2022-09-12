
    #  for scrapping web sites you need to use requests library
    #   install it with the use of 
    #   python -m pip install requests


import requests as r 

url = "https://realpython.github.io/fake-jobs/"
req = r.get(url)



    #  this python library will help you to make a HTTP request and get all
    #   the HTML of the url you pased to it

#print(req.text)

    # in the req.text you will get all the HTML BUT, this only works for static websites
    #  if u need to get the HTML of a Dinamic WebSite you will need to use request-html of Selenium 


    #  to parse all this information we got from HTMl to specific information we want we use beautiful-soup
    #   To install beautiful soup
    #  python -m pip install beautifulsoup4  

from bs4 import BeautifulSoup

    #  we have to take the req and create a object

soup = BeautifulSoup(req.content, "html.parser")

    # you can search data by using the property of a HTML tag ID 

resultById = soup.find(id="ResultsContainer")    

print(resultById.prettify())