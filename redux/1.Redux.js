// ##Note 
// , How the Action flows ? Store, Dispatch, Reducers
// . What does Redux.subscribe() method do?
// . What is middleware for ? 

//Redux is a state management framework , predictable state container.
//The unidirectional data flow makes it easier to track state management in your app.
//It stores, actions, reducers, and middleware to manage data throughout the application
//FrameWork - React, Angular, Vue - Forces our application into a structure
//Library - provide codes so that we can use.
//Version Control System - Git 

//1. Create Redux Store
//The Redux store is an object which holds and manages application state. 
const reducer = (state = 5) => {
  return state;
}
const store = Redux.createStore(reducer);

//2.Get State from the Redux Store
const store = Redux.createStore(
    (state=5) => state
);

const currentState = store.getState();

//3.Define a Redux Action
const action = {
  type: 'LOGIN'
}

//4.Define an Action Creator
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator() {
  return action;
}

//5.Dispatch an Action Event
store.dispatch(loginAction());

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

//6. Reduce handles action in the store 
//A reducer takes state and action as arguments, and it always returns a new state. 
//It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises.
//The reducer is simply a pure function that takes state and action, then returns new state.
const defaultState = {
  login : false
};

const reducer = (state= defaultState, action) => {
  if(action.type === 'LOGIN') {
    return {
      login:true
    };
  } else {
    return state;
  };
}

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

//7. Reducer uses a Switch Statement to handle actions
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
    return {
      authenticated : true
    };
    case 'LOGOUT':
    return {
      authenticated : false
    };
   default:
    return defaultState;
  }
}; 

const defaultState = {
  authenticated: false
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

//8.use Const for action type
// A common practice when working with Redux is to assign action types as read-only constants, 
// then reference these constants wherever they are used. You can 
// refactor the code you're working with to write the action types as const declarations.
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//9. store.subscribe(). METHOD in Redux
//To subscribe a function to your store that simply logs a message 
//every time an action is received and the store is updated.

let count = 0;

const increments=()=> (count +=1);
store.subscribe(increments);

//10. CombineReducers
const rootReducer = Redux.combineReducers({
  count : counterReducer,
  auth: authReducer
});

//11. Redux overall : Send Action Data to the Store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
     return action.text;
     
      default:
      return state;
  }
};

const addNoteText = (note) => {
      return{
      type: ADD_NOTE,
      text:note
      }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());


//12. Redux Middleware
//At some point you'll need to call asynchronous endpoints in your Redux app
//Redux Thunk middleware

//To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). This statement
//is then provided as a second optional parameter to the createStore() function.
const store = Redux.createStore(asyncDataReducer, Redux.applyMiddleware(ReduxThunk.default));

// Then, to create an asynchronous action, 
//you return a function in the action creator that takes dispatch as an argument.
//Remember that you're passing dispatch as a parameter to this special action creator. 
//This is what you'll use to dispatch your actions, 
//you simply pass the action directly to dispatch and the middleware takes care of the rest.

const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA= 'RECEIVED_DATA';

const requestingData =() => {return {type: REQUESTING_DATA}}
const receivedData =() => {return {type: RECEIVED_DATA, user: data.users}}

const handleAsync = () => {
  return function(dispatch) {
    dispatch (requestData());

    setTimeout(function() {
      let data = {
        users:['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState ={
  fetching: false,
  users : []
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

const asyncDataReducer = () => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users:[]
      }
    case RECEIVED_DATA:
      return {
        fetching:false,
        users:action.users
      }
    default :
    return state;
  }
};

//12. Redux overall - 2
const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT'; 

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    return state +1;
    
    case DECREMENT:
    return state -1;
    
    default :
    return state
  }
}

let count = 0
const incAction = ()=> {
  return {
    type: INCREMENT
  }
}

const decAction = () => {
  return {
    type: DECREMENT
  }
}

const store = Redux.createStore(counterReducer);

//13. Never Mutate State state immutability in Redux. 
//Immutable state means that you never modify state directly, instead, you return a new copy of state.
const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code"
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail

      return state.concat(action.todo);
    // or return [...state, action.todo]

    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = todo => {
  return {
    type: ADD_TO_DO,
    todo
  };
};

const store = Redux.createStore(immutableReducer);

//14. Use the Spread Operator on Arrays
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

//15. Remove an Item from an Array
const immutableReducer = (state =[0,1,2,3,4,5,6], action) => {
  switch(action.type) {
      case 'REMOVE_ITEM' :
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index +1, state.length)
        ]
        default:
          return state;
  }
};

const removeItem = (index) => {
  return {type: 'REMOVE_ITEM', index}
}

const store = Redux.createStore(immutableReducer);

//16. Copy an Object with Object.assign()
// Object.assign({}, obj1, obj2)
//This creates new Object '{}' which contains the properties that obj1 matches with obj2 
//Edit the code to return a new state object for actions with type ONLINE
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail  
      return Object.assign({}, state, {status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);