import time
from selenium import webdriver

link = "https://www.amazon.com.tr/s/ref=nb_sb_noss?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Dbaby&field-keywords=&ref=nb_sb_noss&crid=2C2OT73Q0XOR9&sprefix=%2Cbaby%2C99"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
time.sleep(3)
player = driver.find_element_by_xpath('//*[@id="s-refinements"]')
# iterate through list and get text

liste = []
title = driver.find_elements_by_xpath('//*[@id="s-refinements"]/div/div/span')
items = driver.find_elements_by_xpath('//*[@id="s-refinements"]/div/ul/li/span/a/span')


for i in range(len(title)):
    print(title[i].text)
    length = driver.find_elements_by_xpath(f'//*[@id="s-refinements"]/div[{str(i)}]/ul')
    for i in length:
        print(i.text)
        
        
    print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")

