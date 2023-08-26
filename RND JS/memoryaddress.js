/*
how to get memoery address in js
In JavaScript, you cannot ---directly access memory addresses like you can in low-level programming languages like C or C++. 
JavaScript is a higher-level language that ---abstracts away many low-level details of memory management---.

Instead, JavaScript uses a garbage collector to automatically allocate and deallocate memory as needed. The specifics of how memory is managed in JavaScript are handled by the browser or runtime environment, and are generally not exposed to the programmer.

That being said, if you are trying to debug memory-related issues in your JavaScript code, 
you can use the browser's Developer Tools or a third-party memory profiling tool to inspect memory usage and track down any memory leaks or performance issues in your code.
 These tools can give you detailed information about memory usage, object allocation, and garbage collection in your JavaScript code.
*/

/*
In computer programming, a memory leak is a type of software bug where a 
program fails to release memory that is no longer needed, causing the program to consume more and more memory over time. This can eventually lead to the program running out of memory and crashing or becoming unresponsive.

Memory leaks are particularly common in languages like C or C++ that allow direct memory management, but 
they can ----also occur in higher-level languages like JavaScript that use automatic memory management.

In JavaScript, memory leaks can occur when objects are created but not properly released or garbage collected when they are no longer needed. 
----This can happen if the programmer creates objects that are referenced by other objects or variables that remain in scope, preventing the garbage collector from freeing up the memory. Over time, this can cause the program to consume more and more memory, leading to slower performance and potential crashes.

To prevent memory leaks in JavaScript, it's important to properly manage object lifetimes and ensure that objects are properly released and garbage collected when they are no longer needed. 
This can be done by using best practices like avoiding 
    circular references,
    minimizing the use of global variables, 
    and using tools like browser developer tools or 
    third-party memory profiling tools to identify and fix memory leaks.

*/

/*
@circular references---

In JavaScript, circular references occur when two or more objects reference each other in a loop, creating a cycle that prevents the garbage collector from freeing up memory.

Here's an example:

const obj1 = {};
const obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1;

In this example, obj1 has a property called ref that points to obj2, and obj2 has a property called ref that points back to obj1. This creates a circular reference, where obj1 references obj2 and obj2 references obj1, and neither object can be garbage collected because it is still being referenced by the other.

Circular references can be a common cause of memory leaks in JavaScript because they prevent objects from being properly garbage collected. To avoid circular references, it's important to carefully manage object lifetimes and ensure that objects are properly released and garbage collected when they are no longer needed. 
This can be done by 
    breaking the circular reference or 
    by using weak references, which allow objects to be garbage collected even if they are still referenced by other objects.
*/

/*

Solve above problem

    To solve the problem of circular references in JavaScript, you can either break the circular reference or use weak references. Here are some examples of each approach:

Breaking the circular reference:
    One way to break a circular reference is to explicitly set one or more of the reference properties to null or undefined when they are no longer needed. Here's an example:

    const obj1 = {};
    const obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;

    // ...
    obj1.ref = null;
    obj2.ref = null;

    In this example, we break the circular reference by setting obj1.ref and obj2.ref to null when we no longer need them. This allows the garbage collector to properly clean up the memory used by obj1 and obj2.

Using weak references:
    Another way to deal with circular references is to use weak references. Weak references are a type of reference that allow an object to be garbage collected even if it is still being referenced by other objects.

    Weak references are ------not natively supported in JavaScript-----, but 
    some libraries like @weakref provide a way to create weak references. Here's an example using the weakref library:

    const weakref = require('weakref');

    const obj1 = {};
    const obj2 = {};
    obj1.ref = weakref(obj2);
    obj2.ref = weakref(obj1);
    // ...
    In this example, we create a weak reference to obj2 using the weakref function and assign it to obj1.ref. Similarly, we create a weak reference to obj1 and assign it to obj2.ref. Because weak references do not prevent objects from being garbage collected, we do not need to worry about circular references causing memory leaks.
*/
