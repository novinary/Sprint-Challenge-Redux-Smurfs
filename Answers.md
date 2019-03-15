1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, filter and object.assign methods do not produce side-effects

Object.assign is used to create a new object while extending the properties to another project.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are objects with types and typically a payload of information passed to the reducers.

reducers are functions that set the state of the store based on what action types was passed to it

the store holds the whole state tree of the application, the state is change when  action is dispatched to the reducer.

the store is knows as a 'single source of truth' because the app changes based on state, and the store holds current and previous iterations of state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is state accessable to the entire application

component stae is state declared on a component and the only ones who can access it are the component itself and its children.

1.  What is middleware?
Middleware is the bridge between actions and the reducer. It allows actions to happen asynchronously.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is middleware that allows for asynchornous actions.

It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux store. 


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect() which takes state from store and maps it as props to the the referenced component.
