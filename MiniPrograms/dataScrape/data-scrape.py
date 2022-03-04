import time
from selenium import webdriver

def dataWithXpath(path):
    DRIVER_PATH = './chromedriver.exe'
    driver = webdriver.Chrome()
    players = driver.get(link)
    time.sleep(3)
    player = driver.find_elements_by_xpath(path)
    # iterate through list and get text
    print(player[0].text)
    print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")
    time.sleep(2)
    driver.close()  

def dataWithCssSelector(path):
    DRIVER_PATH = './chromedriver.exe'
    driver = webdriver.Chrome()
    players = driver.get(link)
    time.sleep(3)
    player = driver.find_elements_by_css_selector(path)
    # iterate through list and get text
    print(player[0].text)
    print("\n-------------------------------------\n")
    time.sleep(2)
    driver.close() 

def dataWithClassName(path):
    DRIVER_PATH = './chromedriver.exe'
    driver = webdriver.Chrome()
    players = driver.get(link)
    time.sleep(3)
    player = driver.find_elements_by_class_name(path)
    # iterate through list and get text
    print(player[0].text)
    print("\n-------------------------------------\n")
    time.sleep(2)
    driver.close() 

while True:

    link = str(input("link: "))

    print(":.: ", (link.split("/")[2]))

    if link.split("/")[2] == "www.amazon.com.tr":
        DRIVER_PATH = './chromedriver.exe'
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
        


    elif link.split("/")[2] == "www.epey.com":
        DRIVER_PATH = './chromedriver.exe'
        driver = webdriver.Chrome()
        players = driver.get(link)
        driver.maximize_window()

        time.sleep(3)
        # iterate through list and get text
        liste = []
        time.sleep(1)
        ula = driver.find_elements_by_xpath('//*[@class="close"]')
        print(ula)

        title = driver.find_elements_by_xpath('//*[@id="filtrele"]/h2')

        nosaka = driver.find_elements_by_xpath('//*[@id="filtrele"]')
        for i in nosaka:
            print(i.text)
    

    elif link.split("/")[2] == "www.trendyol.com":
        DRIVER_PATH = './chromedriver.exe'
        driver = webdriver.Chrome()
        players = driver.get(link)
        driver.maximize_window()

        print("Dropdownları indirin")

        time.sleep(20)
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
  
  

    elif link.split("/")[2] == "www.cimri.com":
        DRIVER_PATH = './chromedriver.exe'
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
                length = driver.find_elements_by_xpath(f'//*[@id="main_container"]/div/div/div[2]/div[1]/div/div[{i}]/ul')
                for y in length:
                    print(" : " + y.text)
                print("\n- - - - - - - - - - - - - - - - - - - - - - - - -\n")
                
        except:
            pass


    elif link.split("/")[2] == "www.n11.com":
        

        DRIVER_PATH = './chromedriver.exe'
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



    elif link.split("/")[2] == "www.gittigidiyor.com":
        DRIVER_PATH = './chromedriver.exe'
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
    
    
    elif link.split("/")[2] == "www.akakce.com":
        DRIVER_PATH = './chromedriver.exe'
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
  




