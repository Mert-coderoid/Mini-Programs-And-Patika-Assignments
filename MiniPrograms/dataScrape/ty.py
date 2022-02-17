import time
from selenium import webdriver

link = "https://www.trendyol.com/sr/cocuk-spor-ayakkabi-x-g3-c109?gag=1-2"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
driver.maximize_window()

time.sleep(15)
title = driver.find_elements_by_xpath(f'//*[@id="sticky"]/div/div/div[1]/div[1]')
liste = []

for i in range(len(title)):
    title = driver.find_elements_by_xpath(f'//*[@id="sticky"]/div/div[{str(i)}]/div[1]/div[1]')
    length = driver.find_elements_by_xpath(f'//*[@id="sticky"]/div/div[{str(i)}]/div[2]')
    for y in title:
        print(y.text)
        for z in length:
            print(z.text)
        print("\n")
  
  
  # length = driver.find_elements_by_xpath(f'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div[{str(i)}]/div[2]/div')
  # for i in length:
  #     print(i.text)
      



