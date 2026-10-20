# Daily Challenge: Voting app

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Instructions : React Voting App**

Your goal is to create a voting app as follows:

![Illustration](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day2/Daily%20Challenge/Daily%20Challenge.png)

**Check the **[**demo**](http://di-react-vote.surge.sh/)

---

## **Steps**

1. In the `App.js` create an array of objects in the `state`. Each object contains the language and the number of votes per language.
Use the below object as a starting point:
  
  ```javascript
const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ])
<br>
```

2. Create a function that increases the state of the votes by one, when you click on a specific language button.
