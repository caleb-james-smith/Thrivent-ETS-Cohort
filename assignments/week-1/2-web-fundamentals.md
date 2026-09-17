# Web Fundamentals

Open https://example.com in a browser.

Open the Network tab and refresh the page.

Click on a request to see additional info.

- Request URL: https://example.com
- Request method: GET
- Status code: 304 Not Modified
- Response content type: document

Use the Console to read and change the heading text.
```
console.log(document.querySelector('h1'));
document.querySelector('h1').innerText = "Hello World";
console.log(document.querySelector('h1'));
```

## Questions

1. What happens after a user enters a URL?

It depends.
If the user is not connected to the internet, their request cannot reach the server.
They may see errors that suggest they are offline.

If the user is connected to the internet,
then an HTTP request can be routed to a server,
and the server can provide a response.
This could include loading content for a webpage that they can view in a browser.

2. What is the difference between a browser and a server?

A browser allows a client to load, view, and interact with websites.
A server responds to requests made by clients.

3. What is an HTTP request?

An HTTP request is a request sent from a client to a server using the Hypertext Transfer Protocol (HTTP).
There are many different request methods, and some examples are GET, POST, PUT, and DELETE.

4. What is an HTTP response?

An HTTP response is a response sent from a server to a client using the Hypertext Transfer Protocol (HTTP).
The content of the response depends on the request method.
The response should include a status code to indicate whether the request was fulfilled successfully and whether there were any errors.
Some example status codes are 200 OK, 304 Not Modified, 404 Not Found, and 500 Internal Server Error.

5. What does a `200` status code mean?

The `200` status code represents a successful HTTP request.
The response depends on the method used in the request, such as GET.

6. Why are changes made in developer tools not permanent?

Changes made in developer tools modify the document object model (DOM),
which is a representation of the webpage stored in memory.
However, the source code (HTML, CSS, JS) in not changed.
When the website is refreshed, the source code is loaded, and the DOM is recreated.
This resets the changes made in developer tools.

7. What roles do HTML, CSS, and JavaScript play on a webpage?

Hypertext Markup Language (HTML) defines the structure of the webpage, along with some classification and formatting.
Tags are used to define different elements, including headers, paragraphs, lists, and links.

Cascading Style Sheets (CSS) specifies the style of the webpage.
This includes fonts, colors, spacing, layout, margins, and effects.

JavaScript (JS) enables actions, responsive behaviors, logic, and automation on a webpage.
JavaScript enables reading, adding, modifying, and removing elements on a webpage.
It also allows the webpage to respond to user input.

Find one HTML, CSS, JavaScript, image, or API request in the Network tab and explain its purpose.

Request URL: https://example.com/
Request Method: GET
Status Code: 304 Not Modified

Load the main page for this domain and display it in the browser.
