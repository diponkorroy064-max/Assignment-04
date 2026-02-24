1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. Answer:---

getElementById- It select only an id and return only a single HTML element from the HTML file.

getElementsByClassName - It select several HTML element of class name and return HTML collection from the HTML file.

querySelector - It select an element from several same type element like same classname, same HTML tag, same attributes etc. and return first matching element .

querySelectorAll - It select all element from same type element like same classname, same HTML tag, same attributes and return first matching element .

querySelector() and querySelectorAll() :--- are the most versatile because they use standard CSS selectors (e.g., .class, #id, div > p). 

On the other habd, the getElementById() and getElementByClassName() --- only accept specific attribute strings like a class name or ID.







4. How do you create and insert a new element into the DOM?
5. Answer:---
To create and insert a new element into the DOM, I will follow a two-step:---

***(1) creating the element like (h1, p, ul, div, section ctc.) and set the innerText of the element.
***(2) appending it to a parent element in the document tree.

(1). Create the Element----
Use the document.createElement() method, passing the tag name as a string like---

const newDiv = document.createElement("div");

(1). And Adding content as a innerText---

newDiv.innerHTML = `
<h1>This is a new Heading</h1>
<p>This is a new pragraph</p>
<p>This is a new pragraph</p>
<p>This is a new pragraph</p>
<p>This is a new pragraph</p>
`;

(2). Insert the element in a selected DOM element---

Adds the new element as the last child of the specified parent. Use the following property like appendChild():--

const body = document.getElementByTagName("body");
body.appendChild(newDiv); 






6. What is Event Bubbling? And how does it work?
Answer:---
Event Bubbling is a system in a DOM by which an event triggered(clicked) on a child element, it bubbles up or reaction spread up to through its ancestors like- bubbles up from triggered element to the all parent element. 
It Works by----
When I interact with an element (like clicking a button), the event travels in three distinct phases: 
Capturing Phase: The event starts at the root (window) and trickles down to the target element.
Target Phase: The event reaches the specific element that was clicked.
Bubbling Phase: The event then moves back up from the target element through all its parent elements. 

For an Example----
If you have a <button> inside a <div>, and both have click listeners:
Clicking the button will trigger the button's listener first.
Then, the event "bubbles up" to the div, triggering its listener next. 

Key Methods of Controling Bubbling----
event.stopPropagation() ------ preventing any parent handlers.
event.stopImmediatePropagation(): Not only stops bubbling but also prevents any other listeners on the same element from executing. 








7. What is Event Delegation in JavaScript? Why is it useful?
8. Answer:---
Event Delegation is a system in JavaScript that is used to manage events efficiently by attaching a single event listener to the parent element instead of adding multiple listeners to individual child elements.

It is useful because------

(A). Efficiency: Attaching single event listener instead of several listeener (e.g., for a long list) significantly reduces memory consumption and improves performance.

(B). Dynamic Elements: It automatically handles elements added to the DOM after the initial page load. Do not need to manually attach new listeners when content is generated via AJAX or user actions.

(C). Cleaner Code: It centralizes event-handling logic in one place, making the codebase easier to maintain, debug, and update.

(D). Reduced Complexity: No need to "cleanup" or remove listeners from individual elements when they are deleted from the DOM, which helps prevent memory leaks.








10. What is the difference between preventDefault() and stopPropagation() methods?
11. Answer:-

preventDefault()--- It stops the browser's default behavior (e.g., following a link).

stopPropagation()---- It stops the event from traveling up the DOM (event bubbling).



