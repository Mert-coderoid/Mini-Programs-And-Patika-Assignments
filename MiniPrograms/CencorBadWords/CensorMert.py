from better_profanity import profanity

text = "you piece of shit"

cencored_text = profanity.censor(text, "-")
print(cencored_text)

result = profanity.contains_profanity(text)
print(result)

custom_words = ["Merry", "Happy"]
profanity.load_censor_words(custom_words)

text = "Merry Christmas and Happy New Year 2022"

result = profanity.censor(text)

print(result)