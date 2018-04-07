<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Some concepts](#some-concepts)
  - [Starting](#starting)
  - [Pure Functions](#pure-functions)
  - [Functions](#functions)
  - [High order functions](#high-order-functions)
- [Callback Function](#callback-function)

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


## High order functions

Functions that can take as argument another function.

# Callback Function

