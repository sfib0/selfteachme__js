// var example
// var x = "Hello World";
// console.log(x);

// Available even before the var keyword is used
// console.log(y); // undefined
// var y = "Hello World";

// Mutable
// var o = "Hello World";
// o = "Goodbye World";
// console.log(o);

// Can be initialized before being declared
// z = "Hello World";
// var z;
// console.log(z);

// Always initialize variables to the top
// var p;
// console.log(p); // undefined
// var p = "Hello World";

// let example
// let q = "Hello World";
// console.log(q);

// Its block-scoped
// Wrong way to do it
// {
//   let r = "Hello World";
// }
// console.log(r) // ReferenceError: r is not defined

// Right way to do it
// {
//   let v = "Hello World";
//   console.log(v);
// }

// It has to be initialized before being used
// t = "Hello World";
// let t;
// console.log(t) // ReferenceError: Cannot access 't' before initialization

// Mutable only in scope
// w = "World"
// if (true) {
//   let w;
//   let u = "Hell";
//   u = "Hello";
//   console.log(u, w); // Hello undefined
// }

// const example
// const k = "Hello World";
// console.log(k);

// Its also block-scoped
// Wrong way to do it
// {
//   const e = "Hello World";
// }
// console.log(e) // ReferenceError: r is not defined

// Right way to do it
// {
//   const w = "Hello World";
//   console.log(w);
// }

// Immutable
// const n = "Hello World";
// n = "Goodbye World";
