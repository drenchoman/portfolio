---
title: 'An Introduction to Javascript'
metaTitle: 'An Introduction to Javascript for Beginners'
metaDesc: 'A basic introduction to Javascript, looking at the DOM, control flow and basic functions.'
image: 'https://res.cloudinary.com/dbyprqeyc/image/upload/v1662610664/cld-sample-2.jpg'
date: 'July 6th 2022'
isPublished: true
author: 'Oscar Harron'
tags:
  - javascript
  - web development
---

## A basic introduction to Javascript, looking at the DOM, control flow and basic functions.

**Hooray!**  You are levelling up your developer skills and have reached a new level. Welcome to Javascript (JS), now things are about to get interesting.

This introduction will cover Javascripts [relationship](#user-content-js) with HTML and CSS, [Control Flow & Loops](#user-content-control), the Document Object Model or [DOM](#user-content-dom), the difference between [Arrays and Objects](#user-content-arrays-objects), as well as an explanation of [functions](#user-content-functions-header) and why they are useful.

Interested in only a particular topic? Click any of the links above to jump ahead, don't worry, I won't be too upset.

### JS and its relationship to HTML and CSS {#js}
A simple way to understand the relationship between the **holy trinity of the Web** is to think of it as a house. A house will generally have walls, a roof, different sized rooms and all the snazzy appliances which make living easier.

**HTML** can be thought of as the structure of the house, it is the walls and roof. Without this fundamental struture there would be no house, just your things scattered around on an empty plot of land.

**CSS** is how your house is decorated and styled. The colour of the walls, the wooden floors, the L-shaped observatory. It describes **how HTML elements look**, their size, shape and position. It turns something bland into something grand.

**JS** is the things you interact with in your home. This could be flicking on the lights, turning the tap on for water or switching the heat pump on for warmth. JS brings all of the **functionality** to the home.

On a webpage, JS would do things such as handle the interactions when you click a button, handle your form data when you sign up for a giveawat or load more content when you reach the bottom of a page so you can endlessly scroll on Reddit.

JS provides the **logic, rules and functionality** to a webpage and it is rare to find a website that doesn't use JS in some capacity

### Control Flow & Loops {#control}
Control Flow refers to the **order in which your computer will run your code**. It is a set of instructions that are followed in order. Code will be followed exactly as we describe it so we have to be precise in how we give our instructions.

In JS, our code is read from top to bottom until it reaches instructions which change the control flow. These could be instructions such **if...else** or **loops**.

To demonstrate control flow we will use the example of making an instant coffee.

* Grab jug
* Fill jug with water
* Place jug on base
* Turn jug on
* Grab cup
* Grab coffee
* Grab teaspoon
* **LOOP :** Open coffee, insert teaspoon and collect a teaspoon of coffee. Place coffee into cup, do this two times.
* Check if water is boiled
* **IF :** If water is boiler, fill cup till it is 75% full. **ELSE:** Otherwise wait till water is boiled
* Grab milk
* Add milk till cup is 95% full
* Grab teaspoon
* **LOOP :** Stir coffee, water and milk together until it looks drinkable (a computer would understand that right?)
* Grab cup and drink coffee

> Who knew making a coffee could be so difficult?

As I mentioned before, we have to be very precise with our instructions as they will be followed exactly as we descrive them. This can be challenging for us if we are not used to precise and exact with our instructions.

In our example, we used a **LOOP** statement. Loops are an instruction to do something repeatedly. In our example it was getting multiple spoons full of coffee and stirring our drink till it is 'drinkable'.

If it is something that is done repeatedly then a loop is likely to be used.

### The Dom {#dom}
The DOM (Document Object Model) is a way that we can interact with a webpage. Essentially [everything on a webpage is an object](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) that we can interact with using JS.

In the code pen below we have an h1 tag with the ID header. Looking at our JS file we can see that we have first **selected the header** and **saved it to a variable**. We have then interacted with the header by changing its color to red.

[See the Pen](https://codepen.io/drenchoman/pen/BarjaNq)

Play around and see if you can change its color to somethig else or try altering the font size.

Our interactions are not just limited to CSS or stylistic changes. We can also **create new elements** and add them to the DOM or **remove elements**. Try uncommenting the 'createParagraph' function and see what happens.

### Accessing Data from Arrays and Objects {#arrays-objects}

Arrays and Objects are two different ways that we can store data. They are not unique to JS and can be found in neraly all programming languages.

Arrays are stored in **square brackets []** while Objects are stored in **curly brackets {}**. They are also accessed in different ways.

For example, Arrays can be accessed by specifying the index (a number which represents where it is positioned).

**It is important to note that we start at 0 and not 1 when accessing an Array.**

Objects on the other hand can be accessed using [Dot Notation](https://techstacker.com/what-is-dot-notation-javascript/). Objects are defined by **key: value pairs** so to access a property we name the key that we want to access.

For example, in the codepen below, we can access the name of the littleKitty object typing littleKitty.name (name being the property we want information about).

[See the Pen](https://codepen.io/drenchoman/pen/jOzWOwN)

Play around with the codepen above and familiarise yourself with the differences between accessing an Array and Object.

### Functions and why they are useful {#functions-header}

Functions can be thought of as a **set of instructions that perform a task**. They usually take an **input** (a piece of data or info) and return an **ouput** (a modified piece of data or info) which can be used.

Functions are useful because there are many times we want to perform a task more than once. Creating a function means we don't have to repeat ourselves and can instead let the function do the heavy lifting.

Take a look at the **createParagraph** function below. This function helps us to **add things that we like**. Imagine having to recreate the code everytime we wanted to add a new paragraph.

[See the Pen](https://codepen.io/drenchoman/pen/BarjaNq)
In this example, we call our function and define something we like in the first parameter, this will create a paragraph, join the string 'I Like' with our parameter and then add it to our HTML.

Ultimately, functions make our loves as developers easier by creating a reusable set of instructions that perform a task. **Nice work functions!**