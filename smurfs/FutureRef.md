Redux thunk
It is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function. That’s all it does.

Redux will pass two arguments to thunk functions: dispatch, so that they can dispatch new actions if they need to; and getState, so they can access the current state. So you can do things like this:

