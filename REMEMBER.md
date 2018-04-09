<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Some concepts](#some-concepts)
  - [Starting](#starting)
  - [Pure Functions](#pure-functions)
  - [Functions](#functions)
    - [High order functions](#high-order-functions)
    - [Callback Function](#callback-function)
  - [Closures](#closures)
    - [Lexical scope](#lexical-scope)
  - [Asynchronous javascript](#asynchronous-javascript)
  - [Object oriented programming](#object-oriented-programming)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Some concepts

## Starting

Starting with a javascript file

1. store all variables (including functions) in global memory
2. create a global execution context with two parts: Thread of execution (parse and execute files line by line) and live memory of variables with data (known as global variable environment)

- Single threaded!!!

- All functions are executed line by line (one after another, not two at the same time)

When a function is called, an local memory context is created, then, when the function ends, the local memory context is removed.

The call stack tracks which execution context we are in. One global execution context, multiple function contexts.


## Pure Functions

No side effects, the only consequence of the function is the return. Doesn't mutate anything. No changes in the global context, just the local context.

## Functions

- Functions are fisrt class objects, they can coexist and be treated like any other javascript object. They can be assigned, passed, and returned.


### High order functions

Functions that can take as argument another function or pass out a function. Big functions. Is just like any other function except that takes or outputs another function.

### Callback Function

Small functions.

## Closures

Where you define your functions determines what variables your function has acces to when you call the function. Context.

EXECUTION CONTEXT!!

### Lexical scope

When a function is defined, it gets a [[scope]] property that references local memory/variable environment in which it has been defined.

[[SCOPE]] -> links the function to the surroinding data (variables in closures)

javascript static/lexical scoping

Lexical means the data available to the function is determined by where is defined, not where is called.

## Asynchronous javascript

Three characteristics:
- Web browser apis / Node background threads
- Callback / Message / Task queue
- Event loop

All async results are saved in the callback queue, and are only executed when the call stack is empty (even global finisshed altough global never really exit the call stack)

The event loop checks if the call stack is empty.

## Object oriented programming

- Easy to add new functinoality
- Performant (efficient in terms of memory)
- Easy to understand

This is always to the left of the dot.
When Object.create(someProperties) is used to create an object, then __proto__ is set to someProperties.

*__proto__* is different of *prototype*. If the property is not in the object itself, then javascript search in *__proto__*.

Every javascript object can have only one __proto__.