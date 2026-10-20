# HTTP methods

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Description :**

The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web and is used to load web pages using hypertext links. 
HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other network protocol stack layers. 
A typical flow over HTTP involves a client machine requesting a server, sending a response message.

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

**Useful Resources**

- [Video : How the Internet Works for Developers](https://www.youtube.com/watch?v=e4S8zfLdLgQ&t=137s)

- [Tutorial on HTTP](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:web-protocols/a/hypertext-transfer-protocol-http)

---

### **How does the internet work?**

![How does the internet works ?](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%205/Day%201/ScreenShot%20PowerPoint.png?raw=true)

---

HTTP messages are how data is exchanged between a server and a client.
There are two types of messages:

- requests sent by the client to trigger an action on the server,

- and responses, the answer from the server.

HTTP messages are composed of textual information encoded in ASCII and span over multiple lines.

- In HTTP/1.1 and earlier versions of the protocol, these messages were openly sent across the connection.

- In HTTP/2, the once human-readable message is now divided into HTTP frames, providing optimization and performance improvements.

Web developers, or web admins, rarely craft these textual HTTP messages themselves: software, a Web browser, proxy, or Web server, perform this action.
They provide HTTP messages through config files (for proxies or servers), APIs (for browsers), or other interfaces.

---

### **HTTP methods**

There are many methods to send HTTP messages; the most used is `GET` and `POST`.
Here is the difference between them:

---

**GET method**

`GET` is used to retrieve data (and should only be used to this), all the data of a `GET` request is passed to the URL.

Because of this, it has a length restriction, it can be bookmarked, and it should **never** be used to pass sensitive data because anyone listening on the network will see all the traffic.

**GET** indicates that a **resource should be fetched**

The data is passed as argument `arg1=val1&arg2=val2`, in this syntax:

```javascript
/path/to/page.html?arg1=val1&arg2=val2
```

For example:

```javascript
/action_page.html?firstname=Mickey&lastname=Mouse
```

This is a request to `action_page.html`, where `firstname` is equal to `Mickey` and `lastname` is equivalent to `Mouse`.

---

**POST method**

`POST` is used to send data to a server to create/update a resource.
`POST` method stores the data sent to the server in the request *body*.

The request *body* is encrypted and never cached/saved in history; thus, this method is much safer to pass sensitive data like password or credit card.

**POST** means that **data is pushed to the server** (creating or modifying a resource or generating a temporary document to send back).

**See more on http methods on **[**w3schools.com**](http://w3schools.com/)

---

### **HTTP Request**

There are two types of HTTP messages: requests and responses.

HTTP requests are messages sent by the client to initiate an action on the server.
The HTTP request contains three elements:

- A **start line**, designed to give basic information on the message

- A **header**, that adds some information to the message

- A **body**, which contains the content of the message.

---

**Start line**

The start line provides critical information about the message and helps the receiver understand how to read this message.

Here is an example of a start line:

```javascript
GET /background.png HTTP/1.0
```

This line can be split into three elements:

1. The **HTTP method** used to send the message (`GET`), there are several HTTP message types, as we described above.

2. The **request-target** (`/background.png`) is the path of the file the sender wants to receive.

3. The **HTTP version** (`HTTP/1.0`), each HTTP version is a bit different; the receiver needs to know this to read the whole message.

*The request-target can be both absolute and relative path.*

---

**Headers**

Headers are designed to provide more information about the request; unlike the *start line*, this information won’t be used to read the message and understand it.

Headers are just a list of *key-values* pairs, in a syntax similar to JSON:

```javascript
header_name: value
```

Each header has its own applications; here is an example of the header section of an HTTP message:

```javascript
Host: net.tutsplus.com 
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729) 
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 
Accept-Language: en-us,en;q=0.5 
Accept-Encoding: gzip,deflate 
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7 
Keep-Alive: 300 
Connection: keep-alive 
Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120 
Pragma: no-cache 
Cache-Control: no-cache
```

[**More on headers**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

**Body**

The body is the **content of the request**. It’s not required, and not every request has a body.
But if you want to send an HTTP message with a body, you need to provide those two headers: **Content-Type** and **Content-Length**.

The body can be any data type (HTML, Text, JSON etc..).
Bodies can be broadly divided into two categories:

- Single-resource bodies, consisting of one single file, defined by the two headers: *Content-Type* and *Content-Length*.

- Multiple-resource bodies, consisting of a multipart body, each containing a different bit of information. This is typically associated with HTML Forms.

For example, when a user is connecting to a site, he is requesting from the user an HTML code; this code is provided through the body.

**Example of a full HTTP request:**

```javascript
GET /hello.htm HTTP/1.1 
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT) 
Host: www.tutorialspoint.com 
Accept-Language: en-us 
Accept-Encoding: gzip, deflate 
Connection: Keep-AliveHTTP/1.1 200 OK 
Accept-Ranges: bytes 
Content-Length: 12 
Content-Type: text/html 

Hello world
```

---

### **HTTP Response**

Only the start line is different in an HTTP response. Here is an example of the response start line:

```javascript
HTTP/1.1 404 Not Found.
```

The start line of an HTTP response (called the *status line*) contains the following information:

1. The protocol or HTTP version, usually HTTP/1.1.

2. A status code, indicating the success or failure of the request. Common status codes are 200, 404, or 302

3. A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

The message is then a normal HTTP message, with headers and a body section.

---

**Status codes**

Status codes are representing the success of the request; here are a few:

- **200 OK** : The request has succeeded.

- **400 Bad Request** : This response means that server could not understand the request due to invalid syntax.

- **401 Unauthorized** : Although the HTTP standard specifies “unauthorized”, semantically this response means “unauthenticated”. That is, the client must authenticate itself to get the requested response.

- **403 Forbidden**: The client does not have access rights to the content, i.e., unauthorized, so the server rejects giving proper response. Unlike 401, the client’s identity is known to the server.

- **404 Not Found**: The server can not find the requested resource. In the browser, this means the URL is not recognized.

- **500 Internal Server Error**: The server has encountered a situation it doesn’t know how to handle.

[**More on status codes**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

**Example of an HTTP response:**

```javascript
HTTP/1.1 400 Bad Request 
Date: Sun, 18 Oct 2012 10:36:20 GMT 
Server: Apache/2.2.14 (Win32) 
Content-Length: 230 
Content-Type: text/html; 
charset=iso-8859-1 
Connection: Closed
```

---

### **Conclusion**

HTTP messages are the key in using HTTP; their structure is simple, and they are highly extensible. The HTTP/2 framing mechanism adds a new intermediate layer between the HTTP/1.x syntax and the underlying transport protocol without fundamentally modifying it: building upon proven means.
