# String Concatenation

## Table of Contents
- [String Concatenation](#string-concatenation)
  - [Table of Contents](#table-of-contents)
    - [What is String Concatenation?](#what-is-string-concatenation)

### What is String Concatenation?
- Its combining two or more strings.
- It can concatenate variables and/or actual strings (also known as string literals).
- It output a new string from concatenating multi-strings.
- It can be done with a `+` operator.

```js
  let a = "Hello "; // You have to manually put space after the word "Hello" otherwise it will output as HelloWorld
  let b = "World";
  console.log(a + b)
```

- Strings cannot concatenate with numbers.
```js
console.log(1 + "1")
```