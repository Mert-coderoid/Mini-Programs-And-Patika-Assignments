

import time
from selenium import webdriver

link = "https://www.epey.com/medya-oynatici/"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
driver.maximize_window()

time.sleep(3)
# iterate through list and get text
liste = []
time.sleep(1)
ula = driver.find_elements_by_xpath('//*[@class="close"]')
print(ula)

# for i in range(len(ula)):
#     sleep
#     ula[i].click()
# time.sleep(15)

title = driver.find_elements_by_xpath('//*[@id="filtrele"]/h2')
print(len(title))
# //*[@id="ozellikliste3226"]

nosaka = driver.find_elements_by_xpath('//*[@id="filtrele"]')
for i in nosaka:
    print(i.text)
    

# for i in range(len(title)):
#     print(title[i].text)
    
#     length = driver.find_elements_by_xpath('//*[@id="sol"]/div/div/ul')
    # for y in title:
    #     print(y.text)
    #     for z in length:
    #         print(z.text)
    #     print("\n")
    
    
    # length = driver.find_elements_by_xpath(f'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/div/div/div[{str(i)}]/div[2]/div')
    # for i in length:
    #     print(i.text)
        
        
    print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")



