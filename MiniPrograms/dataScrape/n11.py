import time
from selenium import webdriver

link = "https://www.n11.com/video-oyun-konsol/playstation-4"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
driver.maximize_window()

time.sleep(3)
# iterate through list and get text
liste = []
title = driver.find_elements_by_xpath('//*[@id="contentListing"]/div/div/div[2]/section/h2')

for i in range(len(title)):
    title = driver.find_elements_by_xpath(f'//*[@id="contentListing"]/div/div/div[2]/section[{str(i)}]/h2')
    length = driver.find_elements_by_xpath(f'//*[@id="contentListing"]/div/div/div[2]/section[{str(i)}]/div[2]')
    for y in title:
        print(y.text)
        for z in length:
            print(z.text)
        print("\n")
    
    
    # length = driver.find_elements_by_xpath(f'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div[{str(i)}]/div[2]/div')
    # for i in length:
    #     print(i.text)
        
        
    print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")



