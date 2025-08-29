Assignment 5 all question answers --->
_________________________________________________________________________________________________

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById: getElementById finds an element by using it's id. since Id is unique, getElementById returns unique element.  

getElementsByClassName: getElementsByClassName find elements by their classNames.
multiple elements can have same class. so, it can return an HTML collection of elements. 

querySelector: querySelector finds the first element that matches the CSS selector (is, attribute, class, tag, etc. ). It always returns null elements or null if  nothing is found. 

querySelectorAll: querySelectorAll finds all elements that match a given CSS selector. 
_______________________________________________________________________________________________

2. How do you create and insert a new element into the DOM?
Answer:
by using document.createElement('tagName'), it is possible to insert a new element in DOM.
by Using appendChild() we can insert the created element into the DOM. 
_____________________________________________________________________________________________

3. What is Event Bubbling and how does it work?
Answer:
When an event occurs, then it runs on the target element and then bubbles up to its' parents, grandparent, great grand parents and respective ancestors. 
______________________________________________________________________________________________

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
event delegation is a pattern in JavaScript , where instead of attaching event listeners with multiple child, event listeners are attached with parent and use event bubbling to catch events from the children.

Importance of event delegation:
i. saves memory and speeds up performance. Instead of attaching many event listener, attaching only 1 event listener on single parent can help. 
ii. Dynamic- new elements added later, automatically works
__________________________________________________________________________________________________
5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault is used when we want to stop default action. for example , when we work with html forms, preventDefault() stops the forms default action automatic form submission.
stopPropagation() stops the event flow. 

_______________________________________________________________________________________________