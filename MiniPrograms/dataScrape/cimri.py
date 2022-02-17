import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys 


link = "https://www.cimri.com/bebek-kulodu"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
time.sleep(3)


title = driver.find_elements_by_xpath('//*[@id="main_container"]/div/div/div[2]/div[1]/div/div/div')
items = driver.find_elements_by_xpath('//*[@id="main_container"]/div/div/div[2]/div[1]/div/div')
element = driver.find_elements_by_xpath('//*[@id="main_container"]/div/div/div[2]/div[1]/div/div/ul/li/a/span[2]')

time.sleep(1)

list = []
# iterate through list and get text

for i in range(len(title)):
    list.append(title[i].text)

try:
    for m in element:
        m.click()
except:
    pass

time.sleep(3)
print(list)
try:
    for i in range(len(title)):
        print(i)
        print("-A- " + list[i - 1])
        length = driver.find_elements_by_xpath(f'//*[@id="main_container"]/div/div/div[2]/div[1]/div/div/ul/li/a/span[2]')
        for y in length:
            print(" : " + y.text)
        print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")
        
except:
    pass


