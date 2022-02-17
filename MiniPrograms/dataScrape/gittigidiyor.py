import time
from selenium import webdriver

link = "https://www.gittigidiyor.com/beyaz-esya/camasir-makinesi"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
driver.maximize_window()

time.sleep(3)
# iterate through list and get text
liste = []
title = driver.find_elements_by_xpath('//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div/div[2]/div')
print(len(title))

for i in range(len(title)):
    
    title = driver.find_elements_by_xpath(f'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div[{str(i)}]/div[1]/div[1]')
    length = driver.find_elements_by_xpath(f'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div[{str(i)}]/div[2]/div')
    for y in title:
        print(y.text)
        for z in length:
            print(z.text)
        print("\n")
    
    
    # length = driver.find_elements_by_xpath(f'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div[{str(i)}]/div[2]/div')
    # for i in length:
    #     print(i.text)
        
        
    print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")



