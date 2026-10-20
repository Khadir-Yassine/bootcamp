# Daily Challenge: Currency Converter

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What You will learn :**

- Fetch API

- async await

---

### **Instructions**

You will create a currencies converter:

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1771950352349_Currency_Converter.png)

---

In this application we’re going receive data from two asynchronous sources.

You will use :

- [This documentation](https://www.exchangerate-api.com/docs/overview)

- Create your own API key by [signing up](https://app.exchangerate-api.com/sign-up) - you will be able to make more requests :)

---

### **Note**

1. The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

2. First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on [Supported Codes Endpoint](https://www.exchangerate-api.com/docs/supported-codes-endpoint) from the ExchangeRate API documentation.

3. To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on [Pair conversion requests](https://www.exchangerate-api.com/docs/pair-conversion-requests) from the ExchangeRate API documentation.
*Hint*: You could also supply an optional AMOUNT variable in the query of the request.

4. **Bonus**: Add a “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
*Example* : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

![switch conversion arrow(1)](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D5/148588337-233540b7-aac6-4b25-bbf4-520765380f59.png?raw=true)

---

**Duration & Difficulty**

| Duration (approx) | Difficulty |
| --- | --- |
| > 1h30 | ⭐⭐ |

---

### **Submit your Daily Challenge :**

Don’t forget to push to Github
