/* 

setValue( p - 1)

Doesn't account for potential concurrency issues if the value is being modified by other parts of the code or in a multi-threaded environment. */

/* 

setValue((p) => p - 1)

Helps avoid potential concurrency issues because you're working with the previous value in a functional manner.

If you want to ensure that you're working with the most up-to-date value and need to perform more complex calculations, the functional update approach (setValue((p) => p - 1)) might be more appropriate.
*/
