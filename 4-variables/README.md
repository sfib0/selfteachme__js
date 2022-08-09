# Declaring Variables

## Table of Contents
- [Declaring Variables](#declaring-variables)
  - [Table of Contents](#table-of-contents)
    - [`var`](#var)
    - [`let`](#let)
    - [`const`](#const)
    - [What to use when?](#what-to-use-when)


### `var`
- Original way to define variables in JavaScript.
```js
  var greetings = "Hello World";
```

- It's have function-scoped declaration. In the following code, we don't have function but Nodejs puts an implicitly puts a function containing whole code.
```js
  var greetings = "Hello World";
  console.log(greetings); // Hello World
```

- It's available everywhere even if you just initialized it.
```js
  console.log(greetings) // undefined - because the variable is  it is assigned with type undefined.
  var greetings = "Hello World";
```

- It's value is mutable (can be reassigned values of same or another type at any time), its a potentially dangerous way to declare variables.
```js
  var greetings = "Hello World";
  console.log(greetings) // "Hello World"

  greetings = 404;
  console.log(greetings) // 404

  greetings = false;
  console.log(greetings) // false
```

- It can be initialized before being declared because its declaration gets hoisted to the top of the whole code.
```js
  greetings = "Hello World";
  var greetings;
  console.log(greetings); // Hello World
```

- You should always initialized variables to the top.
```js
var p;
console.log(p); // undefined
var p = "Hello World";
```

In the above code, declaration got hoisted but initializations are not.

### `let`
- Its similar to `var` expect that it is block scoped instead of function scoped. 
- Its only available inside a block which is denoted by open and closed curly brackets (`{ }`) in which this will defined in.

```js
  // Wrong way to do it
  {
    let r = "Hello World";
  }
  console.log(r) // ReferenceError: r is not defined

  // Right way to do it
  {
    let v = "Hello World";
    console.log(v);
  }
```

- Its mutable only in scope (reassignable to another values of same or another type).
```js
  w = "World"
  if (true) {
    let w;
    let u = "Hell";
    u = "Hello";
    console.log(u, w); // Hello undefined
  }
```

- It has to be declared before initialization. It will throw a `Reference Error` if it is used before declaration because its declaration gets hoisted to its block but not initialized.

```js
greetings = "Hello World";
let greetings; 
console.log(greetings)
```

In the above code, JavaScript is recognizing the block-scope for `let` variable as the line in which it is declared and the lines after its declaration.

### `const` 
- Its also block-scoped.
- Its also has to be decalared before usage.
- Its immutable (it cannot be reassigned).
```js
const greetings = "Hello";
greetings = "Hello World";
console.log(greetings) // Uncaught TypeError: Assignment to constant variable.
```

### What to use when?
`const`: You should use it often. It decreases chances of bugs because it will not reassigned by anything which you might not be aware of.
`let`: You can use it in loops but if you use const, you couldn't be able to reassign it for each iteration.
`var`: `const` and `let` declaration solves all the problems that happens with `var` declaration.