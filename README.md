# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.
The solution involves modifying the function to accept an array of strings or changing how the function processes the input.
## Bug
The `greeter` function expects a single string argument, but an array of strings is passed in. This causes a type error.
## Solution
The solution modifies the `greeter` function to accept an array of strings and iterates through them to produce a greeting for each string in the array.