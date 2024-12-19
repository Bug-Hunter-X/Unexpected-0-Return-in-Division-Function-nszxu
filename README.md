# Unexpected 0 Return in Division Function

This repository demonstrates a subtle bug in a JavaScript function that handles division. The function returns 0 when either of the inputs is 0, which may not always be the expected behavior.  The solution explores more robust handling of division by zero.

## Bug Description

The `myFunc` function calculates the division of two numbers. However, it prematurely returns 0 if either input is 0. This behavior might be undesirable, as it doesn't handle division by zero correctly or signal an error condition.

## Solution

The solution improves the function by explicitly checking for division by zero and either throwing an error or returning a special value to signify an error.  This ensures more reliable and predictable function behavior.