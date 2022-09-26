# Introduction to JavaScript

## Table of Contents

- [Vision of Marc Andreessen](#vision-of-marc-andreessen)
- [Brendan Eich](#brendan-eich)
  - [Mocha LiveScript JavaScript](#mocha-livescript-javascript)
- [JScript from Microsoft](#jscript-from-microsoft)
- [ECMAScript](#ecmascript)
- [AJAX](#ajax)
- [JavaScript Engine](#javascript-engine)
- [JavaScript Libraries](#javascript-libraries)
- [JQuery](#jquery)
- [Single Page Applications](#single-page-applications)
- [SPA Libraries & Frameworks](#spa-libraries--frameworks)
- [Node.js](#nodejs)

## Vision of Marc Andreessen

- Only static pages were available on the internet.
- There was no dynamic content.
- The vision of Marc Andreessen (Netscape Founder) is to make browser more interactive by adding dynamic content support, animation support and by adding many forms of small automations.
- Web needed a small scripting language that would interact with the DOM (Document Object Model).

## Brendan Eich

- JavaScript was created by Brendan Eich in 1995 at Netscape Communications. It was inspired by Java, Scheme, and Self.
- He was recruited by Marc Andreessen in 1995 for creating JavaScript.
- A very short deadline was given to him.
- He was tasked to develop a "Scheme for the browser".
- Netscape collaboratted with Sun Microsystems to include Sun's programming language Java to compete with Microsoft to make adoption of web technologies and platform easier for users.
- It was decided that JavaScript should be as understandable as HTML and should complement with Java language and should have similar syntax like Java.
- The company needed a prototype to defend the idea of JavaScript.
- Eich wrote one in 10 days in May 1995.
- He had the advantages of adding any feature but he had to work fast.

### Mocha LiveScript JavaScript

- JavaScipt's first prototype was named as Mocha.
- When it was tagged as function, it got integrated into Netscape Communicator.
- It was renamed to LiveScript when the first beta release of Netscape Navigation 2.0 was launched.
- The deal between Netscape and Sun Microsystems was closed in 1995.
  - Mocha/LiveScript would be renamed to JavaScript
  - It would be for small client-side tasks in the browser.
  - While Java would be promoted as a bigger, profession tool to develop richer web components.
- It was named to JavaScript to take advantage of Java's name for new Web Programming Language.
- From the beginning, JavaScript influences in competing browser by making it possible to make better UX/UI implementations with it.

## JScript from Microsoft

- Microsoft was compelled to reverse-engineer JavaScript support into Internet Explorer as JScript in 1996.
- There was implementation difference between JScript from that found in Netscape Navigator.
- The same features created for both browser were not compatible on both browsers.
- Double work was required by programmers to make a single website work on both browsers because of difference in implementations between the two languages.
- Website started being tagged as "best viewed in Internet Explorer", "best viewed in Netscape".

## ECMAScript

It was realized by Netscape that for an interactive, dynamic web to succedd, JavaScript have to be consistent across browsers.
In November 1996, JavaScript was submitted by Netscape to ECMA International to carva out a standard specification which other browsers vendors could then implement based on the work done at Netscape.
At first, JavaScript was given ECMA-262 identification number for standard.
It was decided to create standard specifications to be followed by all web browsers.
JavaScript was then opened to wider audience making its evolution better by giving it the voice of other potential implementers.

## AJAX

Its not a programming a language nor a new technology. Its allows JavaScript code to be executed asynchronously which is a precusor to single page applications.

## JavaScript Engine

In 2008, Google Chrome and V8 Engine was released. Both were realeased on the same date, 2nd Sep, 2008. V8 Engine changed the way JavaScript is compiled and interpreted, making it highly viable option for high-performance both in the browser and server-side.

## JavaScript Libraries

JavaScript libraries comprises of various functions or lines of code for performing specific tasks on a web-page. Developers use these libraries to save time and ease programming workload. It helps reduce code by providing its own code.

## JQuery

It was released in 2006. Its one of the JavaScript library that have rich documentation. It allows developers to build complex and interactive applications. It works reliably on all browsers.

## Single Page Applications

Single Page Applications are JavaScript Applications that loads a single web document and updates body content of that single document according to the events be fired by the user.

## SPA Libraries & Frameworks

From 2010, JavaScript frameworks started being created specifically for Single Page Applications. Two frameworks Angular & Backbone, both were released in Oct, 2010. Both solved the problem in different ways. Backbone is light-weight and handled DOM updates with an imperative programming style.  While, Angular was all-inclusive and used a declarative programming style. It was created by Jeremy Ashkenas. He also created CoffeeScript and Underscore.js. CoffeeScript is a first language that introduced the concept of transpilling to JavaScript.

In May 2013, Facebook released ReactJS. It was developed rapidly and enchanced declarative UI patters nowadays used in many applications.

## Node.js

In 2009, Ryan Dahl introduced Node.js. Its a server-side runtime environment for JavaScript built on top of V8 that comprises of event loop which was a unique concept at that time and allows to write event-driven and non-blocking code. And because of its characterstics, Node.js became a best option for building web applications that scale. It make JavaScript eligible to be used to create an entire application stack, known commonly as JavaScript everywhere paradigm.
