# 🌟 Exercise 1 : Giphy API

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **🌟 Exercise 1 : Giphy API**

**Instructions**

With your newly accumulated knowledge of the Fetch API lets write some cool code! You will work with [this part of the documention](https://developers.giphy.com/docs/api/endpoint/#search)

Before starting, create your own Giphy API key:

1. Go to [https://developers.giphy.com/dashboard/](https://developers.giphy.com/dashboard/)

2. Create an account / log in

3. Create an app

4. Copy your API key

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1772017727459_giphy.png)

- Use this Gif URL with your new API key : `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=YOUR_API_KEY`

---

*Explanation of the Gif URL and the queries*

- **q** Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

- **rating** Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the [ratings documentation](https://developers.giphy.com/docs/optional-settings/#rating)

- **api_key** Request Paramater : Your personal GIPHY API Key

---

1. Create a program to retrieve the data from the API URL provided above.
Use the `fetch()` method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
**Make sure to check the status of the Response and to catch any occuring errors.**

*Output Example:*

![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%202/Exercise%20XP/Screenshot%20from%202020-06-14%2017-23-24.png)

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
