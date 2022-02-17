import time
from selenium import webdriver

link = "https://www.akakce.com/bebek-arabasi.html"

DRIVER_PATH = 'C:/Users/yilma/PythonProjects/chromedriver.exe'
driver = webdriver.Chrome()
players = driver.get(link)
driver.maximize_window()

titl = driver.find_elements_by_xpath(f'/html/body/div[2]/section/form/b')
liste = []

time.sleep(1)

for i in range(len(titl)):
    title = driver.find_elements_by_xpath(f'//*[@id="FF_v8"]/b[{str(i)}]')
    length = driver.find_elements_by_xpath(f'//*[@id="FF_v8"]/span[{str(i)}]')
    for y in title:
        print(y.text)
        for z in length:
            print(z.text)
        print("\n")
  