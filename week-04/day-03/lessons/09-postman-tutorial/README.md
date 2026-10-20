# Postman Tutorial

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Postman Tutorial – How to Use for API Testing**

**What is Postman?**

Postman is a scalable API testing tool that seamlessly integrates into CI/CD pipelines. It was initiated in 2012 as a side project by Abhinav Asthana to simplify API workflows in testing and development. API stands for Application Programming Interface, which enables software applications to communicate with each other through API calls.

---

**Why Use Postman?**

With over 4 million users, Postman Software has become the tool of choice for several reasons:

- **Accessibility:** To use Postman, you only need to log in to your account, making it easy to access files from anywhere, as long as the Postman application is installed on your computer.

- **Use of Collections:** Postman allows users to create collections for their API calls. Each collection can have subfolders and multiple requests, aiding in organizing your test suites.

- **Collaboration:** Collections and environments can be imported or exported, making it easy to share files. You can also use a direct link to share collections.

- **Creating Environments:** Having multiple environments reduces the repetition of tests, as you can use the same collection for different environments. Parameterization will be discussed in further lessons.

- **Creation of Tests:** Test checkpoints, such as verifying successful HTTP response status, can be added to each Postman API call to ensure test coverage.

- **Automation Testing:** Using the Collection Runner or Newman, tests can be run in multiple iterations, saving time for repetitive tests.

- **Debugging:** Postman’s console helps check the retrieved data, making it easy to debug tests.

- **Continuous Integration:** With its ability to support continuous integration, development practices are maintained.

---

### **How to Use Postman to Execute APIs**

Below is the Postman Workspace. Let’s explore the step-by-step process of how to use Postman and its different features:

![HowtousePostman](https://github.com/devtlv/studentsGitHub/assets/30896388/db00f61b-9163-4077-baec-61b0463b98c1)

1. **New:** This is where you create a new request, collection, or environment.

2. **Import:** Use this to import a collection or environment. You have options such as importing from a file, folder, link, or pasting raw text.

3. **Runner:** Automation tests can be executed through the Collection Runner, which will be discussed further in the next lesson.

4. **Open New:** Open a new tab, Postman Window, or Runner Window by clicking this button.

5. **My Workspace:** You can create a new workspace individually or as a team.

6. **Invite:** Collaborate on a workspace by inviting team members.

7. **History:** Past requests that you have sent will be displayed in History. This makes it easy to track actions that you have done.

8. **Collections:** Organize your test suite by creating collections. Each collection may have subfolders and multiple requests. A request or folder can also be duplicated.

9. **Request tab:** This displays the title of the request you are working on. By default, “Untitled Request” would be displayed for requests without titles.

10. **HTTP Request:** Clicking this displays a dropdown list of different requests, such as GET, POST, COPY, DELETE, etc. In Postman API testing, the most commonly used requests are GET and POST.

11. **Request URL:** Also known as an endpoint, this is where you identify the link to where the API will communicate with.

12. **Save:** If there are changes to a request, clicking save is a must so that new changes will not be lost or overwritten.

13. **Params:** This is where you write parameters needed for a request, such as key values.

14. **Authorization:** In order to access APIs, proper authorization is needed. It may be in the form of a username and password, bearer token, etc.

15. **Headers:** You can set headers such as content type JSON depending on the needs of the organization.

16. **Body:** This is where you can customize details in a request, commonly used in POST requests.

17. **Pre-request Script:** These are scripts that will be executed before the request. Usually, pre-request scripts for setting environment are used to ensure that tests will be run in the correct environment.

18. **Tests:** These are scripts executed during the request. It is important to have tests as it sets up checkpoints to verify if the response status is OK, retrieved data is as expected, and other tests.

---

## **Working with GET Requests**

GET requests are used to retrieve information from the given URL. There will be no changes done to the endpoint.

We will use the following URL for all examples in this Postman tutorial:

```javascript
https://jsonplaceholder.typicode.com/users
```

In the workspace:

1. Set your HTTP request to GET.

2. In the request URL field, input the link.

3. Click Send.

You will see a “200 OK” message.

There should be 10 user results in the body, indicating that your test has run successfully.

![WorkingwithGETRequests](https://github.com/devtlv/studentsGitHub/assets/30896388/fb50d1ad-2eb0-45d2-a473-3c7946ac0607)

**Note:** There may be cases where a GET Postman request may be unsuccessful, which can be due to an invalid request URL or authentication being needed.

---

### **Working with POST Requests**

POST requests are different from GET requests, as they involve data manipulation with the user adding data to the endpoint. Using the same data from the previous tutorial in the GET request, let’s now add our own user.

**Step 1)** Click a new tab to create a new request.

![POSTRequests1](https://github.com/devtlv/studentsGitHub/assets/30896388/ca846df5-bf81-4b9e-ba91-2945d67b9be0)

**Step 2)** In the new tab:

- Set your HTTP request to POST.

- Input the same link in the request URL: `https://jsonplaceholder.typicode.com/users`.

- Switch to the Body tab.

![POSTRequests2](https://github.com/devtlv/studentsGitHub/assets/30896388/31047e10-304c-45ef-ae33-9d452f00e384)

**Step 3)** In Body:

- Click raw.

- Select JSON.

![POSTRequests3](https://github.com/devtlv/studentsGitHub/assets/30896388/adeb09b9-41c3-4d7f-a1ae-1a560e042140)

**Step 4)** Copy and paste just one user result from the previous GET request as shown below. Ensure that the code has been copied correctly with paired curly braces and brackets. Change `id` to 11 and `name` to any desired name. You can also change other details like the address.

```javascript
[
  {
    "id": 11,
    "name": "Krishna Rungta",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
]
```

![POSTRequests4](https://github.com/devtlv/studentsGitHub/assets/30896388/5808d0f2-7b26-4585-967c-76eb1b3bdeff)

**Note:** Online POST requests should have the correct format to ensure that requested data will be created. It is a good practice to use GET first to check the JSON format of the request. You can use tools like [JSON Formatter](https://jsonformatter.curiousconcept.com/).

**Step 5)** Next, click Send.

- Status: `201 Created` should be displayed.

- Posted data are showing up in the body.

![POSTRequests5](https://github.com/devtlv/studentsGitHub/assets/30896388/63dcc23c-77c9-4a86-b6ff-1c8b888fa9e0)

---

### **How to Parameterize Requests**

Data Parameterization is one of the most useful features of Postman. Instead of creating the same requests with different data, you can use variables with parameters. These data can be from a data file or an environment variable. Parameterization helps to avoid repetition of the same tests, and iterations can be used for automation testing.

Parameters are created through the use of double curly brackets: `{{sample}}`. Let’s take a look at an example of using parameters in our previous request:

![Parameterize Requests1](https://github.com/devtlv/studentsGitHub/assets/30896388/3d3f8edc-c51b-4117-af55-675791831263)

Now let’s create a parameterized GET request.

**Step 1)**

- Set your HTTP request to GET.

- Input this link: `https://jsonplaceholder.typicode.com/users`. Replace the first part of the link with a parameter such as `{{url}}`. The request URL should now be `{{url}}/users`.

- Click send.

There should be no response since we have not set the source of our parameter.

![Parameterize Requests2](https://github.com/devtlv/studentsGitHub/assets/30896388/c8ab940b-bea3-4671-89ee-8bad36202ac7)

**Step 2)** To use the parameter, you need to set the environment.

- Click the eye icon.

- Click edit to set the variable to a global environment which can be used in all collections.

![Parameterize Requests3](https://github.com/devtlv/studentsGitHub/assets/30896388/6f0d1d9e-d1b1-4eef-9cd2-973ace145c42)

**Step 3)** In the variable,

- Set the name to the URL, which is `https://jsonplaceholder.typicode.com`.

- Click Save.

![Parameterize Requests4](https://github.com/devtlv/studentsGitHub/assets/30896388/d09b8cdd-f501-4d45-aeb0-4ae989673140)

**Step 4)** Click close if you see the next screen.

![Parameterize Requests5](https://github.com/devtlv/studentsGitHub/assets/30896388/116dafa8-192d-479f-a07e-292309f4cab4)

**Step 5)** Go back to your GET request, then click send. There should now be results for your request.

![Parameterize Requests6](https://github.com/devtlv/studentsGitHub/assets/30896388/b237512f-5b8a-40e8-a17f-2736c676e17e)

**Note:** Always ensure that your parameters have a source such as an environment variable or data file to avoid errors.

---

### **How to Create Postman Tests**

Postman Tests are JavaScript codes added to requests that help you verify results such as successful or failed status, comparison of expected results, etc. It usually starts with `pm.test`. It can be compared to asserts, verify commands available in other tools.

Let’s perform some basic API testing using Postman for our parameterized requests from the previous lesson.

**Step 1)** Go to your GET user request from the previous tutorial.

- Switch to the tests tab. On the right side are snippet codes.

- From the snippets section, click on “Status code: Code is 200”.

- The pane is auto-populated.

![Postman Tests1](https://github.com/devtlv/studentsGitHub/assets/30896388/cf41c5de-a347-4ac2-9271-563d6ebac909)

**Step 2)** Now click Send. The test result should now be displayed.

![Postman Tests2](https://github.com/devtlv/studentsGitHub/assets/30896388/ab4a8238-7a4d-444d-b70c-cedd1e7d2d87)

**Step 3)** Go back to the test tab, and let’s add another test. This time we will compare the expected result to the actual result.

- From the snippets section, click on “Response body: JSON value check”. We will be checking if Leanne Graham has the userid 1.

![Postman Tests3](https://github.com/devtlv/studentsGitHub/assets/30896388/5815a124-da7c-4252-b325-8256770131a2)

**Step 4)**

- Replace “Your Test Name” from the code with “Check if user with id1 is Leanne Graham” so that the test name specifies exactly what we want to test.

- Replace `jsonData.value` with `jsonData[0].name`. To get the path, check the body in Get result earlier. Since Leanne Graham is userid 1, jsonData is in the first result which should start with 0. If you want to get the second result, use `jsonData[1]` and so on for succeeding results.

- In `to eql`, input “Leanne Graham”.

```javascript
pm.test("Check if user with id1 is Leanne Graham", function () {
  const jsonData = pm.response.json();
  pm.expect(jsonData[0].name).to.eql("Leanne Graham");
});
```

![Postman Tests4](https://github.com/devtlv/studentsGitHub/assets/30896388/3b5480ec-20ab-4bf8-8d49-af2259314467)

**Step 5)** Click send. There should now be two passed test results for your request.

![Postman Tests5](https://github.com/devtlv/studentsGitHub/assets/30896388/e48c1cd4-5bf9-4632-8c01-b30ca9b377cd)

**Note:** There are different kinds of tests that can be created in Postman. Try to explore the tool and see what tests will fit your needs.

---

## **Summary**

- API Testing using Postman: Postman is an application for testing APIs. Postman is one of the most popular tools used in API testing by sending requests to the webserver and getting the response back

- Accessibility, Use of Collections, Collaboration, Continuous Integration, are some of the Key features to learn in - Postman

- It’s recommended you create an account in Postman, so your collections are available online

- You can parameterize request in Postman

- You can create Tests to verify a postman request
