# How to use React keys like a Pro.

Course source: [Geeks Institute](https://www.geeks.institute/).
React keys can be quite a confusing topic that‘s often misunderstood and misused. It’s used so incorrectly, that when I was looking for solutions to a rather annoying problem, **I found top and upvoted answers on Stack Overflow that were completely false!**

---

### **A little background to React Keys**

*Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.*

To further elaborate on this explanation taken from the React documentation. React re-renders components and it’s children on every state change. But, when you provide a **unique** key to a mapping array, React knows NOT to re-render the entire array to the DOM, but only the items in the array that changed — if any.

---

### **Where things get a bit more complicated**

*We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.*

For example:

You have an array thats being mapped and you’re using the index as your key. Now you want to unshift an item out of the array. Once you update the state, React re-renders and now every item in the array shifts one index backwards from what it previously was, and for all React is concerned, you just updated the whole array — ergo React will re-render the entire array while in reality you only changed one item.

---

### **Solution**

*Use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys*

By doing this, React always knows exactly what to update because you provided a stable unique ID.

---

### **But what if you don’t have a stable unique key from your data?**

This was an issue I was researching for quite some time and I came across this Stack Overflow question: [How to create unique keys for React elements?](http://https//stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements)

The top answer suggests to have a function that creates a new uniqueID that generates while mapping

**JAVASCRIPT - **`script.js`

```javascript
const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

const savedLists = this.state.savedLists.map( list => {
    const list_data = list.data.map( data => <li key={ generateKey(data) }>{ data }</li> );
    return(
        <div key={ generateKey(list.name) }>
            <h2>{ list.name }</h2>
            <ul>
                { list_data }
            </ul>
        </div>
    )
});
```

This is a disaster.

If we do what is suggested above, we essentially solved nothin, if anything — we made things worse.

If we generate a new ID every time the component re-rendered then React wouldn’t be able to detect the differences in the map because the ID keeps changing, ergo re-rendering the whole list again, potentially for no reason.

---

### **Solution**

In this scenario, that is — when you don’t have stable keys from your DB and you have no way to set one from your DB — your best bet is to manipulate the data and add an ID to each item **before** using it in your React component. For example:

**JAVASCRIPT - **`script.js`

```javascript
import uniqueId from 'uuid'
return fetch('/people').then(response) => 
    return response.json();
}).then(result => {
    // add id and return it
    return {data: result.map(x => x.id = uniqueId())};
});
```

This way you kinda got the best of both worlds, a pseudo stable ID and a cooperative React component! And yes, essentially we’re trying to fool React in order for it to behave properly (or just giving it what it wants).

---

### **Conclusion**

**Firstly**, like the React documentation states, you should always try to use stable keys from your DB.

**Secondly**, this might be a bit controversial, but I think that you can and should use index for keys if you don’t have stable keys from your DB and if the list your mapping through is read-only.

I know that some people here are screaming at the screen saying that this is bad practice “BUT WHAT IF THIS LIST WILL CHANGE IN THE FUTURE!”. But the reason I think this is because I believe that programmers should be responsible and cognizant of the code they are writing, and if you have a list that used to be read-only and you’re the one in charge of the feature changing that, then you should double check and make sure that your keys aren’t using index.

**Lastly**, if you have an array that may be mutated **and** you don’t have stable IDs then you should append an ID preferably in some kind of service before returning the data.

Thanks for reading! If you have others ideas, please share in the comments!
