# reedsy-challenge

## 1. About you

While working for an e-learning company I was tasked with creating a tool that could be used to create/edit questions for the online tutorials rather than manually editing the html which eventually sped up the content creation process but also allowed clients to create their own questions. More specifically this tool could be used to edit the question’s text, add/remove/edit/reorder answers, select from a series of question templates, select the correct answers, add/remove images, set max/min amount of answer selections the user can perform, edit the question’s feedback. 

## 2. General

### 2.1 What kind of front end projects do you enjoy working on? Why?

I like working on dynamic and complex front end systems as I enjoy designing UX that makes user interaction as simple and intuitive as possible. This kind of work triggers my creativity and I find it very satisfying. 

### 2.2. Which are your favorite features of HTML5? How have you used them before? 

I like a lot of the new input types like the color and datetime as they are very useful for simple forms. I also really like the introduction of svgs for drawing scalable graphs. I have used svgs in the past in conjunction with ASP.NET Razor for creating dynamic radial charts for displaying different kinds of metrics. 

### 2.3. Explain the difference between creating a DOM element setting innerHTML and using createElement. 

With createElement you can keep a reference to the node you have just added whereas if you want to reference a node created with innerHtml you would have to search the DOM for it. Also every time an element is created using innerHtml the DOM has to be recalculated whereas with createElement you can append the elements to a DocumentFragment and then add that to the DOM. That way there is only one DOM recalculation. 

### 2.4. Compare two-way data binding vs one-way data flow. 

With two-way data binding the information flows both ways between the data source and the UI element that displays it. So essentially the user could edit the data from the UI element. However, with one-way data flow the data is readonly which means that the user can’t edit the data displayed on the UI element. 

### 2.5. Why is asynchronous programming important in JavaScript? 

In a JavaScript program more often than not you’ll have to use http requests to get some data from an API. In most cases you’ll need to perform actions that rely on that data which means that you need a way to wait for a response from the server. This is why asynchronous programming is very important in JavaScript. 

## 3. Styling

Open file **reedsy-challenge-styling/q3.html**.

## 4. SPA

First navigato to **server** open a terminal and follow the steps below:
* run **npm install**
* run **npm run server**

Navigate to **reedsy-challenge-spa** open a terminal and follow the steps bellow:
* run **npm install**
* run **npm start**
* navigate to the url prompted by the console.
